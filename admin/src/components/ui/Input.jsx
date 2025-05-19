import React from "react";

export default function Input({ id, type = "text", value, onChange, required }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    />
  );
}
