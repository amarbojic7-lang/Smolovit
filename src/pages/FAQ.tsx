import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../constants';
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center text-forest">
            <MessageCircleQuestion className="w-8 h-8" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif"
          >
            Najčešća pitanja
          </motion.h1>
          <p className="text-forest/60 max-w-xl">
            Sve što ste htjeli znati o našim proizvodima, njihovoj primjeni i porijeklu.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="border border-forest/10 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-cream/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-serif font-bold text-forest">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-resin transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 md:p-8 pt-0 text-forest/70 leading-relaxed border-t border-forest/5 bg-warm-white/30">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Help section */}
      <section className="py-24 px-6 bg-forest text-warm-white text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
           <h2 className="text-3xl font-serif italic">Niste pronašli odgovor?</h2>
           <p className="text-warm-white/70 max-w-xl">Tu smo da odgovorimo na sva vaša pitanja. Slobodno nas kontaktirajte direktno putem Instagrama ili e-maila.</p>
           <div className="h-0.5 w-16 bg-resin" />
        </div>
      </section>
    </div>
  );
}
