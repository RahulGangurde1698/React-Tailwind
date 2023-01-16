import React from 'react';
import pic1 from '../pic1.png'
import pic2 from '../pic2.avif'
import pic3 from '../pic3.avif'


import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function App() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 1490;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 1490;
  };

  return (
    <>  


  
      <div className=' flex items-center'>
        <MdChevronLeft className='cursor-pointer ' onClick={slideLeft} size={40} />
        <br/>
        <div
          id='slider'
          className='w-full h-full  py-11 overflow-x-scroll scroll whitespace-nowrap '
        >
         
            <img
              className='w-full  h-[750px] inline-block p-2 cursor-pointer ease-in-out '
              src={pic1}
              alt='/'
            />
             <img
              className='w-full  h-[750px] inline-block p-2 cursor-pointer ease-in-out'
              src={pic2}
              alt='/'
            />
               <img
              className='w-full   h-[750px] inline-block p-2 cursor-pointer ease-in-out duration-300'
              src={pic3}
              alt='/'
            />
        </div>
        <MdChevronRight className=' cursor-pointer ' onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default App;