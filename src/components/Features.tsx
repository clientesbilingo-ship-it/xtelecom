import { Zap, Shield, Clock, Smartphone, HeadphonesIcon, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Velocidade Ultra",
    description: "Conexão de fibra óptica com até 500 Mbps para você navegar sem limites.",
  },
  {
    icon: Shield,
    title: "Conexão Segura",
    description: "Tecnologia de ponta com criptografia para proteger seus dados.",
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Equipe especializada disponível todos os dias para ajudar você.",
  },
  {
    icon: Smartphone,
    title: "Wi-Fi 6 Grátis",
    description: "Roteador de última geração incluso em todos os planos.",
  },
  {
    icon: HeadphonesIcon,
    title: "Sem Fidelidade",
    description: "Cancele quando quiser, sem multas ou taxas adicionais.",
  },
  {
    icon: TrendingUp,
    title: "Velocidade Real",
    description: "Garantia de velocidade mínima de 80% do contratado.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Benefícios Únicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta aliada ao melhor atendimento do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card p-8 rounded-2xl border border-border hover:border-secondary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
