
export const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/ed0f4728-67da-434f-86c1-b1d22790f0a7.png",
      alt: "Chai Chowk Interior Wall Art",
      title: "Creative Wall Art",
      description: "Inspiring chai-themed artwork"
    },
    {
      src: "/lovable-uploads/e7e79899-12b2-4e36-9d0d-5dbe18e58892.png",
      alt: "Chai Chowk Counter",
      title: "Service Counter",
      description: "Modern and efficient service"
    },
    {
      src: "/lovable-uploads/9bb14e01-9569-458c-82c5-81ee6aec85c2.png",
      alt: "Chai Chowk Seating",
      title: "Comfortable Seating",
      description: "Relax and enjoy your chai"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chai-primary mb-4">
            Our Ambiance
          </h2>
          <div className="w-16 h-0.5 chai-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-chai-secondary max-w-2xl mx-auto">
            Step into our warm and welcoming space, where every corner tells a story.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="chai-card p-6 max-w-2xl mx-auto">
              <p className="text-chai-secondary leading-relaxed text-sm">
                Our café combines traditional charm with modern comfort, creating the perfect 
                environment to enjoy your chai while connecting with friends and family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
