import { Heart, Brain, Scissors, Coffee, Palette, Music, Users, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
const AtividadesSection = () => {
  const atividades = [{
    icon: Brain,
    title: "Apoio Psicológico",
    description: "Atendimento individual e em grupo com psicólogas especializadas em oncologia, oferecendo suporte emocional durante todo o tratamento.",
    color: "accent"
  }, {
    icon: Scissors,
    title: "Cuidados Estéticos",
    description: "Corte e cuidado de cabelos, maquiagem terapêutica e oficinas de autoestima para valorizar a beleza em cada etapa da jornada.",
    color: "secondary"
  }, {
    icon: Coffee,
    title: "Café da Manhã Especial",
    description: "Encontros semanais com café da manhã carinhoso, criando momentos de conexão, partilha e fortalecimento dos laços de amizade.",
    color: "primary"
  }, {
    icon: Palette,
    title: "Oficinas Criativas",
    description: "Atividades de artesanato, pintura e trabalhos manuais que estimulam a criatividade e proporcionam momentos de relaxamento.",
    color: "accent"
  }, {
    icon: Music,
    title: "Musicoterapia",
    description: "Sessões musicais terapêuticas que utilizam a música como ferramenta de cura emocional e expressão de sentimentos.",
    color: "secondary"
  }, {
    icon: Users,
    title: "Grupos de Apoio",
    description: "Rodas de conversa entre pacientes e familiares, criando uma rede de apoio mútuo baseada na troca de experiências.",
    color: "primary"
  }, {
    icon: Home,
    title: "Visitas Domiciliares",
    description: "Acompanhamento personalizado no conforto do lar para pacientes em tratamento que não podem se deslocar até nossa sede.",
    color: "accent"
  }, {
    icon: Heart,
    title: "Acolhimento Familiar",
    description: "Apoio integral às famílias, incluindo orientações práticas, apoio emocional e acompanhamento durante consultas médicas.",
    color: "secondary"
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
  return <section id="atividades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary rounded-full p-4 shadow-medium">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nosso Acolhimento em Ação
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oferecemos um cuidado integral que vai além do tratamento médico, 
            nutindo corpo, mente e espírito com amor e dedicação.
          </p>
        </div>

        {/* Grid de atividades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {atividades.map((atividade, index) => {
          const IconComponent = atividade.icon;
          return <Card key={index} className="p-6 text-center shadow-medium border-primary/20 hover:shadow-strong hover:-translate-y-1 transition-spring group">
                <div className={`${getColorClasses(atividade.color)} rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-medium group-hover:scale-110 transition-spring`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-smooth">
                  {atividade.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {atividade.description}
                </p>
              </Card>;
        })}
        </div>

        {/* Informações adicionais */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Horários de funcionamento */}
          

          {/* Como participar */}
          <Card className="p-8 shadow-medium border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <div className="bg-secondary rounded-full p-2 mr-3">
                <Users className="h-5 w-5 text-white" />
              </div>
              Como Participar
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <div className="bg-accent rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold mt-0.5">1</div>
                <p>Entre em contato conosco pelos canais disponíveis</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-accent rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold mt-0.5">2</div>
                <p>Faça uma visita para conhecer nossa sede e equipe</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-accent rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold mt-0.5">3</div>
                <p>Participe das atividades que mais se adequam ao seu momento</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-accent rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold mt-0.5">4</div>
                <p>Construa conosco uma rede de apoio e amor</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default AtividadesSection;