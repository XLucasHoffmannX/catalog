import React, { useState } from 'react';

import { Button } from '@/resources/components/ui';

interface IColorButtonProps {
  colorClass: string;
  colorName: string;
  isSelected: boolean;
  onSelect: (colorName: string) => void;
}

interface IColorPickerProps {
  onChange: (selectedColor: string) => void;
}

function ColorButton({
  colorClass,
  colorName,
  isSelected,
  onSelect
}: IColorButtonProps): JSX.Element {
  return (
    <Button
      variant={isSelected ? 'default' : 'outline'}
      className='flex items-center gap-1'
      onClick={() => onSelect(colorName)}
    >
      <span className={`rounded-full ${colorClass} w-[15px] h-[15px]`}></span>
      {colorName}
    </Button>
  );
}

export function ColorPicker({ onChange }: IColorPickerProps): JSX.Element {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colors = [
    { colorClass: 'bg-zinc-500', colorName: 'Zinco' },
    { colorClass: 'bg-slate-500', colorName: 'Ardósia' },
    { colorClass: 'bg-stone-500', colorName: 'Pedra' },
    { colorClass: 'bg-gray-500', colorName: 'Cinza' },
    { colorClass: 'bg-neutral-500', colorName: 'Neutro' },
    { colorClass: 'bg-red-500', colorName: 'Vermelho' },
    { colorClass: 'bg-rose-500', colorName: 'Rosa' },
    { colorClass: 'bg-orange-500', colorName: 'Laranja' },
    { colorClass: 'bg-green-500', colorName: 'Verde' },
    { colorClass: 'bg-blue-500', colorName: 'Azul' },
    { colorClass: 'bg-yellow-500', colorName: 'Amarelo' },
    { colorClass: 'bg-violet-500', colorName: 'Violeta' }
  ];

  const handleSelectColor = (colorName: string) => {
    setSelectedColor(colorName);
    onChange(colorName);
  };

  return (
    <div className='flex items-center flex-wrap my-4 gap-3'>
      {colors.map((color, index) => (
        <ColorButton
          key={index}
          colorClass={color.colorClass}
          colorName={color.colorName}
          isSelected={selectedColor === color.colorName}
          onSelect={handleSelectColor}
        />
      ))}
    </div>
  );
}
