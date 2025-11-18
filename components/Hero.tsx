import Link from 'next/link';
import locale from '@/LOCALE.id.json';

export default function Hero() {
  return (
    <section className="min-h-screen bg-bb-primary pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline - Option A dari branding guide */}
          <h1 className="text-5xl md:text-6xl font-bold text-bb-secondary leading-tight">
            {locale.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-bb-secondary text-opacity-80 leading-relaxed">
            {locale.hero.subheadline}
          </p>

          {/* CTA Buttons - sesuai guide: Primary & Secondary */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/ai">
              <button className="btn-primary px-10 py-4 text-base">
                {locale.hero.cta_primary}
              </button>
            </Link>
            <button className="btn-secondary px-10 py-4 text-base">
              {locale.hero.cta_secondary}
            </button>
          </div>

          {/* Trust indicator - subtle */}
          <p className="text-sm text-bb-secondary text-opacity-60 pt-8">
            {locale.hero.trust_indicator}
          </p>
        </div>
      </div>
    </section>
  );
}
