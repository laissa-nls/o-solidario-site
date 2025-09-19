import { useState } from 'react';
import { Menu, X, Heart, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoAssociacao from '@/assets/logo-associacao.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoAssociacao} 
              alt="Logo Associação Acolher com Amor" 
              className="h-10 w-10 rounded-full shadow-soft"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Acolher com Amor</h1>
              <p className="text-xs text-muted-foreground">Associação de Mulheres</p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent hover:bg-primary/10 transition-smooth"
            >
              Início
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('quem-somos')}
              className="text-foreground hover:text-accent hover:bg-primary/10 transition-smooth"
            >
              Quem Somos
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('atividades')}
              className="text-foreground hover:text-accent hover:bg-primary/10 transition-smooth"
            >
              Acolhimento
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('voluntariado')}
              className="text-foreground hover:text-accent hover:bg-primary/10 transition-smooth"
            >
              Doações
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-accent hover:bg-primary/10 transition-smooth"
            >
              Contato
            </Button>
          </nav>

          {/* Redes Sociais Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10" onClick={() => window.open('https://instagram.com/acolhercomamor')}>
              <Instagram className="h-4 w-4 text-accent" />
            </Button>
            <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10" onClick={() => window.open('https://wa.me/5511998765432')}>
              <MessageCircle className="h-4 w-4 text-secondary" />
            </Button>
          </div>

          {/* Menu Mobile */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-primary/20 shadow-medium">
            <nav className="flex flex-col p-4 space-y-3">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('home')}
                className="justify-start text-foreground hover:text-accent hover:bg-primary/10"
              >
                Início
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('quem-somos')}
                className="justify-start text-foreground hover:text-accent hover:bg-primary/10"
              >
                Quem Somos
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('atividades')}
                className="justify-start text-foreground hover:text-accent hover:bg-primary/10"
              >
                Acolhimento
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('voluntariado')}
                className="justify-start text-foreground hover:text-accent hover:bg-primary/10"
              >
                Doações
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contato')}
                className="justify-start text-foreground hover:text-accent hover:bg-primary/10"
              >
                Contato
              </Button>
              
              {/* Redes Sociais Mobile */}
              <div className="flex items-center space-x-3 pt-3 border-t border-primary/20">
                <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10" onClick={() => window.open('https://instagram.com/acolhercomamor')}>
                  <Instagram className="h-4 w-4 text-accent" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10" onClick={() => window.open('https://wa.me/5511998765432')}>
                  <MessageCircle className="h-4 w-4 text-secondary" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;