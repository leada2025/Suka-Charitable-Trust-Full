import React from "react";

export default function Button({ children, type = "button", className = "" }) {
  return (
    <button
      type={type}
      className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
