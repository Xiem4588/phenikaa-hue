const CountNumbersAnimation = () => {
  const container = document.querySelector(".count-numbers-block");
  const targets = document.querySelectorAll(".count-numbers-value") as NodeListOf<HTMLElement>;

  const animateCount = (el: HTMLElement, endValue: number, duration = 1000) => {
      let start = 0;
      const stepTime = Math.max(Math.floor(duration / endValue), 20);
      const counter = setInterval(() => {
          start++;
          el.textContent = start.toString();
          if (start >= endValue) clearInterval(counter);
      }, stepTime);
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              targets.forEach((el) => {
                  const attrValue = el.getAttribute("data-value");
                  if (attrValue !== null) {
                      const targetValue = parseInt(attrValue, 10);
                      animateCount(el, targetValue);
                  }
              });
              observer.disconnect();
          }
      });
  });

  if (container) observer.observe(container);
};

export default CountNumbersAnimation;