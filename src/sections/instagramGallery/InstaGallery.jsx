// import { motion } from "framer-motion";
// import { FaInstagram } from "react-icons/fa";

// // Assume these are your Instagram post images
// import instaPost1 from "../../imgs/cheff.jpeg";
// import instaPost2 from "../../imgs/cheff.jpeg";
// import instaPost3 from "../../imgs/cheff.jpeg";
// import instaPost4 from "../../imgs/cheff.jpeg";
// import instaPost5 from "../../imgs/cheff.jpeg";
// import instaPost6 from "../../imgs/cheff.jpeg";
// import instaPost7 from "../../imgs/cheff.jpeg";
// import instaPost8 from "../../imgs/cheff.jpeg";

// const InstaGallery = () => {
//   const instagramPosts = [
//     { src: instaPost1, alt: "Instagram post 1" },
//     { src: instaPost2, alt: "Instagram post 2" },
//     { src: instaPost3, alt: "Instagram post 3" },
//     { src: instaPost4, alt: "Instagram post 4" },
//     { src: instaPost5, alt: "Instagram post 5" },
//     { src: instaPost6, alt: "Instagram post 6" },
//     { src: instaPost7, alt: "Instagram post 7" },
//     { src: instaPost8, alt: "Instagram post 8" },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center mb-8">
//           <FaInstagram className="text-2xl text-[#bc906b] mr-3" />
//           <h3 className="text-2xl font-playfair text-[#4a4a4a]">
//             Suivez-nous sur Instagram
//           </h3>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {instagramPosts.map((post, index) => (
//             <motion.div
//               key={index}
//               className="relative overflow-hidden rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <img
//                 src={post.src}
//                 alt={post.alt}
//                 className="w-full h-[250px] object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
//                 <FaInstagram className="text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default InstaGallery;
