function displayUtcTime() {
  const time = new Date();

  const hours = time.getUTCHours().toString().padStart(2, "0");
  const minutes = time.getUTCMinutes().toString().padStart(2, "0");
  const seconds = time.getUTCSeconds().toString().padStart(2, "0");

  const utcTime = `${hours}:${minutes}:${seconds}`;

  document.getElementById("utcTime").textContent = utcTime;

  //   setInterval(displayUtcTime, 1000);
}

window.onload = displayUtcTime;
