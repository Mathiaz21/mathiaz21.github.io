
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center pt-12">
      <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold">Hi I'm <span className="text-3xl">Mathias GILBERT</span></h1>
      <p className="text-center max-w-md">
        A curious to learn developer and engineering student
      </p>
    </header>
  );
};

export default Header;
