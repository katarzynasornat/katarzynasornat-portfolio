import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from "next/image";

const About = () => {
  return (
    <div id = "about" className = "w-full px-[12%] py-10 scroll-mt-20">
      <h4 className = "text-center mb-2 text-lg font-Ovo">
        Introduction
      </h4>
      <h2 className = "text-center text-5xl font-Ovo">
        About me
      </h2>

      <div className = "flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className = "w-64 sm:w-80 rounded-3xl max-w-none">
            <Image src={assets.user_image} alt = "user" className="w-full rounded-3xl"/>
        </div>
        <div className = "flex-1">
        <p className = "mb-10 max-w-2xl font-Ovo text-justify">An experienced Data Scientist and a creative personality who thinks outside the box. A motivated team player with great interpersonal acuity who can bridge the gap between stakeholders, business people and technical part of the team. During the professional career has been working in banking, fast fashion, airlines and retail sector working on different projects. Has exceptional presentation and storytelling skills. Looking forward interesting projects to work on.</p>

        <ul className = "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon, iconDark, title, description}, index) => (
                <li className = 'border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key = {index}>
                    <Image src={icon} alt = "title" className = 'w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700 text-sm'>{title}</h3>
                    <p>{description}</p>
                </li>
            ))}
        </ul>

        <h4 className = 'my-6 text-gray-700 font-Ovo'>Tools I use</h4>
        <ul className = "flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
                <li className = "flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                    key={index}>
                    <Image src={tool} alt = "Tool" className = "w-5 sm:w-7"/>
                </li>
                
            ))}
        </ul>


        <p className = "mb-10 max-w-2xl font-Ovo mt-6 text-justify">I learn very quickly. Fun fact: I made this website in 2 days for this recruitment, knowing very little about UX/UI Design and programming in Next.js. My Motto is "Never give up".</p>


        </div>
      </div>
    </div>
  )
}

export default About
