import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>
        Passionate About Properties, Dedicated to Your Vision
      </p>

      {/* Flex container for image and content */}
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-10 w-full'>

        {/* Image Section */}
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/3 max-w-md'></img>

        {/* Text Section */}
        <div className='flex flex-col md:w-1/2 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Min. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-8 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim adipisci sunt incidunt deleniti id provident, quaerat cum consequatur itaque vitae, sapiente officiis odio quibusdam atque in. Magni, similique! Excepturi.</p>
          <button className='bg-blue-600 text-white px-4 py-1 rounded w-1/2'>Learn More...</button>
        </div>

      </div>
    </div>
  )
}

export default About
