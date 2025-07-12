import React from "react";

const profile_pic_address: string = "./src/images/photo_cv.jpg"

const Header: React.FC = () => {

  const shortDescription: string = "Developer and software engineering student"
  return (
    <header className="flex flex-row items-center justify-center gap-8 pt-12 px-4">
      <div className="w-36 h-36 rounded-full overflow-hidden shrink-0">
        <img
          src={profile_pic_address}
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">Hi I'm <span className="text-3xl">Mathias GILBERT</span></h1>
        <p className="max-w-md">
          {shortDescription}
        </p>
      </div>
    </header>
  );
};

export default Header;
