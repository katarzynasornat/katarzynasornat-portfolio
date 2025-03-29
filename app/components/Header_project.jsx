
import React, {useRef} from 'react'
import { assets } from '@/assets/assets'
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 md:py-[10%] sm:py-[20%]">
        <div>
            <Image src={assets.profile_img} alt = "" className="rounded-full w-32"/>
        </div>
        <h3 className = "flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">Hi! I'm Kasia Sornat <Image src={assets.hand_icon} alt = "" className="w-6"/></h3>
        <h1 className = "text-3xl sm_text-6xl lg:test-[66px] font-Ovo">Data Scientist and creative soul from Poland</h1>
        <p className = "max-w-2xl mx-auto font-Ovo">I'm a passionate data scientist and creative soul from Poland. I specialize in data analysis and machine learning, and I'm always eager to learn new things.</p>

        <div className = "flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a href='#contact' className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-ceter gap-2"> contact me <Image src={assets.right_arrow_white} alt = "" className="w-4"/></a>
            <a href='/sample-resume.pdf' download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"> my resume<Image src={assets.download_icon} alt = "" className="w-4"/></a>
        </div>
      
    </div>
  )
}

export default Header
