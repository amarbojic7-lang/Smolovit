import { motion } from 'motion/react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 bg-forest text-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            Šta kažu naši kupci?
          </motion.h1>
          <div className="w-24 h-1 bg-resin mx-auto mb-8" />
          <p className="text-resin/80 text-lg font-serif italic">Istinite priče o oporavku i njezi</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid bg-cream p-10 rounded-3xl shadow-sm border border-forest/5 flex flex-col gap-6 relative overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Quote className="w-20 h-20 text-forest" />
                </div>
                
                <div className="flex gap-1 text-resin">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-resin" />
                  ))}
                </div>

                <p className="text-forest/80 text-lg leading-relaxed italic">
                  "{review.text}"
                </p>

                <div className="flex flex-col">
                  <span className="font-bold text-forest">{review.author}</span>
                  <span className="text-sm text-forest/50 font-serif">{review.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Callout */}
      <section className="py-24 px-6 bg-cream border-t border-forest/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif italic text-forest mb-6 italic">Podijelite svoje iskustvo s nama</h2>
          <p className="text-forest/70 mb-8">Vaše povratne informacije nam pomažu da budemo bolji i da širimo snagu prirode dalje.</p>
          <a 
            href="https://instagram.com/smolovit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-forest text-warm-white px-8 py-3 rounded-full font-bold hover:bg-resin transition-colors"
          >
            Pišite nam na Instagramu
          </a>
        </div>
      </section>
    </div>
  );
}
