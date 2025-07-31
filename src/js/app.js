var swiper = new Swiper(".mySwiper", {});

var swiper = new Swiper(".mySwipper", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  }, breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

});

window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


window.addEventListener("scroll", () => {
  const parallaxImage = document.querySelector(".position_img");
  if (parallaxImage) {
    const scrollY = window.scrollY;
    const offset = scrollY * 0.05; 
    parallaxImage.style.transform = `translateY(${offset}px)`;
  }
});






  const deadline = new Date("2025-12-31T23:59:59").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const diff = deadline - now;

    if (diff <= 0) {
      document.querySelectorAll(".time").forEach(el => el.textContent = "00");
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.querySelector('.time[data-label="days"]').textContent = String(days).padStart(2, "0");
    document.querySelector('.time[data-label="hours"]').textContent = String(hours).padStart(2, "0");
    document.querySelector('.time[data-label="minutes"]').textContent = String(minutes).padStart(2, "0");
    document.querySelector('.time[data-label="seconds"]').textContent = String(seconds).padStart(2, "0");
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer(); 


  const tabs = document.querySelectorAll('.tab-menu li');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');
      tabContents.forEach(content => {
        if(content.id === target) {
          content.style.display = 'flex'; 
          content.classList.add('active');
        } else {
          content.style.display = 'none';
          content.classList.remove('active');
        }
      });
    });
  });

  const formLine = document.querySelector('.right .line');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const movement = Math.sin(scrollY / 50) * 10; 
    formLine.style.transform = `translateY(-50%) translateX(${movement}px)`;
  });
  



  