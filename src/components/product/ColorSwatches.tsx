'use client';

import type { ProductColor } from '@/lib/products';

interface ColorSwatchesProps {
  colors: ProductColor[];
  selectedColor: string | null;
  onSelect: (color: string) => void;
  compact?: boolean;
}

export default function ColorSwatches({
  colors,
  selectedColor,
  onSelect,
  compact = false,
}: ColorSwatchesProps) {
  const sizeClass = compact ? 'w-6 h-6 lg:w-5 lg:h-5' : 'w-8 h-8 lg:w-6 lg:h-6';
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => {
        const isActive = selectedColor === color.name;
        return (
          <button
            key={color.name}
            onClick={() => onSelect(color.name)}
            className={`${sizeClass} rounded-full transition-all duration-300 ${
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
