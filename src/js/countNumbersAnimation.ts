const CountNumbersAnimation = () => {
    const container = document.querySelector(".count-numbers-block");
    const targets = document.querySelectorAll(".count-numbers-value") as NodeListOf<HTMLElement>;
  
    const animateCount = (el: HTMLElement, endValue: number, duration = 1000) => {
      let start = 0;
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      const increment = endValue / totalFrames;
  
      let currentFrame = 0;
  
      const counter = setInterval(() => {
        currentFrame++;
        start += increment;
        if (currentFrame >= totalFrames) {
          el.textContent = endValue.toLocaleString();
          clearInterval(counter);
        } else {
          el.textContent = Math.round(start).toLocaleString();
        }
      }, 1000 / frameRate);
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
  