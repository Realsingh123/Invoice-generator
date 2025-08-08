import React from "react";

export default function AddButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg 
                 hover:bg-blue-700 hover:scale-105 active:scale-95 
                 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      {children}
    </button>
  );
}
