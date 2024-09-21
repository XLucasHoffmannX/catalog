import { useState } from 'react';

export function useImageWithLoader() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return {
    handleImageLoad,
    isLoading
  };
}
