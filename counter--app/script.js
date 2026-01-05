let count = 0;

const countElement = document.getElementById('count');

function increment() {
  count++;
  updateCount();
}

function decrement() {
  if (count > 0) {
    count--;
  }

  updateCount();
}

function reset() {
  count = 0;
  updateCount();
}

function updateCount() {
  countElement.textContent = count;
}
