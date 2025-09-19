import { Heart, Phone, Mail, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoAssociacao from '@/assets/logo-associacao.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white py-16 relative overflow-hidden">
      {/* Padrão decorativo de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Heart className="h-24 w-24" />
        </div>
        <div className="absolute top-20 right-20">
          <Heart className="h-16 w-16" />
        </div>
        <div className="absolute bottom-10 left-1/4">
          <Heart className="h-20 w-20" />
        </div>
        <div className="absolute bottom-20 right-1/3">
          <Heart className="h-12 w-12" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo e informações principais */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src={logoAssociacao} 
                alt="Logo Acolher com Amor" 
                className="h-16 w-16 rounded-full shadow-medium"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Acolher com Amor</h3>
                <p className="text-white/80">Associação de Mulheres</p>
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed max-w-md">
              Há mais de 15 anos transformando vidas através do cuidado, amor e solidariedade. 
              Juntas, somos uma rede de apoio que oferece esperança e força para superar os 
              desafios do câncer.
            </p>
            
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-foreground transition-smooth"
                onClick={() => window.open('https://instagram.com/acolhercomamor')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-foreground transition-smooth"
                onClick={() => window.open('https://facebook.com/acolhercomamor')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-foreground transition-smooth"
                onClick={() => window.open('https://wa.me/5511998765432')}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Links Rápidos</h4>
            <nav className="space-y-2">
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-white/80 hover:text-white hover:bg-transparent justify-start"
                onClick={() => scrollToSection('home')}
              >
                Início
              </Button>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-white/80 hover:text-white hover:bg-transparent justify-start"
                onClick={() => scrollToSection('quem-somos')}
              >
                Quem Somos
              </Button>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-white/80 hover:text-white hover:bg-transparent justify-start"
                onClick={() => scrollToSection('atividades')}
              >
                Acolhimento
              </Button>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-white/80 hover:text-white hover:bg-transparent justify-start"
                onClick={() => scrollToSection('voluntariado')}
              >
                Doações
              </Button>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-white/80 hover:text-white hover:bg-transparent justify-start"
                onClick={() => scrollToSection('contato')}
              >
                Contato
              </Button>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <span className="text-white/80">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-white/60" />
                <span className="text-white/80">(11) 99876-5432</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <span className="text-white/80 text-sm">contato@acolhercomamor.org.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/60 mt-0.5" />
                <div className="text-white/80 text-sm">
                  <p>Rua do Cuidado, 123</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dados bancários resumidos */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto text-center backdrop-blur-sm">
            <h4 className="font-bold mb-2 text-white">Doações PIX</h4>
            <p className="text-white/90 text-sm mb-2">acolhercomamor@email.com</p>
            <p className="text-white/70 text-xs">CNPJ: 12.345.678/0001-90</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Associação Acolher com Amor. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-accent" />
              <span>para quem precisa de cuidado</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;