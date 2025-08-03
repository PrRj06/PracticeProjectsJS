const slider = document.querySelector('input[type="range"]');
const displayValue = document.querySelector('.value');

function updateSlider() {
  const value = +slider.value;
  const min = +slider.min;
  const max = +slider.max;
  const percent = ((value - min) / (max - min)) * 100;

  slider.style.background = `linear-gradient(to right, purple ${percent}%, #c7cdcd ${percent}%)`;

  displayValue.innerText = value;

  // Calculate position of thumb
  const sliderRect = slider.getBoundingClientRect();
  const thumbWidth = 20; 
  const sliderWidth = slider.offsetWidth;
  const thumbOffset = (percent / 100) * sliderWidth;

  const offsetLeft = slider.offsetLeft + thumbOffset - displayValue.offsetWidth / 2 + thumbWidth / 2;
  const offsetTop = slider.offsetTop - 50;

  displayValue.style.left = `${offsetLeft}px`;
  displayValue.style.top = `${offsetTop}px`;
}


slider.addEventListener('mouseenter', () => {
  displayValue.style.opacity = 1;
});
slider.addEventListener('mouseleave', () => {
  displayValue.style.opacity = 0;
});

slider.addEventListener('input', updateSlider);
updateSlider(); // Initial update
