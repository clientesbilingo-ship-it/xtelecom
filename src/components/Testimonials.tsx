import { Star } from "lucide-react";
import teamImage from "@/assets/team-1.jpg";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Cliente desde 2022",
    content: "A melhor internet que já tive! Velocidade real e suporte sempre disponível. Recomendo muito!",
    rating: 5,
  },
  {
    name: "João Silva",
    role: "Cliente desde 2021",
    content: "Trabalho home office e nunca tive problemas. A conexão é estável e o preço justo.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Cliente desde 2023",
    content: "Equipe técnica super atenciosa. Instalação rápida e sem complicações. Estou muito satisfeita!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 10.000 clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-secondary transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team section */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossa Equipe Dedicada
            </h3>
            <p className="text-lg text-muted-foreground">
              Profissionais especializados prontos para garantir a melhor experiência
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
            <img
              src={teamImage}
              alt="Equipe X Telecom"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
