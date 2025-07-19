
import React from "react";
import Header from "@/components/Header";
import ContactLinks from "@/components/ContactLinks";
import TimelinesContainer from "@/components/TimelinesContainer";
import AboutMe from "@/components/AboutMe";
import Races from "@/components/Races"

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-20">
        <Header />
        <ContactLinks />
        <TimelinesContainer />
        <AboutMe />
      </div>
    </div>
  );
};

export default Index;
