// DEV COMPONENTS
import { useAtomValue } from "jotai";

// COMPONENTS
import Navbar from "@components/Navbar.jsx";
import AlarmSettings from "@components/AlarmSettings.jsx";
import ClockDial from "@components/ClockDial.jsx";

// GLOBAL STATE
import { darkModeStore } from "@jotai/store.js";

function App() {
  // GLOBAL STATE VARIABLES
  const darkMode = useAtomValue(darkModeStore);

  return (
    <>
      <Navbar />
      <main className={darkMode ? "dark" : null}>
        <ClockDial />
      </main>
    </>
  );
}

export default App;
