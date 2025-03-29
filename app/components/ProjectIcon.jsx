// import React, { useState } from 'react';
// import Modal from './Modal';

// const ProjectIcon = ({ project, onClick }) => (
//   <div
//     className="p-4 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400 cursor-pointer"
//     onClick={onClick}
//   >
//     <h3 className="text-lg font-semibold">{project.name}</h3>
//   </div>
// );

// const ProjectIcons = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       name: "Project A",
//       type: "info",
//       title: "Project A Details",
//       description: "This is a description of Project A.",
//       extraContent: <div className="text-sm text-gray-600">Additional Info about Project A</div>
//     },
//     {
//       id: 2,
//       name: "Project B",
//       type: "image",
//       title: "Project B Visuals",
//       description: "This is a visual representation of Project B.",
//       extraContent: <img src="https://via.placeholder.com/200" alt="Project B Image" />
//     },
//     {
//       id: 3,
//       name: "Project C",
//       type: "video",
//       title: "Project C Video",
//       description: "Watch the demo video of Project C.",
//       extraContent: <video controls className="w-full" src="/path/to/video.mp4"></video>
//     }
//   ];

//   const openModal = (project) => setSelectedProject(project);
//   const closeModal = () => setSelectedProject(null);

//   const generateContent = (project) => {
//     switch (project.type) {
//       case 'info':
//         return {
//           title: project.title,
//           body: (
//             <>
//               <p>{project.description}</p>
//               {project.extraContent}
//             </>
//           ),
//         };
//       case 'image':
//         return {
//           title: project.title,
//           body: (
//             <>
//               <p>{project.description}</p>
//               {project.extraContent}
//             </>
//           ),
//         };
//       case 'video':
//         return {
//           title: project.title,
//           body: (
//             <>
//               <p>{project.description}</p>
//               {project.extraContent}
//             </>
//           ),
//         };
//       default:
//         return { title: 'Unknown Project', body: <p>Details unavailable.</p> };
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <ProjectIcon
//             key={project.id}
//             project={project}
//             onClick={() => openModal(project)}
//           />
//         ))}
//       </div>

//       <Modal
//         isOpen={selectedProject !== null}
//         onClose={closeModal}
//         content={selectedProject ? generateContent(selectedProject) : {}}
//       />
//     </div>
//   );
// };

// export default ProjectIcons;
import React, { useState } from 'react';
import Modal from './Modal';

// Example project data
const projects = [
  {
    name: 'Project A',
    title: 'Amazing Project A',
    description: 'This project is about building something awesome with Next.js and Tailwind CSS.',
    image: 'work-1.png',
    content: (
      <>
        <h3 className="text-xl font-semibold">About Project A</h3>
        <p>This project demonstrates a simple but effective web application built using Next.js.</p>
        <img src="work-1.png" alt="Project A" className="mt-4 w-full rounded-lg" />
      </>
    ),
  },
  {
    name: 'Project B',
    title: 'Creative Project B',
    description: 'Project B showcases a beautiful design and responsive layout.',
    image: 'work-2.png',
    content: (
      <>
        <h3 className="text-xl font-semibold">About Project B</h3>
        <p>This project is a responsive website built with Next.js and Tailwind CSS, featuring a creative design.</p>
        <img src="work-2.png" alt="Project B" className="mt-4 w-full rounded-lg" />
        <img src="work-2.png" alt="Project B" className="mt-4 w-full rounded-lg" />
      </>
    ),
  },
  {
    name: 'Project C',
    title: 'Interactive Project C',
    description: 'This project features interactivity with advanced JavaScript and animations.',
    image: 'work-3.png',
    content: (
      <>
        <h3 className="text-xl font-semibold">About Project C</h3>
        <p>Project C focuses on interactivity, animations, and smooth transitions in the UI.</p>
        <img src="work-3.png" alt="Project C" className="mt-4 w-full rounded-lg" />
      </>
    ),
  },
];

const ProjectIcon = ({ project, onClick }) => (
  <div
    className="p-6 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400 cursor-pointer"
    onClick={() => onClick(project)}
  >
    <h3 className="text-lg font-semibold">{project.name}</h3>
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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectIcon
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
