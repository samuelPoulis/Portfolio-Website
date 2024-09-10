"use client";
import { Audiowide } from "next/font/google";
import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const orangebold = {
  color: "#ff4d4d",
  fontWeight: "bold",
};

export default function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="flex flex-col items-center"
      style={{ backgroundColor: "#121d32" }}
    >
      <button
        className={`text-red-400 font-bold flex text-2xl p-4 bg-[#121d32] rounded-lg hover:bg-gray-700`}
        style={{ alignItems: "center" }}
        onClick={toggleDropdown}
      >
        About Me{"  "}
        <ChevronUpIcon
          className={`h-7 w-7 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 p-4 text-white text-center bg-[#1e2a3b] rounded-lg transition-all duration-300">
          <p>
            Hi! My name is Samuel, I am a passionate developer with a keen
            interest in building applications that solve real-world problems. I
            enjoy working with modern technologies like{" "}
            <strong style={orangebold}>Next.js</strong>,{" "}
            <strong style={orangebold}>TypeScript</strong>, and{" "}
            <strong style={orangebold}>Tailwind CSS</strong> to create sleek and
            responsive user experiences. I am currently pursuing my bachelors
            degree in computer science, and in my free time, I like exploring
            tech related to artificial intelligence and business solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
