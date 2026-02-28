'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProductGallery from '@/components/product/ProductGallery';
import SizeSelector from '@/components/product/SizeSelector';
import ColorSwatches from '@/components/product/ColorSwatches';
import AddToBag from '@/components/product/AddToBag';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/product/ProductCard';
import VariantSelector from '@/components/product/VariantSelector';
import TechnologyStory from '@/components/product/TechnologyStory';
import VariantComparison from '@/components/product/VariantComparison';
import PDPStickyBar from '@/components/product/PDPStickyBar';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import { getProductBySlug, getRelatedProducts } from '@/lib/products';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

function getGalleryProduct(product: Product, variantId: string | null): Product {
  if (!product.variants || !variantId) return product;
  const variant = product.variants.find((v) => v.id === variantId);
  if (!variant) return product;
  return {
    ...product,
    images: variant.images,
    hoverImage: variant.hoverImage,
    colorImages: variant.colorImages,
  };
}

const lineLabels: Record<string, string> = {
  'barely-zero': 'Barely Zero',
  'pure-comfort': 'Pure Comfort',
  'ultraflex': 'UltraFlex',
  'bandeau': 'Bandeau',
  'swan': 'Swan',
  'featherlight': 'Featherlight',
};

export default function BrasProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const addToBagRef = useRef<HTMLDivElement>(null);

  const hasVariants = !!(product?.variants && product.variants.length > 0);

  useEffect(() => {
    if (product?.variants && product.variants.length > 0 && !selectedVariantId) {
      setSelectedVariantId(product.variants[0].id);
    }
  }, [product, selectedVariantId]);

  const activeColors = useMemo(() => {
    if (!product) return [];
    if (hasVariants && selectedVariantId) {
      const variant = product.variants!.find((v) => v.id === selectedVariantId);
      return variant ? variant.colors : product.colors;
    }
    return product.colors;
  }, [product, hasVariants, selectedVariantId]);

  useEffect(() => {
    if (hasVariants && activeColors.length > 0) {
      setSelectedColor(activeColors[0].name);
    }
  }, [selectedVariantId, hasVariants, activeColors]);

  useEffect(() => {
    if (product && product.sizes.length === 1) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  useEffect(() => {
    if (product && !hasVariants && product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0].name);
    }
  }, [product, hasVariants, selectedColor]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-[28px] font-light text-ink">Product not found</h1>
          <Link href="/bras" className="font-body text-[14px] text-accent mt-4 inline-block hover:underline">
            Return to Bras &rarr;
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 3);
  const galleryProduct = getGalleryProduct(product, selectedVariantId);
  const activeVariant = hasVariants && selectedVariantId
    ? product.variants!.find((v) => v.id === selectedVariantId)
    : null;

  const lineLabel = lineLabels[product.line] ?? 'Bras';

  const accordionItems = [
    {
      title: 'Materials',
      content: product.details.composition,
    },
    {
      title: 'Care Instructions',
      content: product.details.care,
    },
    {
      title: 'Fit Guide',
      content: product.details.fit,
    },
  ];

  const handleVariantSelect = (variantId: string) => {
    setSelectedVariantId(variantId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-4">
        <nav className="font-body text-[12px] text-taupe flex items-center gap-2">
          <Link href="/" className="hover:text-ink transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link href="/bras" className="hover:text-ink transition-colors duration-300">Bras</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* PDP Split Layout */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Gallery — 55% */}
          <div className="w-full lg:w-[55%]">
            <ProductGallery product={galleryProduct} selectedColor={selectedColor} />
          </div>

          {/* Product Info — 45% */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-24 lg:self-start">
            <FadeIn immediate>
              <Overline>{lineLabel}</Overline>

              <h1 className="font-display text-[22px] lg:text-[24px] font-light text-ink mt-3">
                {product.name}
              </h1>

              <p className="font-body text-[16px] text-ink mt-3">
                {formatPrice(product.price)}
              </p>

              <p className="font-body text-[15px] text-taupe mt-4 leading-relaxed">
                {product.description}
              </p>

              <p className="font-body text-[13px] text-accent mt-3 italic">
                {product.lifestyleLine}
              </p>
            </FadeIn>

            {/* Variant Selection */}
            {hasVariants && product.variants && selectedVariantId && (
              <FadeIn delay={0.05} immediate>
                <div className="mt-6">
                  <VariantSelector
                    variants={product.variants}
                    selectedVariantId={selectedVariantId}
                    onSelect={setSelectedVariantId}
                  />
                </div>
                {activeVariant && (
                  <p className="font-body text-[12px] text-taupe mt-2 italic">
                    {activeVariant.description}
                  </p>
                )}
              </FadeIn>
            )}

            {/* Color Selection */}
            <FadeIn delay={0.1} immediate>
              <div className="mt-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-body text-[13px] text-ink">
                    {selectedColor || ''}
                  </span>
                </div>
                <ColorSwatches
                  colors={activeColors}
                  selectedColor={selectedColor}
                  onSelect={setSelectedColor}
                />
              </div>
            </FadeIn>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <FadeIn delay={0.15} immediate>
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body text-[13px] text-ink">Size</span>
                    <button className="font-body text-[12px] text-accent hover:underline">
                      Size Guide
                    </button>
                  </div>
                  <SizeSelector
                    sizes={product.sizes}
                    selectedSize={selectedSize}
                    onSelect={setSelectedSize}
                  />
                </div>
              </FadeIn>
            )}

            {product.sizes.length === 1 && (
              <FadeIn delay={0.15} immediate>
                <div className="mt-5 flex items-center gap-2">
                  <span className="font-body text-[13px] text-ink">Size:</span>
                  <span className="font-body text-[13px] text-taupe">{product.sizes[0]}</span>
                </div>
              </FadeIn>
            )}

            <FadeIn delay={0.2} immediate>
              <div ref={addToBagRef} className="mt-7">
                <AddToBag disabled={!selectedSize} />
              </div>
            </FadeIn>

            {/* Trust signals */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent flex-shrink-0">
                  <path d="M1 12h15m3 0h2a2 2 0 012 2v3a2 2 0 01-2 2h-1" />
                  <path d="M16 12V7a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V12" />
                  <circle cx="7.5" cy="18.5" r="1.5" /><circle cx="18.5" cy="18.5" r="1.5" />
                </svg>
                <span className="font-body text-[12px] text-taupe">Complimentary U.S. shipping on orders above $99</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent flex-shrink-0">
                  <path d="M9 14l-4-4 4-4" /><path d="M5 10h11a4 4 0 010 8h-1" />
                </svg>
                <span className="font-body text-[12px] text-taupe">30-day returns — unworn, tags attached</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent flex-shrink-0">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <span className="font-body text-[12px] text-taupe">Exchanges available for all sizes and colors</span>
              </div>
            </div>

            {/* Always-visible materials summary */}
            <div className="mt-6 pt-5 border-t border-sand">
              <p className="font-body text-[12px] text-taupe leading-relaxed">
                <span className="tracking-[0.1em] uppercase mr-2">Materials</span>
                {product.details.composition}
              </p>
            </div>

            <FadeIn delay={0.25}>
              <div className="mt-4">
                <ProductAccordion items={accordionItems} />
              </div>
            </FadeIn>

            {product.line === 'barely-zero' && (
              <FadeIn delay={0.3}>
                <div className="mt-8 p-6 bg-blush/20">
                  <h3 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-taupe mb-3">
                    The Barely Zero Difference
                  </h3>
                  <p className="font-body text-[13px] text-taupe leading-relaxed">
                    Our proprietary Barely Zero fabric is engineered with a four-way stretch
                    that adapts to your body&apos;s natural movement. No wires. No clasps. No
                    compromise. Just invisible support that lets you forget you&apos;re wearing anything at all.
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </div>

      {/* Technology Story */}
      {product.technologyFeatures && product.technologyFeatures.length > 0 && (
        <TechnologyStory
          features={product.technologyFeatures}
          productName={product.name}
        />
      )}

      {/* Variant Comparison */}
      {hasVariants && product.variants && selectedVariantId && (
        <VariantComparison
          variants={product.variants}
          selectedVariantId={selectedVariantId}
          onSelect={handleVariantSelect}
        />
      )}

      {/* Sticky Add to Bag bar — shows when main add-to-bag scrolls out of view */}
      <PDPStickyBar
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        activeColors={activeColors}
        onColorSelect={setSelectedColor}
        onSizeSelect={setSelectedSize}
        addToBagRef={addToBagRef}
      />

      {/* Complete the Look */}
      {relatedProducts.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:pb-32 lg:py-24 border-t border-sand">
          <FadeIn>
            <Overline>Complete the Look</Overline>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
