
export const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-chai-primary mb-4">
              Our Story
            </h2>
            <div className="w-16 h-0.5 chai-gradient mx-auto mb-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="chai-card p-6">
              <h3 className="text-xl font-bold text-chai-primary mb-4">
                Where Tradition Meets Taste
              </h3>
              <div className="space-y-3 text-chai-secondary leading-relaxed text-sm">
                <p>
                  At Chai Chowk, we believe that every cup of chai is more than just a beverage – 
                  it's a moment of connection, a pause in the bustling day, and a celebration of authentic flavors.
                </p>
                
                <p>
                  Located in the vibrant Fortune Square of Vapi, we've been serving the community with 
                  traditional chai recipes paired with delicious snacks that perfectly complement every sip.
                </p>
                
                <p>
                  From our signature masala chai to innovative fusion flavors, every cup is crafted with 
                  premium ingredients and lots of love.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="chai-card p-4 text-center">
                <div className="w-12 h-12 chai-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">A</span>
                </div>
                <h4 className="font-semibold text-chai-primary mb-1 text-sm">Authentic Recipes</h4>
                <p className="text-chai-secondary text-xs">Traditional recipes with modern twists</p>
              </div>
              
              <div className="chai-card p-4 text-center">
                <div className="w-12 h-12 chai-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">P</span>
                </div>
                <h4 className="font-semibold text-chai-primary mb-1 text-sm">Premium Quality</h4>
                <p className="text-chai-secondary text-xs">Finest ingredients for the perfect cup</p>
              </div>
              
              <div className="chai-card p-4 text-center">
                <div className="w-12 h-12 chai-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">L</span>
                </div>
                <h4 className="font-semibold text-chai-primary mb-1 text-sm">Made with Love</h4>
                <p className="text-chai-secondary text-xs">Every cup crafted with care and passion</p>
              </div>
              
              <div className="chai-card p-4 text-center">
                <div className="w-12 h-12 chai-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">B</span>
                </div>
                <h4 className="font-semibold text-chai-primary mb-1 text-sm">Best in Vapi</h4>
                <p className="text-chai-secondary text-xs">Loved by locals and visitors alike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
