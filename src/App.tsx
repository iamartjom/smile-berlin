import { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ChevronDown, 
  Menu, 
  X,
  Sparkles,
  ShieldCheck,
  Users,
  Stethoscope,
  Smile,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Über uns', href: '#about' },
    { name: 'Bewertungen', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-mint-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-mint-500/20">
            <Smile size={24} />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900">Smile Berlin</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-mint-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="glass-button px-6 py-2.5 rounded-full text-sm font-semibold text-slate-900 border-mint-200/50">
            Termin vereinbaren
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-mint-500 text-white py-4 rounded-2xl font-bold shadow-xl shadow-mint-500/20">
                Termin vereinbaren
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-turquoise-50 via-mint-50 to-white">
        <div className="organic-shape w-96 h-96 bg-turquoise-200 top-[-10%] left-[-10%]"></div>
        <div className="organic-shape w-[30rem] h-[30rem] bg-mint-200 bottom-[-10%] right-[-10%]"></div>
        <div className="organic-shape w-80 h-80 bg-turquoise-100 top-[40%] right-[10%]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <Users size={16} className="text-mint-600" />
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Über 1.000 zufriedene Patienten in Berlin</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
            Gesunde Zähne. <br />
            <span className="text-mint-600">Ein Lächeln, das bleibt.</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Moderne Zahnmedizin in Berlin – präzise, schmerzarm und auf dich abgestimmt. Wir verbinden High-End-Technik mit menschlicher Fürsorge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="group relative px-8 py-4 bg-mint-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-mint-500/30 hover:shadow-mint-500/40 transition-all hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Termin vereinbaren <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900">Ohne lange Wartezeiten</span>
              <span className="text-xs text-slate-500">Schnelle Terminvergabe • Online Buchung</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
              alt="Friendly Dentist" 
              className="w-full h-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Glass Card Overlay */}
          <div className="absolute -bottom-6 -left-6 z-20 glass p-6 rounded-3xl max-w-[240px] shadow-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">4.9/5 Sterne</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              "Die beste Erfahrung, die ich je beim Zahnarzt hatte. Absolut schmerzfrei!"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemAwareness = () => {
  const points = [
    { title: "Schmerzarme Behandlung", desc: "Dank modernster Anästhesie-Methoden." },
    { title: "Klare Erklärungen", desc: "Wir sprechen kein Fachchinesisch." },
    { title: "Zeit für deine Fragen", desc: "Keine Eile, wir hören dir zu." }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Warum viele Zahnarztbesuche <br />
              <span className="text-mint-500">aufgeschoben werden</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Angst vor Schmerzen, schlechte Erfahrungen oder Unsicherheit – das kennen wir. Genau deshalb setzen wir auf eine ruhige Atmosphäre, moderne Technik und transparente Kommunikation.
            </p>
            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-mint-100 flex items-center justify-center text-mint-600 mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{point.title}</h4>
                    <p className="text-sm text-slate-500">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass p-8 rounded-[2rem] relative z-10">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Clinic Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-turquoise-100 flex items-center justify-center text-turquoise-600">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Wohlfühl-Atmosphäre</p>
                  <p className="text-sm text-slate-500">Entspanntes Design für weniger Stress.</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-mint-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProposition = () => {
  const cards = [
    {
      icon: <Stethoscope className="text-mint-500" />,
      title: "Moderne Technologie",
      desc: "Digitale Diagnostik für präzise Ergebnisse und minimalinvasive Behandlungen."
    },
    {
      icon: <Users className="text-turquoise-500" />,
      title: "Individuelle Betreuung",
      desc: "Keine Massenabfertigung – wir nehmen uns Zeit für jeden einzelnen Patienten."
    },
    {
      icon: <Sparkles className="text-mint-500" />,
      title: "Ästhetische Zahnmedizin",
      desc: "Natürlich schöne Ergebnisse statt künstlichem Look. Dein Lächeln, perfektioniert."
    },
    {
      icon: <MapPin className="text-turquoise-500" />,
      title: "Zentrale Lage in Berlin",
      desc: "Schnell erreichbar im Herzen Berlins, auch kurzfristige Termine verfügbar."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Was Smile Berlin anders macht
          </h2>
          <p className="text-lg text-slate-600">
            Wir definieren den Zahnarztbesuch neu. Mit Empathie, Expertise und modernster Technik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:translate-y-[-5px] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Professionelle Zahnreinigung", benefit: "Für ein sauberes, gesundes Gefühl" },
    { title: "Bleaching", benefit: "Für sichtbar hellere Zähne" },
    { title: "Implantate", benefit: "Fester Halt und natürliche Optik" },
    { title: "Zahnersatz", benefit: "Hochwertige Lösungen für dein Gebiss" },
    { title: "Vorsorge & Kontrolle", benefit: "Frühzeitiges Erkennen, langes Erhalten" },
    { title: "Ästhetische Korrekturen", benefit: "Kleine Änderungen, große Wirkung" }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">Unsere Leistungen</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Umfassende Versorgung für deine Zahngesundheit – von der Vorsorge bis zur komplexen Chirurgie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-[2rem] border border-slate-100 hover:border-mint-200 hover:bg-mint-50/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-mint-100 flex items-center justify-center text-mint-600 group-hover:bg-mint-500 group-hover:text-white transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-mint-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm">{service.benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
            Termin vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Anna", city: "Berlin", text: "Ich hatte immer Angst vor dem Zahnarzt – hier war alles komplett entspannt. Das Team ist unglaublich einfühlsam." },
    { name: "Markus", city: "Berlin", text: "Super modern, freundlich und schnell. Klare Empfehlung für alle, die Wert auf Qualität legen!" },
    { name: "Julia", city: "Berlin", text: "Endlich ein Zahnarzt, der wirklich zuhört und nicht nur schnell abfertigt. Tolle Beratung!" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-turquoise-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">Das sagen unsere Patienten</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="font-bold text-slate-900">4.9 / 5</span>
              <span className="text-slate-500">(500+ Google Rezensionen)</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <p className="text-slate-700 leading-relaxed mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-mint-200 flex items-center justify-center font-bold text-mint-700">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Termin online buchen", desc: "Wähle deinen Wunschtermin bequem von zu Hause aus." },
    { title: "Kurzes Erstgespräch", desc: "Wir besprechen deine Wünsche und klären alle Fragen." },
    { title: "Individuelle Behandlung", desc: "Präzise, schmerzarm und mit modernster Technik." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">So einfach geht’s</h2>
          <p className="text-lg text-slate-600">Transparent, klar und ohne Überraschungen.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 rounded-full bg-mint-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-xl shadow-mint-500/20 relative z-10">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mint-400 to-turquoise-500"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="organic-shape w-96 h-96 bg-white top-[-20%] left-[-10%]"></div>
          <div className="organic-shape w-96 h-96 bg-white bottom-[-20%] right-[-10%]"></div>
        </div>
        
        <div className="relative z-10 py-20 px-8 text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Bereit für dein neues Lächeln?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Buche jetzt deinen Termin bei Smile Berlin und erlebe Zahnmedizin auf einem neuen Level.
          </p>
          
          <button className="glass-button px-12 py-5 rounded-2xl text-xl font-bold text-white border-white/40 hover:bg-white/10 transition-all mb-6">
            Termin vereinbaren
          </button>
          <p className="text-sm font-medium opacity-80">
            Begrenzte Termine pro Woche verfügbar
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Ist die Behandlung schmerzhaft?",
      a: "Wir arbeiten mit modernen, schonenden Methoden für maximalen Komfort. Unsere Patienten berichten regelmäßig von einer nahezu schmerzfreien Erfahrung."
    },
    {
      q: "Wie schnell bekomme ich einen Termin?",
      a: "Dank unserer effizienten Praxisorganisation bekommst du oft innerhalb weniger Tage einen Termin für eine Erstberatung oder Reinigung."
    },
    {
      q: "Übernimmt die Krankenkasse die Kosten?",
      a: "Je nach Behandlung werden die Kosten teilweise oder voll übernommen. Wir beraten dich vorab transparent über alle anfallenden Kosten und Möglichkeiten."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Häufige Fragen</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/20 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <ChevronDown size={20} className={`text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-mint-500 rounded-xl flex items-center justify-center text-white">
              <Smile size={24} />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">Smile Berlin</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8">
            Deine Experten für moderne und ästhetische Zahnmedizin im Herzen von Berlin. Wir freuen uns auf deinen Besuch.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-mint-500 transition-colors cursor-pointer">
              <Phone size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-mint-500 transition-colors cursor-pointer">
              <MapPin size={18} />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Kontakt</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>Friedrichstraße 123</li>
            <li>10117 Berlin</li>
            <li>+49 (0) 30 123 456 78</li>
            <li>info@smile-berlin.de</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Öffnungszeiten</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex justify-between"><span>Mo - Do</span> <span>08:00 - 20:00</span></li>
            <li className="flex justify-between"><span>Fr</span> <span>08:00 - 18:00</span></li>
            <li className="flex justify-between"><span>Sa</span> <span>Nach Vereinbarung</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 Smile Berlin. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemAwareness />
      <ValueProposition />
      <Services />
      <Testimonials />
      <Process />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
