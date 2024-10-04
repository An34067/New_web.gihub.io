const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

// Функция для показа слайда
function showSlide(n) {
  // Скрыть все слайды
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Показать выбранный слайд
  slides[n].style.display = 'block';
}

// Функция для перехода к следующему слайду
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Инициализация слайдера
showSlide(currentSlide);

// Обработчики событий для кнопок
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Фильтрация специальностей
const filterButtons = document.querySelectorAll('.filter-button');
const specialtiesGrid = document.querySelector('.specialties-grid');
const specialties = document.querySelectorAll('.specialty');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Удаляем активный класс у всех кнопок
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Добавляем активный класс к текущей кнопке
    button.classList.add('active');

    // Фильтруем специальные  по формам обучения
    const filterValue = button.dataset.filter;

    specialties.forEach((specialty) => {
      const forms = specialty.querySelectorAll('.form');
      let showSpecialty = false;
      forms.forEach((form) => {
        if (form.dataset.filter === filterValue || filterValue === 'all') {
          showSpecialty = true;
        }
      });
      specialty.style.display = showSpecialty ? 'block' : 'none';
    });
  });
});