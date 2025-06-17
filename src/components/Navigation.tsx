
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ // Always apply background
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/95 backdrop-blur-md shadow-sm" // Keep shadow consistent or slightly different for scrolled state
    }`}> 
      <div className="container-responsive">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/75201a2e-d2a9-43b5-bfa7-7ac8d26e1f94.png" 
              alt="Chai Chowk Logo" 
              className="h-8 w-auto rounded-md"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-chai-primary hover:text-amber-700 transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="chai-button text-sm"
              onClick={() => window.open('https://zomato.onelink.me/xqzv/gz09m36a', '_blank')}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-chai-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-white/95 backdrop-blur-md rounded-lg shadow-sm mt-2">
            <div className="flex flex-col space-y-3 pt-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-chai-primary hover:text-amber-700 transition-colors duration-200 font-medium text-left text-sm"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="chai-button w-fit text-sm"
                onClick={() => window.open('https://zomato.onelink.me/xqzv/gz09m36a', '_blank')}
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
