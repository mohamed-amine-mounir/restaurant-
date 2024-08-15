import { motion } from "framer-motion";
import chef from "../../imgs/cheff.jpeg";

const EspaceEnfant = () => {
  return (
    <>
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-opacity-5 bg-gray-200 pattern-diagonal-lines pattern-gray-300 pattern-size-2 pattern-opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col-reverse lg:flex-row items-center"
            transition={{ duration: 0.8 }}
          >
            <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left">
              <motion.h2
                className="text-3xl lg:text-4xl font-playfair text-[#bc906b] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                À propos de nos Chefs
              </motion.h2>
              <motion.p
                className="text-base lg:text-lg mb-6 leading-relaxed text-[#4a4a4a] font-lora"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Nos chefs sont les véritables artisans de l&apos;excellence
                gastronomique. Chaque plat qu&apos;ils créent est une œuvre
                d&apos;art, alliant passion, savoir-faire et créativité. Grâce à
                leurs compétences exceptionnelles et à leur amour pour la
                cuisine, chaque repas au Park Alakhawin devient une expérience
                inoubliable, où les saveurs se marient harmonieusement pour
                émerveiller vos papilles.
              </motion.p>
              <motion.p
                className="text-base lg:text-lg mb-8 leading-relaxed text-[#4a4a4a] font-lora"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Nos chefs sélectionnent avec soin les meilleurs ingrédients
                locaux et internationaux pour créer des plats qui célèbrent la
                richesse de notre terroir tout en explorant de nouvelles
                tendances culinaires. Leur dévouement à l&apos;excellence se
                reflète dans chaque assiette, offrant à nos invités une
                symphonie de saveurs à chaque bouchée.
              </motion.p>
            </div>
            <div className="lg:w-1/2 mb-10 lg:mb-0 w-full">
              <motion.div
                className="relative overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={chef}
                  alt="Nos Chefs"
                  className="w-full h-[300px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EspaceEnfant;
