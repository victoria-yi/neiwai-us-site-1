'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import type { TechnologyFeature } from '@/lib/products';

// ── Thin-line icons for each technology feature ──
// Designed to match NEIWAI's quiet-luxury aesthetic: 28x28, stroke 1.2

function FeatureIcon({ icon }: { icon?: TechnologyFeature['icon'] }) {
  if (!icon) return null;

  const shared = 'text-accent flex-shrink-0';
  const props = {
    width: 28,
    height: 28,
    viewBox: '0 0 28 28',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: shared,
  };

  switch (icon) {
    // Invisible: eye with a subtle line through it
    case 'invisible':
      return (
        <svg {...props}>
          <path d="M2 14s4.5-8 12-8 12 8 12 8-4.5 8-12 8S2 14 2 14z" />
          <circle cx="14" cy="14" r="3.5" />
          <line x1="4" y1="24" x2="24" y2="4" strokeWidth="1" />
        </svg>
      );

    // 3D Molding: cube / dimensional shape
    case 'molding':
      return (
        <svg {...props}>
          <path d="M14 3L25 9v10l-11 6L3 19V9l11-6z" />
          <path d="M14 3v12" />
          <path d="M14 15l11-6" />
          <path d="M14 15L3 9" />
        </svg>
      );

    // Stretch: expanding arrows / elastic movement
    case 'stretch':
      return (
        <svg {...props}>
          <path d="M7 14h14" />
          <path d="M3 14l4-3v6l-4-3z" />
          <path d="M25 14l-4-3v6l4-3z" />
          <path d="M14 7v14" />
          <path d="M14 3l-3 4h6l-3-4z" />
          <path d="M14 25l-3-4h6l-3 4z" />
        </svg>
      );

    // Breathe: wind / airflow lines with a leaf hint
    case 'breathe':
      return (
        <svg {...props}>
          <path d="M5 10c3-2 6 0 9-2s6 0 9-2" />
          <path d="M5 15c3-2 6 0 9-2s6 0 9-2" />
          <path d="M5 20c3-2 6 0 9-2s6 0 9-2" />
          <circle cx="14" cy="14" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );

    // Durability: shield
    case 'durability':
      return (
        <svg {...props}>
          <path d="M14 3L4 7v6c0 6.5 4.5 11.5 10 13 5.5-1.5 10-6.5 10-13V7L14 3z" />
          <path d="M10 14l3 3 5-6" />
        </svg>
      );

    // Anchor: anchored cup — a subtle anchor / pin shape
    case 'anchor':
      return (
        <svg {...props}>
          <circle cx="14" cy="7" r="3" />
          <path d="M14 10v12" />
          <path d="M8 16c0 4 2.5 6 6 6s6-2 6-6" />
          <path d="M10 14h8" />
        </svg>
      );

    // Comfort: shoulder / soft embrace shape
    case 'comfort':
      return (
        <svg {...props}>
          <path d="M14 24c-6 0-10-3-10-7 0-3 2-5.5 5-7" />
          <path d="M14 24c6 0 10-3 10-7 0-3-2-5.5-5-7" />
          <path d="M9 10c1.5-3 3-5 5-6 2 1 3.5 3 5 6" />
          <circle cx="14" cy="12" r="2" />
        </svg>
      );

    default:
      return null;
  }
}

interface TechnologyStoryProps {
  features: TechnologyFeature[];
  productName: string;
}

export default function TechnologyStory({ features, productName }: TechnologyStoryProps) {
  return (
    <section className="bg-warm-white">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-16 lg:pt-24 pb-8 lg:pb-12">
        <FadeIn>
          <Overline>The Technology</Overline>
          <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink mt-4 max-w-2xl">
            What makes the {productName} different
          </h2>
          <p className="font-body text-[15px] text-taupe mt-4 max-w-xl leading-relaxed">
            Every detail engineered into a single garment. This is where our Barely Zero
            technology reaches its most refined form.
          </p>
        </FadeIn>
      </div>

      {/* Feature blocks — alternating layout */}
      <div className="max-w-[1440px] mx-auto">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={feature.number}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } border-t border-sand/60`}
            >
              {/* Image side */}
              {feature.image && (
                <FadeIn
                  direction={isEven ? 'left' : 'right'}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={`${feature.headline} — ${productName}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>
              )}

              {/* Text side */}
              <div className="w-full lg:w-1/2 flex items-center">
                <FadeIn className="px-6 lg:px-16 py-10 lg:py-16">
                  {/* Number + Icon row */}
                  <div className="flex items-end gap-4">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="inline-block font-display text-[48px] lg:text-[64px] font-light text-sand/80 leading-none"
                    >
                      {feature.number}
                    </motion.span>

                    {feature.icon && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className="mb-2"
                      >
                        <FeatureIcon icon={feature.icon} />
                      </motion.div>
                    )}
                  </div>

                  <h3 className="font-display text-[22px] lg:text-[26px] font-light text-ink mt-3">
                    {feature.headline}
                  </h3>
                  <p className="font-body text-[14px] text-taupe leading-relaxed mt-4 max-w-md">
                    {feature.description}
                  </p>
                </FadeIn>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom spacer */}
      <div className="h-16 lg:h-24" />
    </section>
  );
}
