import { Menu, X, Wifi } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Wifi className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-foreground tracking-tight">
                X TELECOM
              </span>
              <span className="text-xs text-accent uppercase tracking-wider">
                Conectando você ao mundo
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-primary-foreground hover:text-accent transition-colors">
              Início
            </a>
            <a href="#planos" className="text-primary-foreground hover:text-accent transition-colors">
              Planos
            </a>
            <a href="#cobertura" className="text-primary-foreground hover:text-accent transition-colors">
              Cobertura
            </a>
            <a href="#sobre" className="text-primary-foreground hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-primary-foreground hover:text-accent transition-colors">
              Contato
            </a>
            <Button variant="default" className="bg-secondary hover:bg-secondary/90">
              Assine Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <a
              href="#inicio"
              className="block text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#planos"
              className="block text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </a>
            <a
              href="#cobertura"
              className="block text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cobertura
            </a>
            <a
              href="#sobre"
              className="block text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="block text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button variant="default" className="w-full bg-secondary hover:bg-secondary/90">
              Assine Agora
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
