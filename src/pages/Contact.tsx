import { motion } from 'motion/react';
import { Mail, Instagram, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Hvala vam! Vaša poruka je poslana.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
            Kontaktirajte nas
          </motion.h1>
          <div className="w-24 h-1 bg-resin mx-auto mb-8" />
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto">
            Imate pitanje, prijedlog ili želite naručiti veću količinu? Pišite nam – odgovaramo u roku od 24 sata.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-serif text-forest">Naši podaci</h2>
              <p className="text-forest/60">Pronađite nas na društvenim mrežama ili nam pošaljite e-mail.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3 p-6 bg-cream rounded-2xl border border-forest/5">
                <Instagram className="w-6 h-6 text-resin" />
                <span className="font-bold text-forest">Instagram</span>
                <a href="#" className="text-sm text-forest/60 hover:text-forest transition-colors">@smolovit</a>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-cream rounded-2xl border border-forest/5">
                <Mail className="w-6 h-6 text-resin" />
                <span className="font-bold text-forest">E-mail</span>
                <a href="mailto:smolovit@email.com" className="text-sm text-forest/60 hover:text-forest transition-colors">smolovit@email.com</a>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-cream rounded-2xl border border-forest/5">
                <MapPin className="w-6 h-6 text-resin" />
                <span className="font-bold text-forest">Lokacija</span>
                <span className="text-sm text-forest/60">Bosna i Hercegovina</span>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-cream rounded-2xl border border-forest/5">
                <Clock className="w-6 h-6 text-resin" />
                <span className="font-bold text-forest">Radno vrijeme</span>
                <span className="text-sm text-forest/60">Pon–Pet 09:00–17:00</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-forest/5"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-forest uppercase tracking-widest">Ime i prezime</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-warm-white border border-forest/10 p-4 rounded-xl focus:ring-2 focus:ring-resin focus:outline-none transition-all"
                  placeholder="Vaše ime"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-forest uppercase tracking-widest">E-mail adresa</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-warm-white border border-forest/10 p-4 rounded-xl focus:ring-2 focus:ring-resin focus:outline-none transition-all"
                  placeholder="vaš@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-forest uppercase tracking-widest">Telefon (opciono)</label>
                <input 
                  type="tel" 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-warm-white border border-forest/10 p-4 rounded-xl focus:ring-2 focus:ring-resin focus:outline-none transition-all"
                  placeholder="+387..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-forest uppercase tracking-widest">Poruka</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-warm-white border border-forest/10 p-4 rounded-xl focus:ring-2 focus:ring-resin focus:outline-none transition-all"
                  placeholder="Kako vam možemo pomoći?"
                />
              </div>
              <button 
                type="submit"
                className="bg-forest text-warm-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-resin transition-colors mt-4"
              >
                POŠALJI PORUKU
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
