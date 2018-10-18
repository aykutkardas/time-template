const timeTemplate = (sn, { format, template } = {}) => {
  let seconds = sn;

  if (typeof second !== "number") {
    seconds = parseInt(seconds, 0);
  }
  if (Number.isNaN(seconds)) {
    seconds = 0;
  }

  const ruler = {
    Y: 31556926,
    M: 2629743.83,
    W: 604800,
    D: 86400,
    h: 3600,
    m: 60,
    s: 1
  };

  let selectedFormat;

  if (!format) {
    selectedFormat = ["Y", "M", "W", "D", "h", "m", "s"];
  } else {
    selectedFormat = format.split(":");
  }

  const timeObj = {};

  let timeString = template;
  Object.keys(ruler).forEach(type => {
    if (selectedFormat.indexOf(type) > -1) {
      timeObj[type] = Math.floor(seconds / ruler[type]);
      if (template && typeof template === "string") {
        timeString = timeString.replace("{" + type + "}", timeObj[type]);
      }
      seconds %= ruler[type];
    }
  });

  if (timeString) {
    return timeString;
  }

  return timeObj;
};

export default timeTemplate;
