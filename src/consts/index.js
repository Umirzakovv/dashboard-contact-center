export function setSpaceEveryThirdPlace(string) {
    let result = "";
  if (string === "undefined") {
    return "Загрузка...";
  } else {
    for (let i = string?.length - 1; i >= 0; i--) {
      if ((i + 1) % 3 === 0 && i !== string.length - 1) {
        result += " ";
      }
      result += string[i];
    }
    return result;
  }
}
