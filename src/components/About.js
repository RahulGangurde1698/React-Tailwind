import React from 'react'

function About() {
  return (
    <>




<div className='w-full py-20  '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            A  web application created using tailwind CSS and react js .
          </h1>
          <br/>
          <p> In this web application  contains three pages 'HOME' , 'ABOUT' , 'PROFILE', used react router for navigating through pages.
            <br/>
            <br/>
           The home page contains elements like image slider, cards with image and discription ,
            the image slider and cards are created with tailwind css the images and information of the cards are fetch from API and using map method the image , name , and discripion is shown in cards.
            <br/>
            The readmore section in card will redirect to wikipedia , because the api does not contain such information.
             </p>
             <br/><br/>
        
             <p>
              The about page contains some information about the website.
             </p>

             <br/><br/>
        
        <p>
           The Profile page contains some information about the website creator.
        </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[black] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default About