class Slider {
  constructor({
    sliderSelector = ".slider",
    sliderContainerSelector = ".slider__container",
    previousSelector = "#prevBtn",
    nextSelector = "#nextBtn",
    transitionTime = 3000,
    autoPlayOn = false,
  } = {}) {
    this.slider = document.querySelector(sliderSelector);
    this.slides = document.querySelectorAll(
      `${sliderContainerSelector} img`
    ).length;
    this.sliderContainer = document.querySelector(sliderContainerSelector);
    this.previousBtn = document.querySelector(previousSelector);
    this.nextBtn = document.querySelector(nextSelector);
    this.slideSize = this.slider.offsetWidth;
    this.currentSlide = 0;
    this.setEventListeners();
    this.generatePagers();
    this.setAutoPlay(autoPlayOn, transitionTime);
    this.runAutoPlayInterval = setInterval(this.nextSlideAutoPlay.bind(this), transitionTime);
  }

  moveSlides() {
    this.sliderContainer.style.transform = `translateX(-${
      this.currentSlide * this.slideSize
    }px)`;
    Array.from(this.pagers.children).forEach((pager) =>
      pager.classList.remove("active")
    );
    this.pagers.children[this.currentSlide].classList.add("active");
  }

  nextSlideAutoPlay() {
    this.currentSlide =
      this.currentSlide >= this.slides - 1 ? 0 : this.currentSlide + 1;
    this.moveSlides();
  }

  nextSlide() {
    this.clearlAutoPlayInterval()
    this.currentSlide =
      this.currentSlide >= this.slides - 1 ? 0 : this.currentSlide + 1;
    this.moveSlides();
  }

  previousSlide() {
    this.clearlAutoPlayInterval()
    this.currentSlide =
      this.currentSlide <= 0 ? this.slides - 1 : this.currentSlide - 1;
    this.moveSlides();
  }

  setEventListeners() {
    this.nextBtn.addEventListener("click", this.nextSlide.bind(this));
    this.previousBtn.addEventListener("click", this.previousSlide.bind(this));
  }

  generatePagers() {
    const pagers = document.createElement("div");
    pagers.classList.add("pagers");

    for (let i = 0; i < this.slides; i += 1) {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        this.clearlAutoPlayInterval()
        this.currentSlide = i;
        this.moveSlides();
      });
      dot.classList.add("pager");
      pagers.appendChild(dot);
    }
    pagers.firstChild.classList.add("active");
    this.slider.appendChild(pagers);
    this.pagers = pagers;
  }

  setAutoPlay(autoPlayOn, transitionTime) {
    if (autoPlayOn) {
      this.runAutoPlayInterval
    }
  }

  clearlAutoPlayInterval() {
    clearInterval(this.runAutoPlayInterval);
  }
}

export default Slider;
