import { IoLocationSharp, IoCall, IoTime, IoMail } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="text-black py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-[#bc906b] mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contactez-nous
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-stretch shadow-2xl rounded-2xl overflow-hidden bg-white"
        >
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.5527091836607!2d-6.906561925239863!3d32.909992477180126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda69dfda1f7d5b9%3A0xb9c2a924b77a8036!2sAl%20Akhawin%20Park!5e0!3m2!1sfr!2sma!4v1723289184409!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Akhawin Park Location"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-light text-black mb-8 text-center lg:text-left">
              Informations de contact
            </h3>
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <ContactItem
                icon={IoLocationSharp}
                title="Notre adresse"
                content="Al Akhawin Park R403, Khouribga"
                link="https://maps.app.goo.gl/Hq4e3TWjYgGAhtT58"
              />
              <ContactItem
                icon={IoCall}
                title="Appelez-nous"
                content="+212523564851"
                link="tel:+212523564851"
              />
              <ContactItem
                icon={IoTime}
                title="Heures d'ouverture"
                content="Tous les jours de 9:00 à 23:00"
              />
              <ContactItem
                icon={IoMail}
                title="contact nous"
                content="contact@park-alkhawin.ma"
                link="mailto:contact@park-alkhawin.ma"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon: Icon, title, content, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-4 text-center lg:text-left"
  >
    <Icon className="text-4xl text-[#e7c86e]" />
    <div>
      <h4 className="text-lg font-light text-black mb-1">{title}</h4>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e7c86e] hover:text-black transition duration-300"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </motion.div>
);

export default Contact;
