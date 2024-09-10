import React from "react";
import Header from "./components/ui/header";
import CoolCard from "./components/ui/coolcard";
import ProjectsList from "./components/ui/aboutme";
import AboutMe from "./components/ui/aboutme";
import Footer from "./components/ui/footer";

export default function Page() {
  return (
    <div
      style={{
        backgroundColor: "#121d32",
      }}
    >
      <Header />
      <CoolCard />
      <AboutMe />
      <Footer />
    </div>
  );
}
