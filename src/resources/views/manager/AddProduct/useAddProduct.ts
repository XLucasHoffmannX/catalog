import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { addProductSchema, AddProductSchemaType } from './add-product.schema';

export function useAddProduct() {
  const methods = useForm<AddProductSchemaType>({
    resolver: zodResolver(addProductSchema)
  });

  function onSubmit(data: AddProductSchemaType) {
    console.log(data);
    toast.success('Produto adicionado');
  }

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    methods,
    errors: methods.formState.errors
  };
}
