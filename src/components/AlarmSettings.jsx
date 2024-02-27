//STYLES
import "@styles/alarm-settings.scss";

// GLOBAL STATES
import { darkModeStore } from "@jotai/store.js";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

//DEV COMPONENTS
import { useState } from "react";

const AlarmSettings = ({
  setAlarm,
  setInputedHours,
  setInputedMinutes,
  inputedMinutes,
  inputedHours,
  alarm,
  alarmTime,
  time,
  setShowAlarmWarrning,
}) => {
  // GLOBAL STATE VARIABLES
  const darkMode = useAtomValue(darkModeStore);

  // STATE VARIABLES
  const [hourInp, setHourInp] = useState("");
  const [minuteInp, setMinuteInp] = useState("");
  const [showHourModal, setShowHourModal] = useState(false);
  const [showMinuteModal, setShowMinuteModal] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  return (
    <>
      <section className={darkMode ? "Alarm-settings dark" : "Alarm-settings"}>
        <h1>Alarm settings</h1>
        <form>
          <div className="inputs">
            <input
              type="text"
              name="hourInp"
              disabled
              placeholder="hh"
            />
            <input
              type="text"
              name="minuteInp"
              disabled
              placeholder="mm"
            />
          </div>
          {inputError && <p className="error">{inputErrorMessage}</p>}
          <button type="submit">Set Alarm</button>
        </form>
      </section>
    </>
  );
};

export default AlarmSettings;
