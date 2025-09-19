import { Heart, HandHeart, Gift, CreditCard, Users, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const VoluntariadoSection = () => {
  const formasAjudar = [{
    icon: HandHeart,
    title: "Seja Voluntária",
    description: "Doe seu tempo e talento para fazer a diferença na vida de quem precisa",
    items: ["Apoio emocional e companherismo", "Ajuda em atividades administrativas", "Organização de eventos e campanhas", "Oficinas e atividades criativas"],
    color: "accent"
  }, {
    icon: Gift,
    title: "Doações de Materiais",
    description: "Contribua com itens essenciais para nossos cuidados e atividades",
    items: ["Produtos de higiene pessoal", "Materiais para oficinas e artesanato", "Lenços e acessórios de conforto", "Alimentos não perecíveis"],
    color: "secondary"
  }, {
    icon: CreditCard,
    title: "Doações Financeiras",
    description: "Ajude a manter nossos projetos e ampliar nosso alcance",
    items: ["Manutenção da sede e equipamentos", "Materiais para atividades terapêuticas", "Transporte para pacientes", "Formação e capacitação da equipe"],
    color: "primary"
  }];
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent':
        return 'bg-gradient-accent';
      case 'secondary':
        return 'bg-secondary';
      case 'primary':
        return 'bg-primary';
      default:
        return 'bg-gradient-accent';
    }
  };
  return <section id="voluntariado" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-accent rounded-full p-4 shadow-medium">
              <HandHeart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Faça Parte Desta Rede de Amor
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Existem muitas formas de contribuir com nossa missão. Cada gesto, 
            por menor que seja, se multiplica em esperança e cuidado.
          </p>
        </div>

        {/* Formas de ajudar */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {formasAjudar.map((forma, index) => {
          const IconComponent = forma.icon;
          return <Card key={index} className="p-8 shadow-medium border-primary/20 hover:shadow-strong hover:-translate-y-1 transition-spring group">
                <div className={`${getColorClasses(forma.color)} rounded-full p-4 w-16 h-16 mx-auto mb-6 shadow-medium group-hover:scale-110 transition-spring`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-accent transition-smooth">
                  {forma.title}
                </h3>
                
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {forma.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {forma.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start space-x-3">
                      <Heart className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>)}
                </ul>
                
                <Button className="w-full bg-gradient-accent hover:bg-accent-hover text-white shadow-medium transition-spring" onClick={() => {
              const element = document.getElementById('contato');
              element?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                  Quero Ajudar
                </Button>
              </Card>;
        })}
        </div>

        {/* Dados bancários e informações */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Informações bancárias */}
          <Card className="p-8 shadow-medium border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <CreditCard className="h-6 w-6 text-secondary mr-3" />
              Dados para Doação
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Associação Acolher com Amor</p>
                <p className="text-sm">CNPJ: 12.345.678/0001-90</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Banco do Brasil</p>
                <p>Agência: 1234-5</p>
                <p>Conta Corrente: 12345-6</p>
                <p className="text-sm mt-2 text-accent">PIX: acolhercomamor@email.com</p>
              </div>
              
              <p className="text-sm italic">
                Para recebimento de recibo de doação, envie comprovante por WhatsApp
              </p>
            </div>
          </Card>

          {/* Perfil do voluntário */}
          
        </div>

        {/* Call to action */}
        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default VoluntariadoSection;