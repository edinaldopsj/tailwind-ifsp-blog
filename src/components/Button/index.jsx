import React from "react";

export default function Button(props) {
  const { label = "Enviar", type = "button", onClick } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 border-2 hover:bg-gray-200"
    >
      {label}
    </button>
  );
}
