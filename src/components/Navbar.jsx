// DEV COMPONENTS
import { useAtom } from "jotai";
import { useState } from "react";

// STYLES
import "@styles/navbar.scss";

// SVG
import LightIcon from "@images/light_mode.svg";
import DarkIcon from "@images/dark_mode.svg";
import ChevronUp from "@images/chevron-up.svg";
import ChevronDown from "@images/chevron-down.svg";
import Speaker from "@images/speaker.svg";
import SpeakerMute from "@images/speaker-mute.svg";

// GLOBAL STATE
import { darkModeStore, fontStore } from "@jotai/store.js";

const Navbar = ({ sound, setSound, setFontModal, fontModal }) => {
  // GLOBAL STATE VARIABLES
  const [darkMode, setDarkMode] = useAtom(darkModeStore);
  const [fontStyle, setFontStyle] = useAtom(fontStore);

  return (
    <nav className={darkMode ? "dark" : null}>
      <div className="leftSide">
        <img
          onClick={(event) => {
            event.stopPropagation();
            setDarkMode(!darkMode);
          }}
          title={darkMode ? "Toggle light mode" : "Toggle dark mode"}
          className="darkModeBtn"
          src={darkMode ? DarkIcon : LightIcon}
          alt="Toggle Dark/Light Mode"
        />
        <div className="selectFontWrapper">
          <button
            onClick={(event) => {
              event.stopPropagation();
              setFontModal(!fontModal);
            }}
            title="Change font style"
            className="font"
          >
            {fontStyle} <img src={fontModal ? ChevronUp : ChevronDown} alt="" />{" "}
          </button>
          <div
            className="fonts"
            style={
              fontModal
                ? { opacity: "1", visibility: "visible" }
                : { opacity: "0", visibility: "hidden" }
            }
          >
            <ul>
              <li
                style={{ fontFamily: "Aldrich, sans-serif" }}
                onClick={(event) => {
                  event.stopPropagation();
                  setFontStyle("Aldrich");
                  setFontModal(!fontModal);
                }}
              >
                Aldrich
              </li>
              <li
                style={{ fontFamily: "Libre Baskerville, serif" }}
                onClick={(event) => {
                  event.stopPropagation();
                  setFontStyle("Libre Baskerville");
                  setFontModal(!fontModal);
                }}
              >
                Libre Baskerville
              </li>
              <li
                style={{
                  fontFamily: "Stint Ultra Condensed, serif",
                  letterSpacing: "3px",
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  setFontStyle("Stint Ultra Condensed");
                  setFontModal(!fontModal);
                }}
              >
                Stint Ultra Condensed
              </li>
              <li
                style={{
                  fontFamily: "Edu SA Beginner, cursive",
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  setFontStyle("Edu SA Beginner");
                  setFontModal(!fontModal);
                }}
              >
                Edu SA Beginner
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="audioPlayer"
        onClick={(event) => {
          event.stopPropagation();
          setSound(!sound);
        }}
        src={sound ? Speaker : SpeakerMute}
        alt="Turn clock ticking on or off"
        title={sound ? "Turn audio off" : "Turn audio on"}
      />
    </nav>
  );
};

export default Navbar;
