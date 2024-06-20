import Strings from "../Shared/Strings";

function Services() {
  return (
    <div id="services" className='px-12 mt-12'>
      <div className='flex items-center'>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <h2 className='text-[24px] font-bold'>{Strings.SKILLS}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>

      {/* <div className='flex justify-around mt-16'>
        <div className='text-center flex flex-col justify-center items-center gap-6'>
          <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
            <img
              src="/design.png"
              alt="Frontend Design"
              className='w-[80px] h-[80px] p-5 hover:scale-110 transition-all cursor-pointer'
            />
          </div>
          <h2 className='mt-5 font-bold'>{Strings.FRONTED}</h2>
          <h2 className='text-gray-400'>{Strings.FRONTED_DESC}</h2>
          <IoArrowForwardOutline
            className="bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all"
            
          />
        </div> */}

        {/* <div className='text-center flex flex-col justify-center items-center gap-6'>
          <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
            <img
              src="/backend.png"
              alt="Backend Development"
              className='w-[80px] h-[80px] p-5 hover:scale-110 transition-all cursor-pointer'
            />
          </div>
          <h2 className='mt-5 font-bold'>{Strings.BACKEND}</h2>
          <h2 className='text-gray-400'>{Strings.BACKEND_DESC}</h2>
          <IoArrowForwardOutline
            className="bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all"
          />
        </div> 
      </div>*/}
    </div>
  );
}

export default Services;
