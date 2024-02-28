// DEV DEPENDENCY
import { atomWithStorage } from "jotai/utils";

// GLOBAL VARIABLES
const darkModeStore = atomWithStorage("darkMode", false);

const fontStore = atomWithStorage("fontFamily", "Aldrich");

const alarmStore = atomWithStorage("alarmTimes", []);

export { darkModeStore, fontStore, alarmStore };
