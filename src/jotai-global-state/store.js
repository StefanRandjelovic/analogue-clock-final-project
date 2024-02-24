// DEV DEPENDENCY
import {atomWithStorage} from 'jotai/utils'

// GLOBAL VARIABLES
const darkModeStore = atomWithStorage("darkMode", false);

const fontStore = atomWithStorage("fontFamily", "Aldrich");

export {darkModeStore, fontStore}