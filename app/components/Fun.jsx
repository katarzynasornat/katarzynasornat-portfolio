import { serviceData, assets } from '@/assets/assets'
import Image from  'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id ="services" className = 'w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className = "text-center mb-2 text-lg font-Ovo">
            How it started
        </h4>
        <h2 className = "text-center text-5xl font-Ovo">
            My Art Designs
        </h2>

        <p className = 'text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>My hobby always was to draw and design things. Below I present some of my works which pushed me to do more in creative design field.</p>

        {/* <div className='grid grid-cols-2 gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) => (
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                    <Image src={icon} alt = "" className = 'w-10'/>
                    <h3 className = 'text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} alt = '' className='w-4'/>
                    </a>
                </div>
            ))}

        </div> */}

    <div className="flex flex-col items-center space-y-30 py-16">
      {/* Section 1 */}
      <div className="flex items-center justify-center space-x-12">
        <div className="text-center w-1/3">
          <h2 className="text-3xl font-bold mb-4 font-Ovo">Engagement ring with diamond</h2>
          <p className="text-lg mb-4 text-justify">In 2010 I took part in a <a href = "https://www.michelson.pl/pierscionki-zareczynowe/pierscionek-z-brylantem-01-ct-w-przecudnej-oprawie-z-zoltego-zlota-m-p-585z-004-010"><u>competition</u></a> to design an engagement ring with a diamond organized by Michelson Diamonds. I provided a sketch of the design and won the first place. The ring can be still bought on Michelson Diamonds website.</p>
        </div>
        <div className="w-1/2 relative group">
          <Image src="ring.png" alt="Image 1" width={800} height={800} className = "w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500 cursor-pointer"/>
        </div>
      </div>

      

      {/* Section 2 */}
      <div className="flex items-center justify-center space-x-12">
        <div className="w-1/2 relative group">
          <Image src="sliwka.png" alt="Image 2" width={1000} height={1000} className = "w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500 cursor-pointer"/>
        </div>
        <div className="text-center w-1/3">
          <h2 className="text-3xl font-bold mb-4 font-Ovo">Chocolate box design for Śliwka Nałęczowska</h2>
          <p className="text-lg mb-4 text-justify">In 2025 I took part in a competition organized by Śliwka Nałęczowska to design a limited edition Christmas chocolate box. Winners will be announced in April 2025. I have used Procreate for the design.</p>
        </div>
      </div>

      


    </div>
      
    </div>
  )
}

export default Services
