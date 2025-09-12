"use client";

import { ReactNode } from "react";

interface ModalProps {
  id: string;
}

export default function Modal({  id }: ModalProps) {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
       
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold text-gray-800">{id}</h2>
      
          <button
          
            className="text-gray-500 hover:text-gray-800 transition"
          >
            ✖
          </button>
        </div>


        {/* Footer */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
           
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 transition"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
