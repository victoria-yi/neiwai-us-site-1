'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import type { TechnologyFeature } from '@/lib/products';

interface TechnologyStoryProps {
  features: TechnologyFeature[];
  productName: string;
}

export default function TechnologyStory({ features, productName }: TechnologyStoryProps) {
  return (
    <section className="bg-warm-white">
      {/* Section header — centered */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-16 lg:pt-24 pb-12 lg:pb-16 text-center">
        <FadeIn>
          <Overline>The Technology</Overline>
          <h2 className="font-display text-[24px] lg:text-[32px] font-light text-ink mt-4 max-w-2xl mx-auto whitespace-nowrap">
            What makes the {productName} different
          </h2>
          <p className="font-body text-[14px] text-stone mt-4 max-w-xl mx-auto leading-snug">
            Every detail engineered into a single garment. This is where our Barely Zero
            technology reaches its most refined form.
          </p>
        </FadeIn>
      </div>

      {/* Feature blocks — alternating layout, same horizontal padding as header for alignment */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
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
              <div className="w-full lg:w-1/2 flex items-center justify-center min-h-0">
                <FadeIn className="px-6 lg:px-16 py-12 lg:py-20 w-full">
                  {/* Number — left-aligned with text below */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="block font-numbers text-[54px] lg:text-[72px] font-light text-sand/80 leading-none tabular-nums -ml-[2px] -mt-2"
                  >
                    {feature.number}
                  </motion.span>

                  <h3 className="font-display text-[16px] lg:text-[20px] font-light text-ink mt-3">
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
