// import React from 'react';
// import { motion } from 'framer-motion';
// import img2 from '../assets/img2.jpg'
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// // Using a placeholder image for demo
// // const img2 = "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

// const About = () => {
//   return (
//     <div id="aboutus" className="bg-gradient-to-br from-gray-50 to-white">
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           {/* Content Section */}
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
//           >
//             <motion.div
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="mb-4"
//             >
//               <span className="text-indigo-500 font-semibold text-lg">About Me</span>
//             </motion.div>
            
//             <motion.h1
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900 leading-tight"
//             >
//               I'm{" "}
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 viewport={{ once: true }}
//                 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
//               >
//                 Kavita
//               </motion.span>
//               ,
//               <br className="hidden lg:inline-block" />
//              a MERN Stack Developer
//             </motion.h1>
            
//             <motion.p
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               viewport={{ once: true }}
//               className="mb-8 leading-relaxed text-lg text-gray-700"
//             >
//               passionate about building{" "}
//               <motion.span
//                 whileHover={{ scale: 1.05 }}
//                 className="text-indigo-600 font-semibold cursor-default"
//               >
//                 full-stack web
//               </motion.span>{" "}
//               {" "}
//               <motion.span
//                 whileHover={{ scale: 1.05 }}
//                 className="text-purple-600 font-semibold cursor-default"
//               >
//                applications
//               </motion.span>{" "}
//              With a strong grasp of MongoDB, Express.js, React, and Node.js, I craft responsive, user-friendly interfaces and robust backend systems. I’m driven by clean code, intuitive design, and creating digital experiences that are both functional and visually engaging.
//             </motion.p>
            
//             {/* Skills Pills */}
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.7 }}
//               viewport={{ once: true }}
//               className="flex flex-wrap gap-3 mb-8"
//             >
//               {['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3','Bootstrap','TypeScript','Firebase','NodeJs','ExpressJs','MongoDb','Python'].map((skill, index) => (
//                 <motion.span
//                   key={skill}
//                   initial={{ scale: 0, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   viewport={{ once: true }}
//                   className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-200"
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </motion.div>
            
//             <motion.div
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="flex justify-center md:justify-start gap-4"
//             >
//              {/* <a href="/"><motion.button
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" 
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
//               >
//                 View Portfolio
//               </motion.button> </a>  */}
//                 <a href="https://github.com/Kavita-LachmanDas" target="_blank" rel="noopener noreferrer">
//         <motion.button
//           whileHover={{ 
//             scale: 1.05, 
//             boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" 
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-gray-800 to-gray-900 py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
//         >
//           <FaGithub size={20} />
//           GitHub
//         </motion.button>
//       </a>

//       <a href="https://www.linkedin.com/in/kavita-luhana-0a31842ab/" target="_blank" rel="noopener noreferrer">
//         <motion.button
//           whileHover={{ 
//             scale: 1.05, 
//             boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" 
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
//         >
//           <FaLinkedin size={20} />
//           LinkedIn
//         </motion.button>
//       </a>
//              <a href="/kavita-luhana Resume.pdf" download> <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   backgroundColor: "rgb(243, 244, 246)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex text-gray-700 bg-gray-100 border-2 border-gray-200 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg font-semibold transition-all duration-300"
//               >
//                 Download CV
//               </motion.button> </a>
//             </motion.div>
//           </motion.div>
          
//           {/* Image Section */}
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative"
//           >
//             {/* Background Decorative Elements */}
//             <motion.div
//               initial={{ rotate: 0 }}
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 blur-xl"
//             />
//             <motion.div
//               initial={{ rotate: 0 }}
//               animate={{ rotate: -360 }}
//               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//               className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"
//             />
            
//             {/* Main Image Container */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="relative overflow-hidden rounded-2xl shadow-2xl"
//             >
//               <motion.img
//                 initial={{ scale: 1.2 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.1 }}
//                 className="object-cover object-center w-full h-[400px] transition-transform duration-700"
//                 alt="Kavita - Frontend Developer"
//                 src={img2}
//               />
              
//               {/* Image Overlay */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent flex items-end p-6 transition-opacity duration-300"
//               >
//                 <div className="text-white">
//                   <h3 className="text-xl font-bold">Frontend Developer</h3>
//                   <p className="text-sm opacity-90">Crafting beautiful web experiences</p>
//                 </div>
//               </motion.div>
//             </motion.div>
            
//             {/* Floating Stats */}
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//               className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
//             >
//               <div className="text-center">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 0.6, delay: 1 }}
//                   viewport={{ once: true }}
//                   className="text-2xl font-bold text-indigo-600"
//                 >
//                   1+
//                 </motion.div>
//                 <div className="text-sm text-gray-600">Years Experience</div>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ y: -50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 1 }}
//               viewport={{ once: true }}
//               className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
//             >
//               <div className="text-center">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 0.6, delay: 1.2 }}
//                   viewport={{ once: true }}
//                   className="text-2xl font-bold text-purple-600"
//                 >
//                   20+
//                 </motion.div>
//                 <div className="text-sm text-gray-600">Projects Done</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import img2 from '../assets/img2.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div id="aboutus" className="bg-gradient-to-br from-gray-50 to-white">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto flex px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 md:flex-row flex-col items-center">
          {/* Content Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:flex-grow md:w-1/2 lg:pr-12 xl:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-12 sm:mb-16 md:mb-0 items-center text-center w-full"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-3 sm:mb-4"
            >
              <span className="text-indigo-500 font-semibold text-sm sm:text-base lg:text-lg">About Me</span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 font-bold text-gray-900 leading-tight"
            >
              I'm{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Kavita
              </motion.span>
              ,
              <br className="hidden sm:inline-block" />
              <span className="sm:hidden"> </span>
             a MERN Stack Developer
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg text-gray-700 max-w-none md:max-w-lg lg:max-w-none"
            >
              passionate about building{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-indigo-600 font-semibold cursor-default"
              >
                full-stack web
              </motion.span>{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-purple-600 font-semibold cursor-default"
              >
               applications
              </motion.span>{" "}
             With a strong grasp of MongoDB, Express.js, React, and Node.js, I craft responsive, user-friendly interfaces and robust backend systems. I'm driven by clean code, intuitive design, and creating digital experiences that are both functional and visually engaging.
            </motion.p>
            
            {/* Skills Pills */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center md:justify-start"
            >
              {['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3','Bootstrap','TypeScript','Firebase','NodeJs','ExpressJs','MongoDb','Python'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-indigo-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a href="https://github.com/Kavita-LachmanDas" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  <FaGithub size={16} className="sm:w-5 sm:h-5" />
                  GitHub
                </motion.button>
              </a>

              <a href="https://www.linkedin.com/in/kavita-luhana-0a31842ab/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  <FaLinkedin size={16} className="sm:w-5 sm:h-5" />
                  LinkedIn
                </motion.button>
              </a>

              <a href="/kavita-luhana Resume.pdf" download className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgb(243, 244, 246)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center text-gray-700 bg-gray-100 border-2 border-gray-200 py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                >
                  Download CV
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-full max-w-sm sm:max-w-md md:max-w-none mx-auto md:mx-0 relative"
          >
            {/* Background Decorative Elements */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"
            />
            
            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="object-cover object-center w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] transition-transform duration-700"
                alt="Kavita - Frontend Developer"
                src={img2}
              />
              
              {/* Image Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent flex items-end p-4 sm:p-6 transition-opacity duration-300"
              >
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Frontend Developer</h3>
                  <p className="text-xs sm:text-sm opacity-90">Crafting beautiful web experiences</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6 bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-2 sm:p-4 border border-gray-100"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-2xl font-bold text-indigo-600"
                >
                  1+
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Years Experience</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-4 sm:-top-6 -right-3 sm:-right-6 bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-2 sm:p-4 border border-gray-100"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-2xl font-bold text-purple-600"
                >
                  20+
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Projects Done</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;