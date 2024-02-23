// DEV COMPONENTS
import { useAtom } from "jotai";

// SVG
import LightIcon from "@images/light_mode.svg";
import DarkIcon from "@images/dark_mode.svg";

// GLOBAL STATE
import { darkModeStore } from "@jotai/store.js";

const Navbar = () => {
    // GLOBAL STATE VARIABLES
  const [darkMode, setDarkMode] = useAtom(darkModeStore);

  return (
  <nav className={darkMode ? "dark" : null} >
     <div className="leftSide">
     <img
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Toggle light mode" : "Toggle dark mode"}
          className="darkModeBtn"
          src={darkMode ? DarkIcon : LightIcon}
          alt="Toggle Dark/Light Mode"
        />
     </div>
  </nav>
  )
};

export default Navbar;
