'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '@/lib/products';

interface ProductGalleryProps {
  product: Product;
  selectedColor?: string | null;
}

export default function ProductGallery({ product, selectedColor }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Determine which images to show based on selected color
  const images = (selectedColor && product.colorImages?.[selectedColor])
    ? product.colorImages[selectedColor]
    : product.images;

  // Reset to first image when color changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedColor]);

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedColor}-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex] || images[0]}
              alt={`${product.name}${selectedColor ? ` in ${selectedColor}` : ''} — image ${activeIndex + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority={activeIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 mt-4 justify-center">
        {images.map((img, index) => (
          <button
            key={`${selectedColor}-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`relative w-16 h-16 lg:w-20 lg:h-20 overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? 'ring-1 ring-ink ring-offset-2 ring-offset-cream'
                : 'opacity-60 hover:opacity-100'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={img}
              alt={`${product.name} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
