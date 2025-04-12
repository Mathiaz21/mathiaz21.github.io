
import React from "react";
import Header from "@/components/Header";
import ContactLinks from "@/components/ContactLinks";
import Timeline from "@/components/Timeline";
import AboutMe from "@/components/AboutMe";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <ContactLinks />
      <Timeline />
      <AboutMe />
    </div>
  );
};

export default Index;
