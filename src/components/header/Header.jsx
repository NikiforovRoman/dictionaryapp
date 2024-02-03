import { React, useEffect } from "react";
import { FaBookOpen } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Switch from "react-switch";
import s from "./header.module.scss";
import Select from "./select/Select";

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
        <Select
          defaultValue={'Font style'}
          options={[
            {value: 'Times New Roman', label: 'Times New Roman'},
            {value: 'Roboto', label: 'Roboto'},
            {value: 'Open Sans', label: 'Open Sans'} 
          ]} 
        />
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
