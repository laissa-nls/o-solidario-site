import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';
import logoAssociacao from '@/assets/logo-associacao.png';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Mulheres se apoiando em círculo" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Lado esquerdo - Logo e impacto */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img src={logoAssociacao} alt="Logo Acolher com Amor" className="w-32 h-32 lg:w-40 lg:h-40 rounded-full shadow-strong transform hover:scale-105 transition-spring" />
                <div className="absolute -top-2 -right-2 bg-accent rounded-full p-2 shadow-medium">
                  <Heart className="h-6 w-6 text-white animate-pulse" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Acolher com
                <span className="text-accent block">Amor</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 font-medium max-w-2xl">
                Juntas, transformamos o cuidado em esperança e o apoio em força para vencer o câncer
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => scrollToSection('quem-somos')} className="bg-accent hover:bg-accent-hover text-white shadow-medium hover:shadow-strong transition-spring text-lg px-8 py-3">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button size="lg" variant="outline" onClick={() => scrollToSection('voluntariado')} className="border-2 border-white/30 bg-white/10 text-foreground backdrop-blur-sm hover:bg-white/20 transition-spring text-lg px-8 py-3">
                  Como Ajudar
                </Button>
              </div>
            </div>
          </div>

          {/* Lado direito - Apresentação rápida */}
          <div className="space-y-6">
            
          </div>
        </div>
      </div>

      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>;
};
export default HeroSection;