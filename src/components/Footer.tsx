import { Wifi, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Fique Por Dentro das Novidades
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              Receba promoções exclusivas e dicas de tecnologia
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="h-12 bg-background text-foreground border-border"
              />
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 px-8">
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wifi className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">X TELECOM</span>
                <span className="text-xs text-accent uppercase tracking-wider">
                  Conectando você ao mundo
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70">
              Internet de fibra óptica de alta velocidade para todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-primary-foreground/10 hover:bg-accent/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 hover:bg-accent/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 hover:bg-accent/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#planos" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#cobertura" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Cobertura
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Segunda Via
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Área do Cliente
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">0800 123 4567</div>
                  <div className="text-sm text-primary-foreground/70">24h por dia</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">contato@xtelecom.com.br</div>
                  <div className="text-sm text-primary-foreground/70">Resposta em 24h</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70">
                  Av. Principal, 1000<br />
                  São Paulo - SP
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 X Telecom. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
