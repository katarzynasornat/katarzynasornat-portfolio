import user_image from './user-image.png';
import github_icon from './github_icon.png';   
import medium_icon from './medium_icon.png';
import linkedin_icon from './linkedin_icon.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    medium_icon,
    github_icon,
    linkedin_icon,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: 'work-1.png',
    }, 
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: 'work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: 'work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: 'work-4.png',
    },
]

export const workData1 = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: 'work-1.png',
    }, 
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: 'work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: 'work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: 'work-4.png',
    },
]

// Example project data
export const projects = [
    {
      name: 'Personalized Book',
      title: 'Personalized Book',
      description: 'AI empowered character personalization',
      description_long: " dkdkdkd" ,
      image: 'work-1.png',
      bgImage: 'agatka_.png',
      content: (
        <>
          <h3 className="text-xl font-semibold mt-6">About This Project</h3>
          <p className = "mt-6">The aim of this project was to create a children's book that would be personalized based on the main character photo. The story is about a girl who tries to rescue bunnies That was a charity project for a 5-year-old girl, who got cancer. More you can find <a href = "https://naratunek.org/nasi-podopieczni/agatka-panasiuk"><u>here</u></a>. The whole income will be used to support her treatment abroad. The book is in Polish language.</p>
         
          <h3 className="text-xl font-semibold mt-6 mb-6">My Role</h3>
          I was responsible for end2end delivery of the project. That includes: 
          <ul className={"list-disc list-inside"}>
            <li>Text idea and generation (ChatGPT with adjustments)</li>
            <li>Lora training from one delivered picture to get the personalization of the girl (Diffusion and DiT models)</li>   
            <li>Scenes generation - generating foreground, background, proper poses and face expressions (DiT models, ComfyUI, Midjourney, ControlNet, Canva)</li>   
            <li>Printing - getting familiar with tools, technology and process</li>      
          </ul>
          <img src="work-1.png" alt="Project A" className="mt-4 w-full rounded-lg" />
        </>
      ),
    },
    {
      name: 'Sketch to 3D',
      title: 'Sketch to 3D',
      description: 'DiT + ControlNet for 3D rendering',
      description_long: " dkdkdkd" ,
      image: 'work-2.png',
      bgImage: 'work-2.png',
      content: (
        <>
          <h3 className="text-xl font-semibold">About This Project</h3>
          <p>This project is a responsive website built with Next.js and Tailwind CSS, featuring a creative design.</p>
          <img src="work-2.png" alt="Project B" className="mt-4 w-full rounded-lg" />
          <img src="work-2.png" alt="Project B" className="mt-4 w-full rounded-lg" />
        </>
      ),
    },
    {
      name: 'E-comm photography',
      title: 'E-comm photography',
      description: 'Flux/SDXL for product photography',
      description_long: " dkdkdkd" ,
      image: 'work-3.png',
      bgImage: 'work-3.png',
      content: (
        <>
          <h3 className="text-xl font-semibold">About This Project</h3>
          <p>Project C focuses on interactivity, animations, and smooth transitions in the UI.</p>
          <img src="work-3.png" alt="Project C" className="mt-4 w-full rounded-lg" />
        </>
      ),
    },
    {
        name: 'Deepfake',
        title: 'Deepfake',
        description: 'AI + Elevenlabs for video creation',
        description_long: " dkdkdkd" ,
        image: 'work-4.png',
        bgImage: 'work-4.png',
        content: (
          <>
            <h3 className="text-xl font-semibold mt-6">About This Project</h3>
          <p className = "mt-6">The aim of this project was to create a wedding surprise for my brother and his fiancee. The core idea was to do a remake of a Polish TV News program called "Teleexpress", adjust the content and make it more personal. The cherry on top was to include important for them famous people (like Elon Musk, Pope Francesco and Robert Lewandowski) saying best wishes for them. I wrote the article on <a href = "https://medium.com/@sornatk/deepfake-video-with-custom-text-and-original-voice-made-easily-32e602644773"><u>Medium</u></a> where I described the tech and tools part.</p>

         <div className="flex flex-wrap justify-center gap-4 p-4 mt-6">
            <div className="w-full md:w-1/2 lg:w-1/3">
                <video
                className="w-full h-auto rounded-lg shadow-lg"
                controls
                src="/musk.mp4"
                />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
                <video
                className="w-full h-auto rounded-lg shadow-lg"
                controls
                src="/pope.mp4"
                />
            </div>
        </div>
         
          <h3 className="text-xl font-semibold mt-6 mb-6">My Role</h3>
          I was responsible for end2end delivery of the project. That includes: 
          <ul className={"list-disc list-inside"}>
            <li>Generate speech of chosen person with their own voice from text (I used Elevenlabs for train custom voice based on voice samples. Samples I have prepared in Audacity)</li>    
            <li>Synchronize video (lips movement) with the speech - Wav2Lip on Google Colab</li>
          </ul>
          </>
        ),

        

      },
      {
        name: 'Subject-driven generation',
        title: 'Subject-driven generation',
        description: 'AI + Elevenlabs for video creation',
        description_long: " dkdkdkd" ,
        image: 'work-4.png',
        bgImage: 'work-4.png',
        content: (
          <>
            <h3 className="text-xl font-semibold">About This Project</h3>
            <p>Project C focuses on interactivity, animations, and smooth transitions in the UI.</p>
            <img src="work-4.png" alt="Project D" className="mt-4 w-full rounded-lg" />
          </>
        ),
      },
  ];

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];