
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero.jpg"; // Import the hero image

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }} // Use the imported hero image
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      <div className="container-responsive relative z-10"> {/* Ensure content is above overlay */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Logo and Title */}
          <div className="mb-8 animate-fadeInUp">
            <h1 className="font-bold text-5xl md:text-7xl text-white mb-4 leading-tight drop-shadow-lg">
              Chai Chowk
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto animate-fadeInUp drop-shadow-sm" style={{animationDelay: '0.2s'}}>
            Experience the authentic taste of traditional chai and delicious snacks 
            in the heart of Vapi. Where every sip tells a story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="chai-button"
              onClick={() => window.open('https://zomato.onelink.me/xqzv/gz09m36a', '_blank')}
            >
              Order Online
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-amber-600 text-chai-primary hover:bg-amber-50 transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Visit Us
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="chai-card p-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg">
              <Clock className="w-8 h-8 text-amber-700 mx-auto mb-3" />
              <h3 className="font-semibold text-chai-primary text-lg mb-2">Opening Hours</h3>
              <p className="text-chai-secondary">Every Day<br />6:30 AM – 10:30 PM</p>
            </div>
            
            <div className="chai-card p-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg">
              <MapPin className="w-8 h-8 text-amber-700 mx-auto mb-3" />
              <h3 className="font-semibold text-chai-primary text-lg mb-2">Location</h3>
              <p className="text-chai-secondary">Fortune Square<br />Chala, Vapi</p>
            </div>
            
            <div className="chai-card p-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg">
              <Phone className="w-8 h-8 text-amber-700 mx-auto mb-3" />
              <h3 className="font-semibold text-chai-primary text-lg mb-2">Call Us</h3>
              <p className="text-chai-secondary">+91 99091 01647</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
