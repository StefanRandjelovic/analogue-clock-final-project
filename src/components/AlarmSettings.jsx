// GLOBAL STATES
import { darkModeStore } from "@jotai/store.js";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

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

  return (
    <>
      <section
        className={darkMode ? "Alarm-settings dark" : "Alarm-settings"}
      ></section>
    </>
  );
};

export default AlarmSettings;
