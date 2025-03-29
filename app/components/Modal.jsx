import React from 'react';
import { assets } from '@/assets/assets'
import Image from "next/image";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    //className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm"
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-7xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button onClick={onClose}> <Image src={assets.close_black} alt = "" className='w-5 cursor-pointer'/> </button>

          
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

