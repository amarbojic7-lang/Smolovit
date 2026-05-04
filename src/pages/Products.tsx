import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { TreePine, Check, Info } from 'lucide-react';

export default function Products() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 bg-forest text-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mb-8"
          >
            Naša kolekcija prirodnih krema i balzama
          </motion.h1>
          <p className="text-xl text-resin font-serif italic mb-6">
            Pronađite idealno rješenje za vašu kožu
          </p>
          <p className="text-warm-white/70 leading-relaxed max-w-2xl mx-auto">
            Svaki Smolovit proizvod sadrži iste bazne sastojke koji zajedno stvaraju snažnu kombinaciju za njegu kože: smrekovu smolu, pčelinji vosak, maslinovo ulje i biljnu mast.
          </p>
        </div>
      </section>

      {/* Products list */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-6xl mx-auto space-y-32">
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              {/* Product Image Placeholder */}
              <div className="w-full md:w-1/2 relative group">
                <div className="aspect-square bg-cream rounded-3xl overflow-hidden shadow-xl">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556229162-5c63ed9c4ffb?q=80&w=800&auto=format&fit=crop)` }}
                  />
                  <div className="absolute inset-0 bg-forest/10 group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-6 rounded-2xl shadow-lg border border-forest/5 hidden sm:block">
                   <p className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Dostupno u</p>
                   <div className="flex gap-2">
                     {product.sizes.map(size => (
                       <span key={size} className="bg-forest text-warm-white text-[10px] px-3 py-1 rounded-full font-bold">{size}</span>
                     ))}
                   </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-forest font-bold mb-2 block">{product.subtitle}</span>
                  <h2 className="text-4xl font-serif text-forest">{product.name}</h2>
                </div>
                
                <p className="text-forest/80 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3">
                  <h3 className="font-bold text-forest flex items-center gap-2">
                    <Check className="text-resin w-5 h-5" /> Prednosti:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-forest/70 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-resin rounded-full mt-1.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-forest/5 rounded-2xl border border-forest/10">
                  <h3 className="font-bold text-forest flex items-center gap-2 mb-2">
                    <TreePine className="text-forest w-5 h-5" /> Sastojci:
                  </h3>
                  <p className="text-sm text-forest/70 italic">
                    {product.ingredients.join(", ")}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-forest">Način upotrebe:</h3>
                  <p className="text-sm text-forest/70">{product.usage}</p>
                </div>

                {product.note && (
                  <div className="flex gap-3 bg-resin/10 p-4 rounded-xl border border-resin/20">
                    <Info className="text-forest w-5 h-5 shrink-0" />
                    <p className="text-xs text-forest/80 font-medium">{product.note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
