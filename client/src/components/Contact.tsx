// import Strings from "../Shared/Strings";

// function Contact() {
//     return (
//         <div id="services" className='px-12 mt-12'>
//       <div className='flex items-center'>
//         <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//         <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
//         <h2 className='text-[24px] font-bold'>{Strings.CONTACT}</h2>
//         <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
//         <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//       </div>
//       </div>
//     )
// }

// export default Contact


import { motion } from 'framer-motion';
import Strings from "../Shared/Strings";
import './Contact.css';

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

function Contact() {
  return (
    <div id="services" className="px-12 mt-12">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className='text-[24px] font-bold'>{Strings.CONTACT}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
       
      </div>
      <motion.div
          className="text-[24px] font-bold flex"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {Strings.EMAIL.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="text-[24px] font-bold flex"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {Strings.PHONE.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
    </div>
  );
}

export default Contact;
