const button = document.querySelector('#btn-burger');
const menu = document.querySelector('#mobile-menu');
const items = document.querySelectorAll('.mobile-items');

button.addEventListener('click', () => {
    menu.classList.toggle('mobile-hide');
});

items.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.toggle('mobile-hide');
    });
});

const videoThumbnails = document.querySelectorAll(
    ".video-gallery .all-videos .thumbnail"
  );
  const videoPlayer = document.querySelector(
    ".video-gallery .featured-video iframe"
  );
  const videoTitle = document.querySelector(".video-gallery .video-title");
  
  const showVideo = (videoId, title) => {
    let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
    videoPlayer.setAttribute("src", videoUrl);
    videoTitle.innerHTML = title;
  };
  
  videoThumbnails.forEach((v) => {
    v.addEventListener("click", () => {
      showVideo(v.dataset.id, v.dataset.title);
    });
  });

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Здесь вы можете добавить свой код для отправки формы на сервер
    // Например, с помощью XMLHttpRequest или fetch API

    // Для простоты в этом примере мы просто выводим сообщение об успешной отправке
    document.getElementById('statusMessage').textContent = 'Сообщение успешно отправлено!';
});

const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

function showSlide() {
  sliderWrapper.style.left = `-${slideIndex * 100}%`;
}

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 2; // Change this number to the total number of slides - 1
  }
  showSlide();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > 2) { // Change this number to the total number of slides - 1
    slideIndex = 0;
  }
  showSlide();
});

showSlide();
