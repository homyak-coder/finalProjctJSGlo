const scrolling = () => {
  const up = document.querySelector('.up');
  const top = document.querySelectorAll('.top-menu a[href*="#"]');
  let scrolled;
  let timer;

  up.addEventListener('click', () => {
      scrolled = window.pageYOffset;
      scrollToTop();
  });

  function scrollToTop() {
      if (scrolled > 0) {
          window.scrollTo(0, scrolled);
          scrolled -= 100;
          timer = setTimeout(scrollToTop, 10)
      }
  };

  window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 500) {
          up.style.display = 'block';
          up.classList.add('animated', 'fadeIn');
          up.classList.remove('fadeOut');
      } else {
          up.classList.add('fadeOut');
          up.classList.remove('fadeIn');
      }
  });

};

export default scrolling