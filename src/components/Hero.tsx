import { ArrowRight, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-accent/20 animate-pulse" 
           style={{ animationDuration: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <Wifi className="h-4 w-4 text-accent" />
              <span className="text-sm text-primary-foreground font-medium">
                Fibra Óptica de Alta Velocidade
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-primary-foreground leading-tight">
              Internet que
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Conecta Você
              </span>
              ao Mundo
            </h1>

            <p className="text-xl text-primary-foreground/90 max-w-xl">
              Velocidade ultra-rápida, estabilidade garantida e suporte 24/7. 
              Planos a partir de R$ 79,90/mês com instalação grátis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Ver Planos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
              >
                Verificar Cobertura
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">Mbps</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/80">Suporte</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">99%</div>
                <div className="text-sm text-primary-foreground/80">Uptime</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Fibra óptica de alta velocidade" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-accent/20 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Wifi className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10.000+</div>
                  <div className="text-sm text-muted-foreground">Clientes Conectados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
