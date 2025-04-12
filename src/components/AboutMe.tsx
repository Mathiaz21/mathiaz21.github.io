
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto mb-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">About me</h2>
      <div className="bg-white/30 p-6 rounded-lg shadow-sm">
        <p className="text-center">
          Jack of all trades, I seem to have an ability to learn random unrelated skills: 
          guitar, bouldering, skateboard, running, 3D modeling, video editing, cooking 
          and the list goes on. Once I have become mid at something it is enough for me 
          and I just go to the next.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
