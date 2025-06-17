
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chai-primary mb-4">
            Visit Us Today
          </h2>
          <div className="w-16 h-0.5 chai-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-chai-secondary max-w-2xl mx-auto">
            Come experience the authentic taste of our chai and the warmth of our hospitality.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="chai-card p-6">
              <h3 className="text-xl font-bold text-chai-primary mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-chai-primary mb-1 text-sm">Address</h4>
                    <p className="text-chai-secondary text-sm leading-relaxed">
                      Shop No. 19 Ground, Fortune Square,<br />
                      2 Extension, Chala, Vapi,<br />
                      Gujarat 396191
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-chai-primary mb-1 text-sm">Phone</h4>
                    <a href="tel:+919909101647" className="text-chai-secondary hover:text-amber-600 transition-colors text-sm">
                      +91 99091 01647
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-chai-primary mb-1 text-sm">Opening Hours</h4>
                    <p className="text-chai-secondary text-sm">
                      Every Day: 6:30 AM – 10:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Instagram className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-chai-primary mb-1 text-sm">Follow Us</h4>
                    <a 
                      href="https://www.instagram.com/chaichowkofficial?igsh=NDZpeXptbWdmZDN3&utm_source=qr" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-chai-secondary hover:text-amber-600 transition-colors text-sm"
                    >
                      @chaichowkofficial
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="chai-button flex-1 text-sm"
                onClick={() => window.open('tel:+919909101647')}
              >
                Call Now
              </Button>
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 flex-1 text-sm"
                onClick={() => window.open('https://www.instagram.com/chaichowkofficial?igsh=NDZpeXptbWdmZDN3&utm_source=qr', '_blank')}
              >
                Follow on Instagram
              </Button>
            </div>
          </div>

          {/* Google Map */}
          <div className="chai-card p-6">
            <h3 className="text-xl font-bold text-chai-primary mb-4">Find Us Here</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.8231582!2d72.887998!3d20.3954013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d1fd5e0da659%3A0xec78088cccbb723!2sChai%20Chowk!5e0!3m2!1sen!2sin!4v1697123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chai Chowk Location"
              ></iframe>
            </div>
            <div className="mt-4">
              <Button 
                variant="outline" 
                className="w-full border-amber-300 text-chai-primary hover:bg-amber-50 rounded-md font-medium text-sm"
                onClick={() => window.open('https://www.google.com/maps/place/Chai+Chowk/@20.3954013,72.887998,17z/data=!4m11!1m3!2m2!1sRestaurants!6e5!3m6!1s0x3be0d1fd5e0da659:0xec78088cccbb723!8m2!3d20.3954013!4d72.8927616!15sCgtSZXN0YXVyYW50c1oNIgtyZXN0YXVyYW50c5IBCnJlc3RhdXJhbnSqAUQQASoPIgtyZXN0YXVyYW50cygAMh4QASIa4iedZWtQTBEhPBWiwUE7GKzd5slXHymgamgyDxACIgtyZXN0YXVyYW50c-ABAA!16s%2Fg%2F11y3hmjh1j?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
