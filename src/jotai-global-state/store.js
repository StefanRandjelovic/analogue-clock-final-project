// DEV DEPENDENCY
import {atomWithStorage} from 'jotai/utils'

// GLOBAL VARIABLES
const darkModeStore = atomWithStorage("darkMode", false);

export {darkModeStore}