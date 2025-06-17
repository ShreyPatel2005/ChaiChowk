
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('chai');

  const menuCategories = [
    { id: 'chai', name: 'Chai Varieties' },
    { id: 'snacks', name: 'Snacks & Bites' },
    { id: 'beverages', name: 'Cold Beverages' },
    { id: 'special', name: 'Special Items' }
  ];

  const menuItems = {
    chai: [
      { name: 'Masala Chai', price: '₹15', description: 'Traditional spiced tea with aromatic spices' },
      { name: 'Ginger Chai', price: '₹18', description: 'Fresh ginger infused chai' },
      { name: 'Cardamom Chai', price: '₹20', description: 'Fragrant cardamom flavored chai' },
      { name: 'Kulhad Chai', price: '₹25', description: 'Traditional clay pot chai experience' },
      { name: 'Cutting Chai', price: '₹10', description: 'Small serving of strong chai' },
      { name: 'Special Chai', price: '₹30', description: 'Our signature blend with secret spices' }
    ],
    snacks: [
      { name: 'Vada Pav', price: '₹20', description: 'Mumbai style potato fritters in bun' },
      { name: 'Samosa', price: '₹15', description: 'Crispy triangular pastry with spiced filling' },
      { name: 'Pakora', price: '₹25', description: 'Mixed vegetable fritters' },
      { name: 'Bread Pakora', price: '₹30', description: 'Stuffed bread fritters' },
      { name: 'Sandwich', price: '₹35', description: 'Fresh vegetable sandwich' },
      { name: 'Toast', price: '₹25', description: 'Buttered and grilled bread' }
    ],
    beverages: [
      { name: 'Cold Coffee', price: '₹40', description: 'Chilled coffee with milk and sugar' },
      { name: 'Lassi', price: '₹35', description: 'Traditional yogurt drink' },
      { name: 'Fresh Lime Water', price: '₹20', description: 'Refreshing lime juice' },
      { name: 'Iced Tea', price: '₹25', description: 'Chilled tea with flavors' },
      { name: 'Buttermilk', price: '₹20', description: 'Spiced yogurt drink' }
    ],
    special: [
      { name: 'Bun Maska', price: '₹25', description: 'Soft bun with butter' },
      { name: 'Khari Biscuit', price: '₹15', description: 'Crispy flaky biscuits' },
      { name: 'Rusk', price: '₹10', description: 'Perfect with chai' },
      { name: 'Combo Special', price: '₹50', description: 'Chai + Snack combo' }
    ]
  };

  return (
    <section id="menu" className="section-padding bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chai-primary mb-4">
            Our Menu
          </h2>
          <div className="w-16 h-0.5 chai-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-chai-secondary max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic chai varieties and delicious snacks.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? 'chai-gradient text-white shadow-sm'
                    : 'bg-white text-chai-primary border border-gray-200 hover:border-amber-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> {/* Increased gap for better spacing */}
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="menu-item-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"> {/* Added shadow, rounded corners, hover effect */}
                {/* Optional: Add an image placeholder for each menu item */}
                {/* <img src={`/placeholder-menu-item.svg`} alt={item.name} className="w-full h-32 object-cover"/> */}
                <div className="p-4"> {/* Added padding */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-chai-primary text-lg">{item.name}</h3> {/* Increased text size */}
                    <span className="text-xl font-bold text-amber-600">{item.price}</span> {/* Increased text size */}
                  </div>
                  <p className="text-chai-secondary text-sm leading-relaxed">{item.description}</p> {/* Added leading-relaxed for better readability */}
                </div>
              </div>
            ))}
          </div>

          {/* Complete Menu Image */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8"> {/* Consistent card styling */}
            <h3 className="text-2xl font-bold text-chai-primary mb-4 text-center">Our Full Menu</h3> {/* Increased text size */}
            <img 
              src="/lovable-uploads/1bac0281-c1a7-4020-b8ba-5cc5bab7d88e.png" 
              alt="Chai Chowk Complete Menu" 
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="chai-button"
              onClick={() => window.open('https://zomato.onelink.me/xqzv/gz09m36a', '_blank')}
            >
              Order Now on Zomato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
