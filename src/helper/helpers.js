// DAY RENDERING CALCULATION - ClockDial.jsx
const getDay = (day) => {
  switch (day) {
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    case 0:
      return "Sun";
  }
};

// ALARM TIME CALCULATION - AlarmSettings.jsx
const getAlarm = (alarmTime, time) => {
  const alarmGoOff = alarmTime - time.getTime();
  const hour = Math.floor(((alarmGoOff + 2000) / 3600000) % 24);
  const min = Math.floor(((alarmGoOff + 2000) / 60000) % 60);
  const sec = Math.floor(((alarmGoOff + 2000) / 1000) % 60);
  return `${hour != 0 ? `${hour}h:` : ""}${min != 0 ? `${min}m:` : ""}${sec}s`;
};

// ALARM TIME INPUT - AlarmSettings.jsx
const handleTimeInput = (
  event,
  setInputError,
  setInputErrorMessage,
  alarmRepo,
  setAlarmRepo,
  setShowAlarmWarrning,
  setInputedHours,
  setInputedMinutes,
  setAlarm
) => {
  event.preventDefault();
  if (
    event.target.hourInp.value !== "" &&
    event.target.minuteInp.value === ""
  ) {
    setInputError(true);
    event.target.minuteInp.setAttribute("id", "input-error");
    setInputErrorMessage("Enter minute value.");
    return;
  } else if (
    event.target.hourInp.value === "" &&
    event.target.minuteInp.value !== ""
  ) {
    setInputError(true);
    event.target.hourInp.setAttribute("id", "input-error");
    setInputErrorMessage("Enter hour value.");
    return;
  } else if (
    event.target.hourInp.value === "" &&
    event.target.minuteInp.value === ""
  ) {
    setInputError(true);
    event.target.hourInp.setAttribute("id", "input-error");
    event.target.minuteInp.setAttribute("id", "input-error");
    setInputErrorMessage("Enter hour and minute values.");
    return;
  }
  if (alarmRepo) {
    if (alarmRepo.length < 5) {
      setAlarmRepo([
        ...alarmRepo,
        {
          hour: event.target.hourInp.value,
          minute: event.target.minuteInp.value,
        },
      ]);
    } else if (alarmRepo.length == 5) {
      setAlarmRepo([
        ...alarmRepo.splice(1, 5),
        {
          hour: event.target.hourInp.value,
          minute: event.target.minuteInp.value,
        },
      ]);
    }
    event.target.hourInp.removeAttribute("id");
    event.target.minuteInp.removeAttribute("id");
    setShowAlarmWarrning(false);
    setInputError(false);
    setInputedHours(event.target.hourInp.value);
    setInputedMinutes(event.target.minuteInp.value);
    setAlarm(true);
  }
};

export { getDay, getAlarm, handleTimeInput };
