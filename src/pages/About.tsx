import { motion } from 'motion/react';
import { Leaf, Heart, Recycle, MapPin } from 'lucide-react';

export default function About() {
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
            Ko smo mi i zašto Smolovit?
          </motion.h1>
          <div className="w-24 h-1 bg-resin mx-auto" />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-serif text-forest italic">Priča brenda</h2>
            <div className="space-y-4 text-forest/80 leading-relaxed text-lg">
              <p>
                Smolovit je nastao iz ljubavi prema prirodi i vjere da zemlja nudi sve što nam treba za zdravlje i ljepotu. Krenuli smo od starih recepata, koje su generacije prenosile usmeno – recepata koji su koristili smrekovu smolu za rane, pčelinji vosak za zaštitu kože, maslinovo ulje za ishranu.
              </p>
              <p>
                Danas, te iste recepture unapređujemo ručnom izradom u malim serijama, osiguravajući svježinu i čistoću svakog proizvoda koji stigne do tebe.
              </p>
            </div>
          </motion.div>
          <div className="h-[500px] bg-forest/10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=1000&auto=format&fit=crop" 
              alt="Nature forest" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-forest text-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-8 italic text-resin">„Doktor liječi, priroda izliječi"</h2>
            <div className="space-y-6 text-warm-white/80 leading-relaxed text-lg italic">
              <p>
                Nije samo naš moto – to je uvjerenje koje nas vodi svaki dan. Vjerujemo u dopunu, ne zamjenu konvencionalnog liječenja. 
              </p>
              <p>
                Naši balzami i kreme su saveznici tvog tijela – njeguju, štite i pomažu da se osjećaš bolje u svojoj koži.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-cream p-10 rounded-2xl flex flex-col gap-4 shadow-sm"
            >
              <Leaf className="w-10 h-10 text-forest" />
              <h3 className="text-xl font-bold">Prirodnost</h3>
              <p className="text-forest/70 text-sm">Svaki sastojak ima svrhu. Ništa višak, ništa lažno.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-cream p-10 rounded-2xl flex flex-col gap-4 shadow-sm"
            >
              <Heart className="w-10 h-10 text-forest" />
              <h3 className="text-xl font-bold">Ručna izrada</h3>
              <p className="text-forest/70 text-sm">Malim serijama čuvamo kvalitet. Svaka tegla je jedinstven trud.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-cream p-10 rounded-2xl flex flex-col gap-4 shadow-sm"
            >
              <Recycle className="w-10 h-10 text-forest" />
              <h3 className="text-xl font-bold">Ekološka svijest</h3>
              <p className="text-forest/70 text-sm">Pakujemo u reciklirane materijale. Prirodi vraćamo koliko uzimamo.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-cream p-10 rounded-2xl flex flex-col gap-4 shadow-sm"
            >
              <MapPin className="w-10 h-10 text-forest" />
              <h3 className="text-xl font-bold">Lokalni korijeni</h3>
              <p className="text-forest/70 text-sm">Smola, vosak i bilje – sve je s naših planina i pčelinjaka.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
