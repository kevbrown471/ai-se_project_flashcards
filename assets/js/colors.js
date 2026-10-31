const colorNames = {
  "#64d583": "green",
  "#91a8f9": "blue",
  "#ee92d7": "pink",
  "#aa8ef0": "purple",
  "#ee955e": "orange",
  "#f5d770": "yellow",
};

export function stringToHex(colorName) {
  const colors = {
    green: "#64D583",
    blue: "#91A8F9",
    pink: "#EE92D7",
    purple: "#AA8EF0",
    orange: "#EE955E",
    yellow: "#F5D770",
  };
  return colors[colorName.toLowerCase()];
}

export function hexToString(hex) {
  return colorNames[hex.toLowerCase()];
}

export function removeColorClasses(element, prefix) {
  [...element.classList]
    .filter((className) => className.startsWith(prefix))
    .forEach((className) => element.classList.remove(className));
}
