//STYLES
import "@styles/alarm-settings.scss";

// GLOBAL STATES
import { darkModeStore, alarmStore } from "@jotai/store.js";

// DEV DEPENDENCIES
import { useAtomValue, useAtom } from "jotai";

//DEV COMPONENTS
import { useState, useEffect } from "react";

// SVG
import ChevronUp from "@images/chevron-up.svg";
import ChevronDown from "@images/chevron-down.svg";

// HELPERS
import { hours, minutes } from "@helpers/hours-and-minutes";
import { getAlarm, handleTimeInput } from "@helpers/helpers";

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
  setShowMinuteModal,
  showMinuteModal,
  setShowHourModal,
  showHourModal,
}) => {
  // GLOBAL STATE VARIABLES
  const darkMode = useAtomValue(darkModeStore);
  const [alarmRepo, setAlarmRepo] = useAtom(alarmStore);

  // STATE VARIABLES
  const [hourInp, setHourInp] = useState("");
  const [minuteInp, setMinuteInp] = useState("");
  const [inputError, setInputError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  // SETTING RENDERING OPTIONS
  useEffect(() => {
    if (hourInp === "" && minuteInp !== "") {
      setInputErrorMessage("Enter hour value.");
    } else if (hourInp !== "" && minuteInp === "") {
      setInputErrorMessage("Enter minute value.");
    } else if (hourInp !== "" && minuteInp !== "") {
      setInputError(false);
    }
  }, [hourInp, minuteInp]);

  return (
    <>
      <section className={darkMode ? "Alarm-settings dark" : "Alarm-settings"}>
        <h1>Alarm settings</h1>
        <form
          onSubmit={() =>
            handleTimeInput(
              event,
              setInputError,
              setInputErrorMessage,
              alarmRepo,
              setAlarmRepo,
              setShowAlarmWarrning,
              setInputedHours,
              setInputedMinutes,
              setAlarm
            )
          }
        >
          <div className="inputs">
            <input
              type="text"
              name="hourInp"
              disabled
              placeholder="hh"
              value={hourInp ? `${hourInp}h` : ""}
            />
            <input
              type="text"
              name="minuteInp"
              disabled
              placeholder="mm"
              value={minuteInp ? `${minuteInp}m` : ""}
            />
          </div>
          {inputError && <p className="error">{inputErrorMessage}</p>}
          <button type="submit">Set Alarm</button>
        </form>
        <div className="inputTimeContainer">
          <div className="hoursWrapper">
            <h2
              onClick={(event) => {
                event.stopPropagation();
                setShowHourModal(!showHourModal);
              }}
            >
              Select hours
              <img src={showHourModal ? ChevronUp : ChevronDown} />
            </h2>
            <div className={showHourModal ? "hoursVisible" : "hours"}>
              {hours.map((hour) => (
                <p
                  onClick={(event) => {
                    event.stopPropagation();
                    setHourInp(hour);
                    setShowHourModal(!showHourModal);
                    document
                      .getElementsByName("hourInp")[0]
                      .removeAttribute("id");
                  }}
                  key={`h${hour}`}
                  id={`h${hour}`}
                >
                  {hour}
                </p>
              ))}
            </div>
          </div>
          <div className="minutesWrapper">
            <h2
              onClick={(event) => {
                event.stopPropagation();
                setShowMinuteModal(!showMinuteModal);
              }}
            >
              Select Minutes
              <img src={showMinuteModal ? ChevronUp : ChevronDown} />
            </h2>
            <div className={showMinuteModal ? "minutesVisible" : "minutes"}>
              {minutes.map((minute) => (
                <p
                  onClick={(event) => {
                    event.stopPropagation();
                    setMinuteInp(minute);
                    setShowMinuteModal(!showMinuteModal);
                    document
                      .getElementsByName("minuteInp")[0]
                      .removeAttribute("id");
                  }}
                  key={`m${minute}`}
                  id={`m${minute}`}
                >
                  {minute}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="prevAlarmDiv">
          <h3>
            {alarmRepo.length > 1
              ? "Previous alarm times:"
              : "Previous alarm time:"}
          </h3>
          {alarmRepo.length > 0 &&
            alarmRepo.map((time) => (
              <p key={crypto.randomUUID()}>
                {time.hour} : {time.minute}
              </p>
            ))}
          {alarmRepo.length > 0 && (
            <button
              className={darkMode ? "dark" : null}
              onClick={() => setAlarmRepo([])}
            >
              {alarmRepo.length === 1 ? "Clear time" : "Clear all times"}
            </button>
          )}
        </div>
        {alarm && (
          <div className="alarmInfo">
            <p>
              Alarm is set to: {inputedHours}:{inputedMinutes}
            </p>
            <p>Alarm will go off in: {getAlarm(alarmTime, time)} </p>
            <button
              onClick={() => {
                setAlarm(false);
                setHourInp("");
                setMinuteInp("");
                setShowAlarmWarrning(false);
              }}
            >
              Stop Alarm
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default AlarmSettings;
