"use client";
import React from "react";
import devportfolio from "./icons/devportfolio.png"; // Adjust the path as necessary
import styles from "./styles/CoolCard.module.css"; // Assuming you're using CSS Modules
import Image from "next/image";

export default function CoolCard() {
  const handleClick = () => {
    // Handle the click event here
    //go to linke www.github.com/samuelPoulis
    window.open("https://www.github.com/samuelPoulis", "_blank");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        backgroundColor: "#121d32",
        padding: "2em",
      }}
    >
      <button
        onClick={handleClick}
        className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-red-500 px-8 py-2 text-neutral-50"
      >
        <span className="relative z-10">View GitHub</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        </span>
      </button>
      <Image
        style={{
          maxWidth: "800px",
          maxHeight: "800px",
        }}
        src={devportfolio}
        alt="Developer Portfolio"
        className={styles.image}
      />
    </div>
  );
}
