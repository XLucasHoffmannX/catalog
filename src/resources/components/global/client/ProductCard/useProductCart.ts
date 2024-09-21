import { useEffect, useState } from 'react';

export function useProductCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Array.from({ length: 2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [items.length]);

  return {
    items,
    currentIndex
  };
}
