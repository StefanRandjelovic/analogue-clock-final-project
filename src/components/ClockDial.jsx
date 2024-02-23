// DEV COMPONENTS
import { useAtomValue } from "jotai";

// GLOBAL STATES
import { darkModeStore } from "@jotai/store.js";

// STYLES
import "@styles/clock-dial.scss";

const ClockDial = () => {
  // GLOBAL STATES
  const darkMode = useAtomValue(darkModeStore);

  return (
    <div className={darkMode ? "mainBody dark" : "mainBody"}>
      <div className="concentric"></div>
      <div className="hourHandWrap">
        <div className="hourHand">
          <div className="hourH"></div>
        </div>
      </div>

      <div className="minuteHandWrap">
        <div className="minuteHand">
          <div className="minuteH"></div>
        </div>
      </div>

      <div className="secondHandWrap">
        <div className="secondHand">
          <div className="secondH"></div>
        </div>
      </div>
    </div>
  );
};

export default ClockDial;
