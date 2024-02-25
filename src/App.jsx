// DEV COMPONENTS
import { useAtomValue } from "jotai";
import { useState, useEffect } from "react";

// AUDIO ASSETS
import OldBell from "@audio/old-church-bell.mp3";
import Ticking from "@audio/ticking-clock.mp3";

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

  // VARIOUS DEPENDENCY STATES
  const [showAlarmWarrning, setShowAlarmWarrning] = useState(false);
  const [sound, setSound] = useState(false);

  // SETTING TIME INTERVALS AND SOUND PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(time.getSeconds() * 6);
      setMinute(time.getMinutes() * 6);
      setHour(time.getHours() * 30 + Math.round(minute / 12));
      setDay(time.getDay());
      setDate(time.getDate());
    }, 1000);

    sound && document.querySelector("#clockTicking").play();
    !sound && document.querySelector("#clockTicking").pause();

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
      <Navbar sound={sound} setSound={setSound} />
      <main className={darkMode ? "dark" : null}>
        <ClockDial
          showAlarmWarrning={showAlarmWarrning}
          hour={hour}
          minute={minute}
          seconds={seconds}
          day={day}
          date={date}
        />

        <AlarmSettings />
      </main>
      <audio id="bell" src={OldBell}></audio>
      <audio id="clockTicking" src={Ticking}></audio>
    </>
  );
}

export default App;
