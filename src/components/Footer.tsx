import Link from "next/link";
import { Globe2, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-sep-warm-white border-t border-sep-light-gray pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sep-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 rounded-full bg-sep-primary/10 flex items-center justify-center group-hover:bg-sep-primary/20 transition-colors border border-sep-primary/30">
                <Globe2 className="w-6 h-6 text-sep-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-sep-dark-text">
                Students Exchange <span className="text-sep-primary">Program</span>
              </span>
            </Link>
            <p className="text-sep-muted max-w-sm mb-6 leading-relaxed">
              Built for JPSA students exploring global pharmacy exchange opportunities. Expanding horizons, building networks, and shaping the future of pharmacy.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/sep.jordan/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white border border-sep-light-gray/60 flex items-center justify-center text-sep-muted hover:text-white hover:bg-sep-primary hover:border-sep-primary transition-all duration-300 shadow-sm hover:shadow-[0_10px_20px_rgba(178,34,34,0.2)] hover:-translate-y-1 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="mailto:seo.jpsa@gmail.com" className="w-12 h-12 rounded-2xl bg-white border border-sep-light-gray/60 flex items-center justify-center text-sep-muted hover:text-white hover:bg-sep-primary hover:border-sep-primary transition-all duration-300 shadow-sm hover:shadow-[0_10px_20px_rgba(178,34,34,0.2)] hover:-translate-y-1 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sep-dark-text font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sep-muted">
              <li><Link href="#about" className="hover:text-sep-primary transition-colors">About SEP</Link></li>
              <li><Link href="#countries" className="hover:text-sep-primary transition-colors">Destinations</Link></li>
              <li><Link href="#experiences" className="hover:text-sep-primary transition-colors">Experiences</Link></li>
              <li><Link href="#timeline" className="hover:text-sep-primary transition-colors">Timeline</Link></li>
              <li><Link href="#faq" className="hover:text-sep-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sep-dark-text font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sep-muted">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sep-primary" />
                <a href="mailto:seo.jpsa@gmail.com" className="hover:text-sep-primary transition-colors">seo.jpsa@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-sep-primary" />
                <a href="https://www.instagram.com/sep.jordan/" target="_blank" rel="noopener noreferrer" className="hover:text-sep-primary transition-colors">@sep.jordan</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sep-light-gray pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-sep-muted relative z-10">
          <p>© {new Date().getFullYear()} JPSA SEP. All rights reserved.</p>
          <p>Designed for Jordanian Pharmacy Students' Association.</p>
        </div>
      </div>
    </footer>
  );
}
