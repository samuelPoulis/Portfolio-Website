export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2em",
        backgroundColor: "#121d32",
      }}
    >
      <p
        style={{
          color: "white",
          margin: "0.5em 0",
          justifyContent: "left",
          padding: "0 3em",
        }}
      >
        © 2024 Samuel Poulis
      </p>
      <p
        style={{
          color: "white",
          margin: "0.5em 0",
          justifyContent: "right",
          padding: "0 3em",
        }}
      >
        Built with Next.js
      </p>
    </footer>
  );
}
