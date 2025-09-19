import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuemSomosSection from '@/components/QuemSomosSection';
import AtividadesSection from '@/components/AtividadesSection';
import VoluntariadoSection from '@/components/VoluntariadoSection';
import ContatoSection from '@/components/ContatoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <QuemSomosSection />
        <AtividadesSection />
        <VoluntariadoSection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
