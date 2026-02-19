'use client';

import type { ProductColor } from '@/lib/products';

interface ColorSwatchesProps {
  colors: ProductColor[];
  selectedColor: string | null;
  onSelect: (color: string) => void;
}

export default function ColorSwatches({
  colors,
  selectedColor,
  onSelect,
}: ColorSwatchesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => {
        const isActive = selectedColor === color.name;
        return (
          <button
            key={color.name}
            onClick={() => onSelect(color.name)}
            className={`w-8 h-8 lg:w-6 lg:h-6 rounded-full transition-all duration-300 ${
              isActive
                ? 'ring-2 ring-ink ring-offset-2 ring-offset-cream'
                : 'ring-1 ring-sand hover:ring-stone'
            }`}
            style={{ backgroundColor: color.hex }}
            aria-label={`Color: ${color.name}`}
            title={color.name}
          />
        );
      })}
    </div>
  );
}
