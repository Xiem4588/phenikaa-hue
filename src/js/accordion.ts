const handleAccordionButton = () => {
  const buttons = document.querySelectorAll('[data-accordion-button]');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();

      const parent = (e.currentTarget as HTMLElement).parentElement;
      if (parent) {
        const isHidden = parent.getAttribute('aria-hidden') === 'true';
        parent.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
      }
    });
  });
}

export default handleAccordionButton;