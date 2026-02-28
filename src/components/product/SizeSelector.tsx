'use client';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSelect: (size: string) => void;
  outOfStock?: string[];
  sizeVariant?: 'sm' | 'md';
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSelect,
  outOfStock = [],
  sizeVariant = 'sm',
}: SizeSelectorProps) {
  const textClass = sizeVariant === 'md' ? 'text-[14px]' : 'text-[13px]';
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isOutOfStock = outOfStock.includes(size);
        const isActive = selectedSize === size;

        return (
          <button
            key={size}
            onClick={() => !isOutOfStock && onSelect(size)}
            disabled={isOutOfStock}
            className={`min-w-[40px] h-9 px-4 font-body ${textClass} rounded-[4px] transition-all duration-300
              ${
                isActive
                  ? 'bg-charcoal text-cream'
                  : isOutOfStock
                  ? 'bg-cream text-stone/40 border border-sand line-through cursor-not-allowed'
                  : 'bg-cream text-charcoal border border-charcoal/20 hover:border-charcoal'
              }`}
            aria-label={`Size ${size}${isOutOfStock ? ' - out of stock' : ''}`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
