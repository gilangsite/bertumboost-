import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MasalahSection from '@/components/MasalahSection';
import CaraBantuSection from '@/components/CaraBantuSection';
import SocialProofSection from '@/components/SocialProofSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MasalahSection />
      <CaraBantuSection />
      <SocialProofSection />
      <Footer />
    </div>
  );
}
