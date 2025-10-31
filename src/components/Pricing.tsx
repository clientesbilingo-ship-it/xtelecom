import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    speed: "100",
    price: "79,90",
    features: [
      "100 Mbps de velocidade",
      "Wi-Fi 6 incluso",
      "Instalação grátis",
      "Suporte 24/7",
      "Sem fidelidade",
    ],
    popular: false,
  },
  {
    name: "Turbo",
    speed: "300",
    price: "99,90",
    features: [
      "300 Mbps de velocidade",
      "Wi-Fi 6 mesh incluso",
      "Instalação grátis",
      "Suporte prioritário 24/7",
      "Sem fidelidade",
      "IP fixo disponível",
    ],
    popular: true,
  },
  {
    name: "Ultra",
    speed: "500",
    price: "129,90",
    features: [
      "500 Mbps de velocidade",
      "Wi-Fi 6 mesh premium",
      "Instalação grátis",
      "Suporte VIP 24/7",
      "Sem fidelidade",
      "IP fixo grátis",
      "Técnico dedicado",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Planos Para Todos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua necessidade com preços acessíveis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "border-secondary shadow-xl scale-105 md:scale-110"
                  : "border-border hover:border-secondary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-card-foreground">
                  {plan.name}
                </h3>
                <div className="space-y-2">
                  <div className="text-5xl font-black text-secondary">
                    {plan.speed}
                    <span className="text-2xl text-muted-foreground font-normal">
                      Mbps
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-card-foreground">
                    R$ {plan.price}
                    <span className="text-lg text-muted-foreground font-normal">
                      /mês
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-secondary hover:bg-secondary/90"
                    : "bg-primary hover:bg-primary/90"
                }`}
                size="lg"
              >
                Assinar Agora
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          * Valores promocionais válidos para novas assinaturas. Consulte disponibilidade na sua região.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
