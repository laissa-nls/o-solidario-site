import { Heart, Target, Eye, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-accent rounded-full p-4 shadow-medium">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossa História de Amor e Cuidadosssssss
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nascemos do desejo de transformar a dor em esperança e o medo em força, 
            criando uma rede de apoio que vai além do tratamento médico.
          </p>
        </div>

        {/* História */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 shadow-medium border-primary/20">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                A <strong className="text-foreground">Associação Acolher com Amor</strong> nasceu em 2008, 
                quando um grupo de mulheres que vivenciaram o câncer em suas famílias se uniu com um propósito comum: 
                oferecer o apoio que gostariam de ter recebido durante os momentos mais difíceis de suas vidas.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                O que começou como encontros informais em uma pequena sala cedida pela comunidade, 
                hoje se transformou em uma organização que já acolheu mais de 500 famílias, 
                oferecendo apoio psicológico, social e espiritual durante o tratamento do câncer.
              </p>
              
              <p className="text-lg leading-relaxed">
                Nossa força vem da certeza de que <strong className="text-accent">juntas somos mais fortes</strong>, 
                e que cada gesto de amor e cuidado pode fazer a diferença na jornada de quem enfrenta esta batalha.
              </p>
            </div>
          </Card>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Missão */}
          <Card className="p-8 text-center shadow-medium border-primary/20 hover:shadow-strong transition-spring">
            <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-6 shadow-medium">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acolher com amor e dignidade pessoas em tratamento contra o câncer e suas famílias, 
              oferecendo apoio integral através do cuidado feminino e da solidariedade.
            </p>
          </Card>

          {/* Visão */}
          <Card className="p-8 text-center shadow-medium border-secondary/20 hover:shadow-strong transition-spring">
            <div className="bg-secondary rounded-full p-4 w-16 h-16 mx-auto mb-6 shadow-medium">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em cuidado humanizado no tratamento do câncer, 
              criando uma rede de amor que transforme dor em esperança e medo em coragem.
            </p>
          </Card>

          {/* Valores */}
          <Card className="p-8 text-center shadow-medium border-primary/20 hover:shadow-strong transition-spring">
            <div className="bg-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 shadow-medium">
              <Award className="h-8 w-8 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Amor</strong> incondicional, <strong>respeito</strong> à dignidade humana, 
              <strong>solidariedade</strong> feminina, <strong>esperança</strong> como força motriz 
              e <strong>cuidado</strong> integral.
            </p>
          </Card>
        </div>

        {/* Equipe */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">Nossa Equipe</h3>
          <Card className="p-8 shadow-medium border-primary/20">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Somos mais de 100 mulheres voluntárias, entre enfermeiras, psicólogas, assistentes sociais, 
              cabeleireiras, massoterapeutas e principalmente mulheres que carregam no coração 
              a experiência do cuidar. Cada uma contribui com seu talento e amor para 
              fazer a diferença na vida de quem precisa.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">25</div>
                <div className="text-sm text-muted-foreground">Enfermeiras</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15</div>
                <div className="text-sm text-muted-foreground">Psicólogas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30</div>
                <div className="text-sm text-muted-foreground">Cuidadoras</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">30+</div>
                <div className="text-sm text-muted-foreground">Outras especialidades</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
