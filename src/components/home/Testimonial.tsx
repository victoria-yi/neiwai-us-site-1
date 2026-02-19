'use client';

import FadeIn from '@/components/ui/FadeIn';

interface TestimonialProps {
  quote?: string;
  name?: string;
}

export default function Testimonial({
  quote = 'I put it on and forgot about it entirely. That had never happened before with any bra. By the end of the day I realized — that absence of awareness is the whole point.',
  name = 'Loni',
}: TestimonialProps) {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-20">
      <div className="max-w-[720px] mx-auto text-center">
        <FadeIn duration={0.8}>
          <blockquote className="font-display text-[22px] sm:text-[26px] lg:text-[30px] font-light text-ink leading-[1.4] tracking-wide italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <p className="font-body text-[13px] text-taupe mt-8 tracking-wide">
            — {name}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
