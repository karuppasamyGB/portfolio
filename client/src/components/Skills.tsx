// import React from 'react'
// import { IoArrowForwardOutline } from "react-icons/io5";
// import Strings from "../Shared/Strings";

// function Skills() {
//     return (
//         <div id="services" className='px-12 mt-12'>
//             <div className='flex items-center'>
//                 <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//                 <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
//                 <h2 className='text-[24px] font-bold'>{Strings.SKILLS}</h2>
//                 <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
//                 <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//             </div>

//             <div className='flex justify-around mt-16'>
//                 <div className='text-center flex flex-col justify-center items-center gap-6'>

//                 </div>
//                 <div className='text-center flex flex-col justify-center items-center gap-6'>
//                     <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
//                     <h2 className='mt-5 font-bold'>{Strings.HTML}</h2>
//                     <h2 className='text-gray-400'>{Strings.CSS}</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Skills
import ProgressBar from '@ramonak/react-progress-bar';
import './Skills.css';

const skills = [
  { name: 'HTML', logo: 'html.png', progress: 90 },
  { name: 'CSS', logo: 'csss.png', progress: 85 },
  { name: 'JavaScript', logo: 'js.png', progress: 80 },
  { name: 'React', logo: 'react.png', progress: 75 },
  { name: 'Node.js', logo: 'node.png', progress: 70 },
  { name: 'MongoDB', logo: 'MDB.png', progress: 65 },
  { name: 'Express', logo: 'exp.png', progress: 70}
];

function Skills() {
  return (
    
    <div className="skills-container flex flex-wrap justify-center items-center gap-8 py-12">
        
      {skills.map((skill, index) => (
        <div key={index} className="skill-item flex flex-col items-center">
          <img src={skill.logo} alt={skill.name} className="w-20 h-20 mb-4" />
          <span className="text-xl font-medium">{skill.name}</span>
          <div className="w-96 mt-2">
            <ProgressBar
              completed={skill.progress}
              bgColor='#2896b2'
              animateOnRender={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
