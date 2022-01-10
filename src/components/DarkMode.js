import "../DarkMode.css"
import React from 'react';

function setDark(){
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
}

function setLight(){
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// 5
const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};


function DarkMode(props) {
    return (
        <div className="toggle-theme-wrapper">
          <label className="toggle-theme" htmlFor="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                onChange = {toggleTheme}
                defaultChecked={defaultDark}
            />
            <div className="slider round"></div>
          </label>
        </div>
      );
}

export default DarkMode;