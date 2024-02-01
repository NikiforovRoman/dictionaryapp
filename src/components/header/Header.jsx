import { React, useEffect } from "react";
import { FaBookOpen } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Switch from "react-switch";
import s from "./header.module.scss";

const Header = ({theme, setTheme}) => {
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  });

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <FaBookOpen
          size={45}
          color={theme === "light" ? "#808080" : "#A445ED"}
        />
      </div>
      <div className={s.header__group}>
        <select className={s.header__select}>
          <option>Serif</option>
          <option>Sans-serif</option>
        </select>
        <div className={s.header__theme}>
          <Switch
            onChange={toggleTheme}
            checked={theme === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#A445ED"
            offColor="#808080"
          />
          {theme === "light" ? (
            <IoSunny size={40} color={"#808080"} />
          ) : (
            <IoMoon size={40} color={"#A445ED"} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
