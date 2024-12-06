// Получаем элементы слайдера
const slider_1 = document.querySelector('._3d_photo_1');
const _3d_prevButton_1 = document.querySelector('._3d_prev-button_1');
const _3d_nextButton_1 = document.querySelector('._3d_next-button_1');
const slides_1 = Array.from(slider_1.querySelectorAll('img'));
const slideCount_1 = slides_1.length;

let slideIndex_1 = 0;

// Устанавливаем обработчики событий для кнопок
_3d_prevButton_1.addEventListener('click', showPreviousSlide);
_3d_nextButton_1.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex_1 = (slideIndex_1 - 1 + slideCount_1) % slideCount_1;
    updateSlider_1();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex_1 = (slideIndex_1 + 1) % slideCount_1;
    updateSlider_1();
}

// Функция для обновления отображения слайдера
function updateSlider_1() {
    slides_1.forEach((slide, index) => {
        if (index === slideIndex_1) {
            slide.classList.add('active'); // Добавляем класс активного слайда
        } else {
            slide.classList.remove('active'); // Убираем класс активного слайда
        }
    });
}

// Инициализация слайдера
updateSlider_1();