import Link from 'next/link';
import locale from '../../LOCALE.id.json';

export default function Header() {
  return (
    <header className="glass-navbar fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Bertumboost"
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/ai"
              className="text-bb-secondary hover:text-bb-secondary/70 transition-colors font-medium"
            >
              {locale.nav.ai_consult}
            </Link>
            <Link
              href="#about"
              className="text-bb-secondary hover:text-bb-secondary/70 transition-colors"
            >
              {locale.nav.about}
            </Link>
            <Link
              href="#contact"
              className="text-bb-secondary hover:text-bb-secondary/70 transition-colors"
            >
              {locale.nav.contact}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-bb-secondary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
