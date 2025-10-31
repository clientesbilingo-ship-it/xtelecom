import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import coverageImage from "@/assets/coverage-image.jpg";

const Coverage = () => {
  return (
    <section id="cobertura" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Verifique Nossa Cobertura
              </h2>
              <p className="text-xl text-primary-foreground/80">
                Digite seu CEP e descubra se a X Telecom já chegou no seu endereço
              </p>
            </div>

            {/* CEP Input */}
            <div className="bg-card/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/20">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Digite seu CEP"
                    className="flex-1 h-12 bg-background text-foreground border-border"
                  />
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 px-8">
                    Verificar
                  </Button>
                </div>
                <p className="text-sm text-primary-foreground/60 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Não sabe seu CEP? <a href="#" className="text-accent hover:underline">Consulte aqui</a>
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="flex items-center gap-4 bg-secondary/20 backdrop-blur-sm p-6 rounded-2xl border border-accent/30">
              <div className="bg-accent/20 p-4 rounded-full">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-bold text-lg">Central de Atendimento</div>
                <div className="text-2xl font-black text-accent">0800 123 4567</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={coverageImage}
                alt="Família usando internet X Telecom"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-accent/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-xs text-muted-foreground">Cidades</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">200+</div>
                  <div className="text-xs text-muted-foreground">Bairros</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">5K+</div>
                  <div className="text-xs text-muted-foreground">KM de Fibra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
