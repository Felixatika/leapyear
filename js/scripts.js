function leapyear() {
  var year = parseInt(document.getElementById("year").value);
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    document.getElementById("result").innerHTML = year + " is a leap year";
  } else {
    document.getElementById("result").innerHTML = year + " is NOT a leap year";
  }
  if (year != [0 - 9] || year > 2020) {
    document.getElementById("result").innerHTML = "Please Enter a valid year";
  } else {
    document.getElementById("result").innerHTML =
      "Please Enter numeric values only";
  }
}
