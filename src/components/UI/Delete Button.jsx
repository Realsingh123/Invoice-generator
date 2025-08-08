import React from "react";

export default function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-red-500 hover:text-red-700 hover:scale-110 active:scale-90 
                 transition-all duration-300 ease-in-out"
    >
      ✕
    </button>
  );
}
