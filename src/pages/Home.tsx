import { motion } from 'motion/react';
import { ArrowRight, Leaf, Heart, TreePine, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-forest/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-warm-white mb-4 leading-tight">
              SMOLOVIT
            </h1>
            <p className="text-2xl md:text-3xl font-serif italic text-resin mb-8">
              Doktor liječi. Priroda izliječi.
            </p>
            <p className="text-lg md:text-xl text-warm-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ručno rađene kreme od smrekove smole, pčelinjeg voska i maslinovog ulja – drevna mudrost u modernoj njezi.
            </p>
            <Link 
              to="/proizvodi"
              className="inline-flex items-center gap-3 bg-resin text-forest px-8 py-4 rounded-full font-bold text-lg hover:bg-warm-white transition-all transform hover:scale-105"
            >
              OTKRIJ PRIRODNU NJEGU
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-forest italic">
              U srcu šume, gdje smreka tiho curi zlatnom smolom, rađa se Smolovit.
            </h2>
            <p className="text-lg text-forest/80 leading-relaxed mb-12">
              Svaki naš proizvod nastaje ručno, od pažljivo odabranih prirodnih sastojaka, bez konzervansa i bez kompromisa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center text-forest">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl">100% Prirodno</h3>
                <p className="text-sm text-forest/70">Bez parabena, bez silikona, bez vještačkih mirisa</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center text-forest">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl">Ručna izrada</h3>
                <p className="text-sm text-forest/70">Svaka tegla se puni s ljubavlju u malim serijama</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center text-forest">
                  <TreePine className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl">Smrekova smola</h3>
                <p className="text-sm text-forest/70">Tradicionalni recept iz srca naših planina</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Naši najpopularniji proizvodi</h2>
              <p className="text-forest/60">Izdvojeno iz naše kolekcije prirodnih balzama</p>
            </div>
            <Link to="/proizvodi" className="hidden md:flex items-center gap-2 text-forest font-bold hover:text-resin transition-colors">
              POGLEDAJ SVE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <Link
                key={product.id}
                to="/proizvodi"
                className="group flex flex-col bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-64 bg-forest/5 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop)` }} />
                   <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                   <div className="absolute top-4 right-4 bg-resin text-forest text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                     BESTSELLER
                   </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-resin transition-colors">{product.name}</h3>
                  <p className="text-sm text-forest/60 mb-6">{product.subtitle}</p>
                  <div className="flex items-center gap-2 text-forest font-bold text-sm">
                    DETALJI <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 bg-forest text-warm-white text-center">
        <div className="max-w-4xl mx-auto">
          <Star className="w-12 h-12 text-resin mx-auto mb-8 fill-resin" />
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">
            "Doktor liječi, priroda izliječi."
          </h2>
          <p className="text-xl text-resin/80 font-serif">— Naša filozofija i obećanje vama</p>
        </div>
      </section>
    </div>
  );
}
