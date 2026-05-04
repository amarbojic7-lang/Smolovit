import { Link } from 'react-router-dom';
import { TreePine, Instagram, Mail, Clock, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-forest text-warm-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <TreePine className="text-resin w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tight leading-none">SMOLOVIT</span>
              <span className="text-xs uppercase tracking-widest text-resin font-medium">Doktor liječi. Priroda izliječi.</span>
            </div>
          </Link>
          <p className="text-warm-white/70 text-sm leading-relaxed max-w-xs">
            Ručno rađene kreme od smrekove smole, pčelinjeg voska i maslinovog ulja – drevna mudrost u modernoj njezi.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-resin/20 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:smolovit@email.com" className="p-2 bg-white/10 rounded-full hover:bg-resin/20 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-xl font-bold">Navigacija</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className="text-warm-white/70 hover:text-resin transition-colors">Naslovna</Link></li>
            <li><Link to="/o-nama" className="text-warm-white/70 hover:text-resin transition-colors">O nama</Link></li>
            <li><Link to="/proizvodi" className="text-warm-white/70 hover:text-resin transition-colors">Proizvodi</Link></li>
            <li><Link to="/sastojci" className="text-warm-white/70 hover:text-resin transition-colors">Sastojci</Link></li>
            <li><Link to="/recenzije" className="text-warm-white/70 hover:text-resin transition-colors">Recenzije</Link></li>
            <li><Link to="/kontakt" className="text-warm-white/70 hover:text-resin transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-xl font-bold">Kontakt podaci</h3>
          <ul className="flex flex-col gap-4 text-sm text-warm-white/70">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-resin" />
              <span>Bosna i Hercegovina</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-resin" />
              <span>Pon–Pet 09:00–17:00</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-resin" />
              <span>@smolovit</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-6 text-center">
        <p className="text-xs text-warm-white/50 italic max-w-2xl">
          Disclaimer: Smolovit proizvodi nisu medicinski preparati. Nisu namijenjeni dijagnostici, liječenju ili sprečavanju bolesti. Uvijek se savjetujte s ljekarom.
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">© 2024 Smolovit. Sva prava zadržana.</p>
          <p className="text-xs text-resin font-serif italic">Ručno izrađeno s ljubavlju 🌲</p>
        </div>
      </div>
    </footer>
  );
}
