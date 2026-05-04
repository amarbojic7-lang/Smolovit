import { motion } from 'motion/react';
import { INGREDIENTS } from '../constants';
import { TreePine, Droplet, Leaf, Info } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  tree: TreePine,
  'honey-comb': Info,
  droplet: Droplet,
  leaf: Leaf,
};

export default function Ingredients() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            Šta se krije u Smolovit kremama?
          </motion.h1>
          <div className="w-24 h-1 bg-resin mx-auto mb-8" />
          <p className="text-forest/80 text-lg max-w-2xl mx-auto">
            Transparentnost je naša vrijednost. Evo tačno šta stavljamo u svaki proizvod – i zašto.
          </p>
        </div>
      </section>

      {/* Ingredients detail */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {INGREDIENTS.map((ingredient, index) => {
            const Icon = ICON_MAP[ingredient.iconName] || TreePine;
            return (
              <motion.div 
                key={ingredient.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/3 aspect-square bg-forest flex items-center justify-center rounded-full relative overflow-hidden group">
                  <div className="relative z-10 p-12 text-resin group-hover:scale-125 transition-transform duration-500">
                    <Icon className="w-full h-full" size={120} />
                  </div>
                  <div className="absolute inset-0 bg-resin/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="w-full md:w-2/3 flex flex-col gap-6">
                  <div>
                    <span className="text-resin font-bold uppercase tracking-widest text-sm block mb-2">{ingredient.name}</span>
                    <h2 className="text-4xl font-serif text-forest">{ingredient.title}</h2>
                  </div>
                  
                  <p className="text-lg text-forest/70 leading-relaxed italic border-l-4 border-resin pl-6">
                    {ingredient.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-bold text-forest uppercase tracking-tighter self-center mr-2">Djeluje na:</span>
                    {ingredient.worksOn.map(item => (
                      <span key={item} className="bg-forest/5 text-forest border border-forest/10 px-4 py-2 rounded-full text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-24 px-6 bg-forest text-warm-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
          <Leaf className="w-12 h-12 text-resin mx-auto" />
          <h2 className="text-3xl font-serif italic">"Vjerujemo da priroda nudi najbolje odgovore."</h2>
          <p className="text-warm-white/70 leading-relaxed">
            Koristimo isključivo sirove i neobrađene materijale od lokalnih proizvođača. Naša smola je skupljana ručno, vosak je organski, a maslinovo ulje je ekstra djevičansko.
          </p>
        </div>
      </section>
    </div>
  );
}
