// Set the countdown date
const countdownDate = new Date('2024-08-08T23:59:59').getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);

  // If the countdown is over, stop the countdown
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown-container').innerHTML = '<div class="timer">00</div><div class="spacer">:</div><div class="timer">00</div><div class="spacer">:</div><div class="timer">00</div><div class="spacer">:</div><div class="timer">00</div>';
  }
}

// Function to format time values (add leading zero if needed)
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}