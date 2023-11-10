import React from "react";

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      
      className="rounded-md bg-primary py-3 px-7 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
    >
      {text}
    </button>
  );
}
