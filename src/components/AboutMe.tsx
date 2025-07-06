
import React from "react";

const AboutMe: React.FC = () => {

  const myDescription: string = "Appart from software development and datascience, I enjoy trail running, skiing, bouldering and am learning to pilot gliders."
  return (
    <section className="max-w-2xl mx-auto mb-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">About me</h2>
      <div className="bg-white/30 p-6 rounded-lg shadow-sm">
        <p className="text-center">
          {myDescription}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
