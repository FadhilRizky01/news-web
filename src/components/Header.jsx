import { useState } from "react";

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className=" flex">
      <div className="flex justify-center w-full mt-2">
        <h3 className="font-serif">NEWS WEBSITE</h3>
      </div>
      <div className="mr-8 mt-2">
        <button
          type="button"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          {darkTheme ? "⚡" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Header;
