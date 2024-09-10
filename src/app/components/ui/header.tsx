import { Content } from "next/font/google";
import { Audiowide } from "next/font/google";

// Configure the font
const audiowide = Audiowide({
  subsets: ["latin"], // Specify the subsets you need
  weight: "400", // Specify the weight if available
  display: "swap", // Optional: control font display strategy
});
export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2em",
        backgroundColor: "#151d33", // Optional: add a background color
      }}
    >
      <h1
        style={{
          fontSize: "2em",
          margin: "0.5em 0",
          fontWeight: "bold",
          color: "white",
          justifyContent: "left",
          padding: "0 1em",
        }}
        className={audiowide.className}
      >
        SAMUEL POULIS
      </h1>
      <p
        style={{
          color: "white",
          margin: "0.5em 0",
          justifyContent: "right",
          padding: "0 1em",
        }}
      >
        Full Stack Developer
      </p>
    </header>
  );
}
