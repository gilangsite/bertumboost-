'use client';

import Link from 'next/link';
import locale from '@/LOCALE.id.json';

export default function AIConsultPage() {

  return (
    <div className="min-h-screen bg-bb-primary">
      {/* Header */}
      <header className="glass-navbar fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="Bertumboost" className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-bb-secondary hover:text-bb-secondary/70 transition-colors">
                {locale.nav.about}
              </Link>
              <Link href="/" className="text-bb-secondary hover:text-bb-secondary/70 transition-colors">
                {locale.nav.contact}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-bb-secondary mb-6">
              {locale.ai_consult.title}
            </h1>

            {/* Chat Iframe Container */}
            <div className="chat-iframe-container max-w-2xl mx-auto bg-bb-primary p-8 rounded-soft">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/bauvF4Kgl0aZ-a552ZfPZ"
                width="100%"
                style={{ height: '100%', minHeight: '700px', borderRadius: '16px', overflow: 'hidden' }}
                frameBorder="0"
              ></iframe>
            </div>

            {/* Back Link */}
            <Link
              href="/"
              className="text-bb-secondary/60 hover:text-bb-secondary transition-colors"
            >
              ← {locale.common.back} ke Beranda
            </Link>
          </div>
        </div>
      </main>


    </div>
  );
}
