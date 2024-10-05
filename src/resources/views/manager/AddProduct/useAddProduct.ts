import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { useAddProductManager } from '@/app/modules/client/products';
import { ProductQueryKeys } from '@/app/modules/client/products/keys/products.key';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { IProductManager, IProductManagerImages } from '@/shared/types';

import { addProductSchema, AddProductSchemaType } from './add-product.schema';

export function useAddProduct() {
  const { userAuthenticated } = useManagementSession();
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [urlInput, setUrlInput] = useState<string>();

  const [images, setImages] = useState<IProductManagerImages[]>();

  const { mutateAddProductManager, isPendingMutate } = useAddProductManager();

  const methods = useForm<AddProductSchemaType>({
    resolver: zodResolver(addProductSchema)
  });

  async function onSubmit(data: AddProductSchemaType) {
    try {
      const payload: IProductManager = {
        companyId: userAuthenticated?.companyId || 0,
        images:
          images && images.length > 0
            ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
              images.map(({ uuidControl, ...rest }) => rest)
            : [],
        isAvaliable: false,
        price: data.price,
        name: data.name,
        discount: data.discount,
        subDescription: data.subDescription,
        description: data.description,
        minQuantity: data.minQuantity,
        isDiscount: !!data.discount,
        avaliable: '-',
        category: true,
        isLastUnits: false
      };

      const response = await mutateAddProductManager(payload);

      queryClient.invalidateQueries({
        queryKey: [ProductQueryKeys.GET_PRODUCT_MANAGER_LIST]
      });

      toast.success(`Produto ${response.id} adicionado com sucesso!`);

      navigate('/products');
    } catch (error) {
      console.error(error);

      toast.error('Não foi possível adicionar seu produto!');
    }
  }

  function handleAddImage(value: string | undefined) {
    if (value && value !== '') {
      setImages(prev => [
        ...(prev || []),
        { url: value, uuidControl: crypto.randomUUID() }
      ]);

      setUrlInput('');
    }
  }

  function handleRemoveImage(uuidControl: string) {
    setImages(prev => prev?.filter(image => image.uuidControl !== uuidControl));
  }

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    isPendingMutate,
    methods,
    errors: methods.formState.errors,
    handleAddImage,
    handleRemoveImage,
    urlInput,
    onChangeUrlInput: setUrlInput,
    images
  };
}
