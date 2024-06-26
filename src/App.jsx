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

// HELPER FUNCTIONS
import { backgroundColor, upgradeFontStyle } from "@helpers/helpers";

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
  const [inputedHours, setInputedHours] = useState("");
  const [inputedMinutes, setInputedMinutes] = useState("");
  const [alarm, setAlarm] = useState(false);
  const [alarmTimeI, setAlarmTimeI] = useState("");

  // STATE VARIABLES
  const [showHourModal, setShowHourModal] = useState(false);
  const [showMinuteModal, setShowMinuteModal] = useState(false);
  const [fontModal, setFontModal] = useState(false);

  // ALARM INPUT VARIABLE
  const alarmToCheck = new Date();
  alarmToCheck.setHours(inputedHours && inputedHours.slice(0, 2));
  alarmToCheck.setMinutes(inputedMinutes && inputedMinutes.slice(0, 2));
  alarmToCheck.setSeconds(0);
  alarmToCheck.setMilliseconds(0);

  // ALARM FUNCTIONALITY
  useEffect(() => {
    if (alarm) {
      if (alarmToCheck.getTime() < time.getTime()) {
        alarmToCheck.setTime(alarmToCheck.getTime() + 86400000);
      }

      let alarmTime = alarmToCheck.getTime() - time.getTime();
      setAlarmTimeI(alarmToCheck.getTime());

      if (alarmTime > 86338001 && alarmTime < 86398000) {
        document.querySelector("#bell").play();
        setShowAlarmWarrning(true);
      } else {
        setShowAlarmWarrning(false);
      }
    }
  }, [seconds]);

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

    return () => {
      clearInterval(interval);
      document.querySelector("#clockTicking").pause();
    };
  }, [seconds]);

  // UPGRADING FONT STYLE
  useEffect(() => {
    upgradeFontStyle(fontStyle);
  }, [fontStyle]);

  // UPGRADING BACKGROUND COLOR
  useEffect(() => {
    backgroundColor(darkMode);
  }, [darkMode]);

  return (
    <div
      className="doc-wrapper"
      onClick={() => {
        setShowHourModal(false);
        setShowMinuteModal(false);
        setFontModal(false);
      }}
    >
      <Navbar
        sound={sound}
        setSound={setSound}
        fontModal={fontModal}
        setFontModal={setFontModal}
      />
      <main className={darkMode ? "dark" : null}>
        <ClockDial
          showAlarmWarrning={showAlarmWarrning}
          hour={hour}
          minute={minute}
          seconds={seconds}
          day={day}
          date={date}
        />

        <AlarmSettings
          setShowMinuteModal={setShowMinuteModal}
          showMinuteModal={showMinuteModal}
          setShowHourModal={setShowHourModal}
          showHourModal={showHourModal}
          setInputedHours={setInputedHours}
          setAlarm={setAlarm}
          setInputedMinutes={setInputedMinutes}
          inputedHours={inputedHours}
          inputedMinutes={inputedMinutes}
          alarm={alarm}
          alarmTime={alarmTimeI}
          time={time}
          setShowAlarmWarrning={setShowAlarmWarrning}
        />
      </main>
      <audio id="bell" src={OldBell}></audio>
      <audio id="clockTicking" src={Ticking}></audio>
    </div>
  );
}

export default App;
