'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  title: string;
  content: string;
}

interface ProductAccordionProps {
  items: AccordionItem[];
}

export default function ProductAccordion({ items }: ProductAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-sand">
      {items.map((item, index) => (
        <div key={index} className="border-b border-sand">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-4 font-body text-[14px] text-ink hover:text-accent transition-colors duration-300"
          >
            <span>{item.title}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-taupe flex-shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5l4 4 4-4" />
              </svg>
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="font-body text-[13px] text-taupe leading-relaxed pb-5">
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
