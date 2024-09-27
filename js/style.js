// animation to change the words in home
var typed = new Typed("#element", {
  strings: [" Developer^1000 ", " Designer^1000 ", " Larry Daniels^1000 "],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
  let numbers = document.querySelectorAll("#counter .item h3");
  let sectionCounter = document.querySelector("#counter");
  let started = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= sectionCounter.offsetTop - window.innerHeight) {
      if (!started) {
        numbers.forEach((number) => startCount(number));
      }
      started = true;
    } else {
      started = false;
      numbers.forEach((number) => (number.textContent = "0"));
    }
  });

  function startCount(el) {
    let goal = parseInt(el.dataset.goal, 10);
    let count = 0;
    let increment = goal / 200; // Define the increment based on the goal

    let interval = setInterval(() => {
      count += increment;
      el.textContent = Math.ceil(count);

      if (count >= goal) {
        el.textContent = goal; // Ensure the final value matches the goal
        clearInterval(interval);
      }
    }, 10); // Set interval timing to achieve smooth counting
  }
});
