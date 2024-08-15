import { FaPhone, FaClock, FaTruck, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import logo from "./logo.png";

const Reservation = () => {
  const logoColor = "#e7c86e";
  const phoneNumber = "+212523564851";

  const sections = [
    {
      title: "Réservation",
      icon: FaUtensils,
      items: [
        {
          icon: FaClock,
          title: "Heures de Réservation",
          content: "De 11h00 à 21h00",
        },
      ],
      experienceText:
        "Pour une expérience gastronomique inoubliable, n'hésitez pas à nous contacter.",
    },
    {
      title: "Livraison",
      icon: FaTruck,
      items: [
        {
          icon: FaClock,
          title: "Heures de Livraison",
          content: "De 11h00 à 22h00",
        },
      ],
      experienceText:
        "Pour une expérience culinaire à domicile, n'hésitez pas à nous contacter.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center py-24 px-4">
      <div className="absolute inset-0 bg-white"></div>
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain filter blur-sm"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <motion.div
        className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sections.map((section, sectionIndex) => (
          <SectionCard
            key={sectionIndex}
            section={section}
            logoColor={logoColor}
            itemVariants={itemVariants}
          />
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="absolute bottom-9 left-0 right-0 text-center "
      >
        <CallButton phoneNumber={phoneNumber} />
      </motion.div>
    </section>
  );
};

const SectionCard = ({ section, logoColor, itemVariants }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white bg-opacity-95 pb-2 rounded-lg shadow-xl w-full"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
    >
      <section.icon className="w-full h-full" style={{ color: logoColor }} />
    </motion.div>

    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
      {section.title}
    </h1>

    <div className="space-y-6">
      {section.items.map((item, index) => (
        <InfoItem
          key={index}
          item={item}
          logoColor={logoColor}
          itemVariants={itemVariants}
        />
      ))}
    </div>

    <motion.div
      className="mt-6 sm:mt-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <p className="text-xs sm:text-sm text-black mb-2">
        {section.experienceText}
      </p>
      <p className="text-xs sm:text-sm text-black">
        Nous avons hâte de vous servir!
      </p>
    </motion.div>
  </motion.div>
);

const InfoItem = ({ item, logoColor, itemVariants }) => (
  <motion.div
    className="text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    variants={itemVariants}
  >
    <item.icon
      className="mx-auto text-3xl sm:text-4xl mb-2"
      style={{ color: logoColor }}
    />
    <p className="text-sm sm:text-base text-black">{item.title}</p>
    <p className="font-semibold text-base sm:text-lg text-black">
      {item.content}
    </p>
  </motion.div>
);

const CallButton = ({ phoneNumber }) => (
  <a
    href={`tel:${phoneNumber}`}
    className="inline-flex items-center justify-center bg-[#e7c86e] text-black py-3 px-6 rounded-lg hover:bg-[#e7c96ecd] transition duration-300 ease-in-out shadow-md hover:shadow-lg text-lg"
  >
    <FaPhone className="mr-2" />
    Appelez-nous: {phoneNumber}
  </a>
);
SectionCard.propTypes = {
  section: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    experienceText: PropTypes.string.isRequired,
  }).isRequired,
  logoColor: PropTypes.string.isRequired,
  itemVariants: PropTypes.object.isRequired,
};

InfoItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  logoColor: PropTypes.string.isRequired,
  itemVariants: PropTypes.object.isRequired,
};

CallButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};

export default Reservation;
