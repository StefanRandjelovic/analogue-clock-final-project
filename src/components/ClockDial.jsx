// DEV COMPONENTS
import { useAtomValue } from "jotai";

// GLOBAL STATES
import { darkModeStore } from "@jotai/store.js";

// STYLES
import "@styles/clock-dial.scss";

// HELPERS AND GETTERS
import { getDay } from "@helpers/helpers";

const ClockDial = ({ hour, minute, seconds, day, date }) => {
  // GLOBAL STATES
  const darkMode = useAtomValue(darkModeStore);

  return (
    <div className={darkMode ? "mainBody dark" : "mainBody"}>
      <div className="concentric"></div>
      <div
        className="hourHandWrap"
        style={{
          transform: `rotate(${hour}deg)`,
        }}
      >
        <div className="hourHand">
          <div className="hourH"></div>
        </div>
      </div>

      <div
        className="minuteHandWrap"
        style={{
          transform: `rotate(${minute}deg)`,
        }}
      >
        <div className="minuteHand">
          <div className="minuteH"></div>
        </div>
      </div>

      <div
        className="secondHandWrap"
        style={{
          transform: `rotate(${seconds}deg)`,
        }}
      >
        <div className="secondHand">
          <div className="secondH"></div>
        </div>
      </div>

      <div className="dayDate">
        <div
          className="day"
          style={
            darkMode
              ? { color: `${day === 0 ? "red" : "orange"}` }
              : { color: `${day === 0 ? "red" : "black"}` }
          }
        >
          {getDay(day)}
        </div>
        <div className="date">{date}</div>
      </div>

      <div className="centralPoint"></div>
      <div className="hour hour1">1</div>
      <div className="hour hour2">2</div>
      <div className="hour hour3">3</div>
      <div className="hour hour4">4</div>
      <div className="hour hour5">5</div>
      <div className="hour hour6">6</div>
      <div className="hour hour7">7</div>
      <div className="hour hour8">8</div>
      <div className="hour hour9">9</div>
      <div className="hour hour10">10</div>
      <div className="hour hour11">11</div>
      <div className="hour hour12">12</div>
    </div>
  );
};

export default ClockDial;
