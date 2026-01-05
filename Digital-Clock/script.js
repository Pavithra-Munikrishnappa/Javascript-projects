function updateClock() {
  const now = new Date();

  // Time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById(
    'clock'
  ).textContent = `${hours}:${minutes}:${seconds}`;

  // Day & Date
  const dayDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  document.getElementById('date').textContent = dayDate;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
