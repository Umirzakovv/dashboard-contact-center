export function setSpaceEveryNFromEnd(inputString, n) {
  if (n <= 0) {
    return inputString;
  }

  const length = inputString.length;
  let result = "";
  if (inputString === "undefined") {
    return "Загрузка...";
  } else {
    for (let i = 0; i < length; i++) {
      result += inputString[i];
      if ((length - i - 1) % n === 0 && i !== length - 1) {
        result += " ";
      }
    }

    return result;
  }
}

export const formatSecondsToTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = (seconds % 60).toFixed(3);

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(6, "0")
    .slice(0, 2)}`;

  return formattedTime;
};

export const 