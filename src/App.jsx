// DEV COMPONENTS
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useState } from "react";

// COMPONENTS
import Navbar from "@components/Navbar.jsx";
import AlarmSettings from "@components/AlarmSettings.jsx";
import ClockDial from "@components/ClockDial.jsx";

// GLOBAL STATE
import { darkModeStore, fontStore } from "@jotai/store.js";

function App() {
  // GLOBAL STATE VARIABLES
  const darkMode = useAtomValue(darkModeStore);
  const fontStyle = useAtomValue(fontStore);

  // TIME VARIABLES
  const time = new Date();
  const [hour, setHour] = useState(time.getHours());
  const [minute, setMinute] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());
  const [day, setDay] = useState(time.getDay());
  const [date, setDate] = useState(time.getDate());

  // SETTING TIME INTERVALS
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(time.getSeconds() * 6);
      setMinute(time.getMinutes() * 6);
      setHour(time.getHours() * 30 + Math.round(minute / 12));
      setDay(time.getDay());
      setDate(time.getDate());
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  // UPGRADING FONT STYLE
  useEffect(() => {
    document.documentElement.style.fontFamily = fontStyle;
  }, [fontStyle]);

  // UPGRADING BACKGROUND COLOR
  useEffect(() => {
    darkMode
      ? (document.documentElement.style.backgroundColor = "black")
      : (document.documentElement.style.backgroundColor = "white");
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <main className={darkMode ? "dark" : null}>
        <ClockDial
          hour={hour}
          minute={minute}
          seconds={seconds}
          day={day}
          date={date}
        />
      </main>
    </>
  );
}

export default App;
