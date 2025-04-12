
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center justify-center gap-8 pt-12 px-4">
      <div className="w-36 h-36 rounded-full overflow-hidden shrink-0">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">Hi I'm <span className="text-3xl">Mathias GILBERT</span></h1>
        <p className="max-w-md">
          A curious to learn developer and engineering student
        </p>
      </div>
    </header>
  );
};

export default Header;
