'use client';

import FadeIn from '@/components/ui/FadeIn';

interface BrandMomentProps {
  quote?: string;
  attribution?: string;
  variant?: 'quote' | 'philosophy' | 'image';
}

export default function BrandMoment({
  quote = '"The space between inner comfort and outer beauty — that is where NEIWAI lives."',
  attribution = '',
  variant = 'quote',
}: BrandMomentProps) {
  return (
    <section className="py-32 lg:py-48 px-6 lg:px-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #F7F4F0 0%, #E8E0D5 50%, #F7F4F0 100%)`,
        }}
      />

      <div className="relative max-w-[800px] mx-auto text-center">
        <FadeIn duration={0.8}>
          {variant === 'quote' && (
            <>
              <blockquote className="font-display text-[28px] sm:text-[36px] lg:text-[44px] font-light text-ink leading-[1.3] tracking-wide italic">
                {quote}
              </blockquote>
              {attribution && (
                <p className="font-body text-[13px] text-taupe mt-8 tracking-wide">
                  — {attribution}
                </p>
              )}
            </>
          )}

          {variant === 'philosophy' && (
            <>
              <p className="font-display text-[48px] lg:text-[72px] font-light text-ink/10 mb-4">
                内外
              </p>
              <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink leading-[1.3]">
                Inside and outside
              </h2>
              <p className="font-body text-[15px] text-taupe mt-6 max-w-[480px] mx-auto leading-relaxed">
                Two characters. One philosophy. The harmony between what is felt 
                and what is seen — this is the space NEIWAI inhabits.
              </p>
            </>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
