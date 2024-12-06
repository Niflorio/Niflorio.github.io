// Получаем элементы слайдера
const slider_3 = document.querySelector('._3d_photo_3');
const _3d_prevButton_3 = document.querySelector('._3d_prev-button_3');
const _3d_nextButton_3 = document.querySelector('._3d_next-button_3');
const slides_3 = Array.from(slider_3.querySelectorAll('img'));
const slideCount_3 = slides_3.length;

let slideIndex_3 = 0;

// Устанавливаем обработчики событий для кнопок
_3d_prevButton_3.addEventListener('click', showPreviousSlide);
_3d_nextButton_3.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex_3 = (slideIndex_3 - 1 + slideCount_3) % slideCount_3;
    updateSlider_3();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex_3 = (slideIndex_3 + 1) % slideCount_3;
    updateSlider_3();
}

// Функция для обновления отображения слайдера
function updateSlider_3() {
    slides_3.forEach((slide, index) => {
        if (index === slideIndex_3) {
            slide.classList.add('active'); // Добавляем класс активного слайда
        } else {
            slide.classList.remove('active'); // Убираем класс активного слайда
        }
    });
}

// Инициализация слайдера
updateSlider_3();