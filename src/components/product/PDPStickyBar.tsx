'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ColorSwatches from './ColorSwatches';
import SizeSelector from './SizeSelector';
import AddToBag from './AddToBag';
import type { Product } from '@/lib/products';
import type { ProductColor } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

interface PDPStickyBarProps {
  product: Product;
  selectedColor: string | null;
  selectedSize: string | null;
  activeColors: ProductColor[];
  onColorSelect: (color: string) => void;
  onSizeSelect: (size: string) => void;
  addToBagRef: React.RefObject<HTMLDivElement | null>;
}

export default function PDPStickyBar({
  product,
  selectedColor,
  selectedSize,
  activeColors,
  onColorSelect,
  onSizeSelect,
  addToBagRef,
}: PDPStickyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = addToBagRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [addToBagRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-cream/98 backdrop-blur-md border-t border-sand shadow-[0_-4px 20px rgba(0,0,0,0.06)]"
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Left: Product name + price — 2 sizes smaller */}
              <div className="flex-shrink-0 flex items-baseline gap-2 sm:gap-3 min-w-0">
                <p className="font-body text-[13px] sm:text-[15px] text-ink font-medium truncate">
                  {product.name}
                </p>
                <p className="font-body text-[13px] sm:text-[15px] text-ink flex-shrink-0">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Center: Color + Size — color compact, size 1 step larger */}
              <div className="flex-1 flex flex-wrap items-center justify-center gap-3 sm:gap-6 min-w-0">
                {activeColors.length > 0 && (
                  <ColorSwatches
                    colors={activeColors}
                    selectedColor={selectedColor}
                    onSelect={onColorSelect}
                    compact
                  />
                )}
                {product.sizes.length > 1 ? (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <SizeSelector
                      sizes={product.sizes}
                      selectedSize={selectedSize}
                      onSelect={onSizeSelect}
                      sizeVariant="md"
                    />
                    <button
                      className="font-body text-[12px] text-accent hover:underline whitespace-nowrap"
                      aria-label="Size and Fit"
                    >
                      Size and Fit
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="font-body text-[14px] text-taupe">Size:</span>
                    <span className="font-body text-[14px] text-ink">{product.sizes[0]}</span>
                  </div>
                )}
              </div>

              {/* Right: Add to Bag */}
              <div className="flex-shrink-0 w-full sm:w-auto sm:min-w-[200px]">
                <AddToBag
                  disabled={!selectedSize}
                  compact
                  onAdd={() => {}}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
