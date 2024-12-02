import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import {
  useAddProductImages,
  useAddProductManager
} from '@/app/modules/client/products';
import { ProductQueryKeys } from '@/app/modules/client/products/keys/products.key';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { IAddProduct } from '@/shared/types';

import { addProductSchema, AddProductSchemaType } from './add-product.schema';

import { CreatingProductType } from './AddProduct.types';

export function useAddProduct() {
  const { companyId, storeId } = useManagementSession();

  const queryClient = useQueryClient();

  const [fileInputs, setFileInputs] = useState<File[]>([]);

  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [creatingProduct, setCreatingProduct] = useState<CreatingProductType>({
    message: '',
    isLoading: false
  });

  const navigate = useNavigate();
  const { mutateAddProductManager, isPendingMutate } = useAddProductManager();
  const { mutateAddProductImages } = useAddProductImages();

  const methods = useForm<AddProductSchemaType>({
    resolver: zodResolver(addProductSchema)
  });

  async function onSubmit(data: AddProductSchemaType) {
    try {
      if (companyId && storeId) {
        setCreatingProduct({ message: 'Criando seu produto', isLoading: true });

        const payload: IAddProduct = {
          ...data,
          companyId,
          storeId,
          price: Number(data.price),
          name: data.name,
          discount: data.discount || 0,
          content: data.content,
          description: data.description,
          minQuantity: data.minQuantity,
          category: '',
          available: data.available
        };

        await mutateAddProductManager(payload)
          .then(async res => {
            toast.success(`Produto ${res.id} adicionado com sucesso!`);

            queryClient.resetQueries({
              queryKey: [ProductQueryKeys.GET_PRODUCT_MANAGER_LIST_BY_COMPANY]
            });

            if (fileInputs.length > 0 && res.id) {
              setCreatingProduct({
                message: 'Adicionando imagens...',
                isLoading: true
              });

              const formData = new FormData();
              formData.append('productId', res.id); // Adiciona o productId ao FormData

              fileInputs.forEach(file => {
                formData.append('images', file); // 'images' deve corresponder ao campo no backend
              });

              await mutateAddProductImages(formData)
                .then(() => {
                  setCreatingProduct({ message: '', isLoading: false });
                  navigate('/products');
                })
                .catch(() => {
                  toast.error('Falha ao adicionar imagens.');
                  setCreatingProduct({ message: '', isLoading: false });
                });
            } else {
              setCreatingProduct({ message: '', isLoading: false });
              navigate('/products');
            }
          })
          .catch(error => {
            setCreatingProduct({ message: '', isLoading: false });
            toast.error(error);
          });

        return;
      }

      return toast.error(
        'Não foi possível adicionar seu produto! (Nenhuma loja foi criada ainda!)'
      );
    } catch (error) {
      console.error(error);
      setCreatingProduct({ message: '', isLoading: false });
      toast.error('Não foi possível adicionar seu produto!');
    }
  }

  const handleAddImages = (files: File[]) => {
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImages(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });

    setFileInputs(prevFiles => [...prevFiles, ...files]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && fileInputs.length + files.length > 10) {
      toast.error('Você pode adicionar no máximo 10 imagens.');
      e.target.value = '';
      return;
    }

    if (files) {
      const filesArray = Array.from(files);
      handleAddImages(filesArray);
    }
  };

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    isPendingMutate,
    methods,
    errors: methods.formState.errors,
    handleAddImages,
    handleFileChange,
    fileInputs,
    previewImages,
    creatingProduct,
    onChangePreviewImages: setPreviewImages
  };
}
