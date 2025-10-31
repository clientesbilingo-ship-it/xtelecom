import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

const benefits = [
  "Rede 100% em fibra óptica",
  "Tecnologia de última geração",
  "Equipe técnica especializada",
  "Expansão constante de cobertura",
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Equipe X Telecom"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-full shadow-lg font-bold">
              10+ Anos de Mercado
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Somos a X Telecom
              </h2>
              <p className="text-xl text-muted-foreground">
                Uma empresa 100% brasileira comprometida em conectar pessoas e 
                transformar a experiência de navegar na internet.
              </p>
            </div>

            <p className="text-lg text-muted-foreground">
              Com mais de uma década de experiência no mercado de telecomunicações, 
              investimos constantemente em infraestrutura e tecnologia para oferecer 
              a melhor conexão para nossos clientes.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
