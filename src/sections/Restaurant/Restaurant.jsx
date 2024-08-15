import { useState, useEffect } from "react";
import food1 from "../../imgs/metting.jpg";
import food2 from "../../imgs/salle.jpg";
import food3 from "../../imgs/park.jpg";
import chef from "../../imgs/cheff.jpeg";

const Restaurant = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const foodImages = [food1, food2, food3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Exquisite Restaurant
        </h2>

        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0 relative overflow-hidden rounded-lg shadow-lg h-96">
            {foodImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Delicious Dish ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Culinary Excellence
            </h3>
            <p className="text-gray-600 mb-6">
              Indulge in a gastronomic journey at our world-class restaurant.
              Our expert chefs craft exquisite dishes using the finest,
              locally-sourced ingredients to create unforgettable dining
              experiences. From traditional favorites to innovative culinary
              creations, every meal is a celebration of flavor and artistry.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Farm-to-table ingredients</li>
              <li>Seasonal menus</li>
              <li>Extensive wine selection</li>
              <li>Vegetarian and vegan options</li>
            </ul>
            <a
              href="#reservations"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Make a Reservation
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Meet Our Chef
            </h3>
            <p className="text-gray-600 mb-6">
              At the helm of our culinary team is renowned Chef Maria Rousseau.
              With over 20 years of experience in Michelin-starred restaurants
              across Europe, Chef Maria brings a wealth of expertise and passion
              to every dish. Her innovative approach to classic cuisine has
              earned her numerous accolades and a devoted following among food
              enthusiasts.
            </p>
            <p className="text-gray-600 mb-6">
              Chef Maria&apos;s philosophy revolves around respecting the
              ingredients, showcasing their natural flavors while adding
              creative twists that surprise and delight our guests. Her
              commitment to sustainability and supporting local producers is
              reflected in our ever-changing menu that captures the essence of
              each season.
            </p>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={chef}
              alt="Chef Maria Rousseau"
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
