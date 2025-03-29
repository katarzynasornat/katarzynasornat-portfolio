// export default ProjectIcons;
import React, { useState } from 'react';
import Modal from './Modal';
import { workData1, assets, projects } from '@/assets/assets'
import Image from "next/image";

const ProjectIcon = ({ project, onClick }) => (
  <div
    className="p-6 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400 cursor-pointer"
    onClick={() => onClick(project)}
  >
    <h3 className="text-lg font-semibold">{project.name}</h3>
  </div>
);

const ProjectIcon1 = ({ project, onClick }) => (
    <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}} onClick={() => onClick(project)}>  
    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
        <div>
            <h2 className='font-semibold'>{project.title}</h2>
            <p className = 'text-sm text-gray-700'>{project.description}</p>
            {/* <p className = 'text-sm text-gray-700'>{`url(${project.bgImage})`}</p> */}
        </div> 
        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
            <Image src={assets.send_icon} alt = "send icon" className = 'w-5'/>
        </div>
    </div>
    
</div>
);




const ProjectIcons = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id = "work" className = 'w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className = "text-center mb-2 text-lg font-Ovo">
            My portfolio
        </h4>
        <h2 className = "text-center text-5xl font-Ovo">
            My latest work
        </h2>

        <p className = 'text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
      <div className = 'grid grid-cols-3 my-10 gap-5'>
        {projects.map((project) => (
          <ProjectIcon1
            key={project.name}
            project={project}
            onClick={openModal}
          />
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={closeModal}
        title={selectedProject?.title}
      >
        {selectedProject?.content}
      </Modal>
    </div>
  );
};

export default ProjectIcons;
