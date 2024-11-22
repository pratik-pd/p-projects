let countdownInterval;

function startCountdown() {
  const dateInput = document.getElementById("datetime").value;
  const targetDate = new Date(dateInput).getTime();

  if (isNaN(targetDate)) {
    alert("Please select a valid date and time.");
    return;
  }

  clearInterval(countdownInterval); // Clear any existing interval

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      alert("Countdown Complete!");
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);
}
