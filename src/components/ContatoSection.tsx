import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContatoSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary rounded-full p-4 shadow-medium">
              <Phone className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Estamos Aqui Para Você
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nossa porta e nosso coração estão sempre abertos. Entre em contato 
            e descubra como podemos caminhar juntas nesta jornada.
          </p>
        </div>

        {/* Grid de contatos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Telefone */}
          <Card className="p-6 text-center shadow-medium border-primary/20 hover:shadow-strong hover:-translate-y-1 transition-spring group">
            <div className="bg-accent rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-medium group-hover:scale-110 transition-spring">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Telefone</h3>
            <p className="text-muted-foreground mb-4">(11) 3456-7890</p>
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent-hover text-white"
              onClick={() => window.open('tel:+551134567890')}
            >
              Ligar Agora
            </Button>
          </Card>

          {/* WhatsApp */}
          <Card className="p-6 text-center shadow-medium border-secondary/20 hover:shadow-strong hover:-translate-y-1 transition-spring group">
            <div className="bg-secondary rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-medium group-hover:scale-110 transition-spring">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">(11) 99876-5432</p>
            <Button 
              size="sm" 
              className="bg-secondary hover:bg-secondary-hover text-white"
              onClick={() => window.open('https://wa.me/5511998765432')}
            >
              Enviar Mensagem
            </Button>
          </Card>

          {/* Email */}
          <Card className="p-6 text-center shadow-medium border-primary/20 hover:shadow-strong hover:-translate-y-1 transition-spring group">
            <div className="bg-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-medium group-hover:scale-110 transition-spring">
              <Mail className="h-8 w-8 text-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">E-mail</h3>
            <p className="text-muted-foreground mb-4 text-sm">contato@acolhercomamor.org.br</p>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary-hover"
              onClick={() => window.open('mailto:contato@acolhercomamor.org.br')}
            >
              Enviar E-mail
            </Button>
          </Card>

          {/* Localização */}
          <Card className="p-6 text-center shadow-medium border-accent/20 hover:shadow-strong hover:-translate-y-1 transition-spring group">
            <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-medium group-hover:scale-110 transition-spring">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Localização</h3>
            <p className="text-muted-foreground mb-4 text-sm">Rua do Cuidado, 123<br />São Paulo - SP</p>
            <Button 
              size="sm" 
              className="bg-gradient-accent hover:bg-accent-hover text-white"
              onClick={() => window.open('https://maps.google.com/?q=Rua+do+Cuidado+123+São+Paulo')}
            >
              Ver no Mapa
            </Button>
          </Card>
        </div>

        {/* Informações detalhadas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Horários e informações */}
          <Card className="p-8 shadow-medium border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Clock className="h-6 w-6 text-primary mr-3" />
              Horários de Atendimento
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Atendimento Presencial</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-medium">8h às 17h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-primary/20 pt-4">
                <h4 className="font-semibold text-foreground mb-3">Plantão de Emergência</h4>
                <p className="text-muted-foreground">
                  WhatsApp disponível 24h para situações de emergência emocional 
                  com nossa equipe de plantão.
                </p>
              </div>
              
              <div className="border-t border-primary/20 pt-4">
                <h4 className="font-semibold text-foreground mb-3">Agendamento</h4>
                <p className="text-muted-foreground">
                  Para primeira consulta ou visita, recomendamos agendamento prévio 
                  para melhor acolhimento.
                </p>
              </div>
            </div>
          </Card>

          {/* Localização e mapa */}
          <Card className="p-8 shadow-medium border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-secondary mr-3" />
              Como Chegar
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Endereço Completo</h4>
                <p className="text-muted-foreground">
                  Rua do Cuidado, 123<br />
                  Bairro da Esperança<br />
                  São Paulo - SP, 01234-567
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Transporte Público</h4>
                <p className="text-muted-foreground text-sm">
                  • Metrô: Estação Esperança (Linha Azul)<br />
                  • Ônibus: Linhas 1234, 5678 (Ponto em frente)<br />
                  • Estacionamento gratuito no local
                </p>
              </div>
              
              {/* Mapa placeholder */}
              <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Mapa Interativo</p>
                  <Button 
                    size="sm" 
                    className="mt-2 bg-secondary hover:bg-secondary-hover text-white"
                    onClick={() => window.open('https://maps.google.com/?q=Rua+do+Cuidado+123+São+Paulo')}
                  >
                    Abrir no Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Redes sociais */}
        <div className="text-center">
          <Card className="p-8 shadow-medium border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Siga-nos nas Redes Sociais</h3>
            <p className="text-muted-foreground mb-8">
              Acompanhe nossas atividades, histórias inspiradoras e formas de participar da nossa missão
            </p>
            
            <div className="flex justify-center space-x-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-spring"
                onClick={() => window.open('https://instagram.com/acolhercomamor')}
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </Button>
              
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 transition-spring"
                onClick={() => window.open('https://facebook.com/acolhercomamor')}
              >
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </Button>
              
              <Button 
                size="lg" 
                className="bg-green-500 text-white hover:bg-green-600 transition-spring"
                onClick={() => window.open('https://wa.me/5511998765432')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;