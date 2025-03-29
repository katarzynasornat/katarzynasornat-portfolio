// import React from 'react';

// const Modal = ({ isOpen, onClose, content }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold">{content.title}</h2>
//           <button onClick={onClose} className="text-red-500 text-xl">X</button>
//         </div>
//         <div className="mt-4">
//           {content.body}
//         </div>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;



import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-7xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-red-500 text-xl">X</button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

