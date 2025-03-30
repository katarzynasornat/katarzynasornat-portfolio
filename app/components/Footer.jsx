import {assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className = 'mt-20'>
      <div className = 'text-center'>
        <Image src={assets.logo} alt='' className = 'w-36 mx-auto mb-2'/>
        <div className = 'w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className = 'w-6'/>  katarzyna.sornat0504@gmail.com
        </div>
      </div>

      <div className = 'text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Katarzyna Sornat. All rights reserved.</p>
        <ul className = 'flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target = '_blank' href = "https://medium.com/@sornatk"> <Image src={assets.medium_icon} alt='' className = 'w-6'/> Medium</a></li>
            <li><a target = '_blank' href = "https://github.com/katarzynasornat"><Image src={assets.github_icon} alt='' className = 'w-6'/>  Github</a></li>
            <li><a target = '_blank' href = "https://www.linkedin.com/in/katarzynasornat/"><Image src={assets.linkedin_icon} alt='' className = 'w-6'/>  LinkedIn</a></li>
            <li></li>

            
        </ul>
      </div>
    </div>
  )
}

export default Footer
