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

export const switchStatus = (status) => {
  switch (status) {
    case "2":
      "perekur";
      break;
    case "3":
      "call chef";
      break;
    case "4":
      "technique problem";
      break;
    case "5":
      "dinner";
      break;
    case "6":
      "toilet";
      break;
    case "7":
      "learing";
      break;
    default:
      "";
  }
};

export const fetchAllDivisions = async (setError, setData) => {
  try {
    const response = await fetch(
      "http://192.168.61.169:2004/api/v1/division/all"
    );
    if (!response.ok) {
      throw new Error("Ошибка при загрузке");
    }

    const result = await response.json();
    setData(result);
  } catch (error) {
    setError(error);
  }
};

export function formatTime(inputValue) {
  inputValue = inputValue.replace(":", "");

  const outputTime = inputValue.slice(0, 2) + ":" + inputValue.slice(2);

  return outputTime.slice(0, 5);
}

export const fetchSingleDivisionData = async (targetDivisionId, setWorkers) => {
  try {
    const response = await fetch(
      `http://192.168.61.169:2004/api/v1/division/one/${targetDivisionId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    setWorkers(result);
  } catch (error) {
    // setError(error);
  } finally {
    // setLoading(false);
  }
};
