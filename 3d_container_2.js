// Получаем элементы слайдера
const slider_2 = document.querySelector('._3d_photo_2');
const _3d_prevButton_2 = document.querySelector('._3d_prev-button_2');
const _3d_nextButton_2 = document.querySelector('._3d_next-button_2');
const slides_2 = Array.from(slider_2.querySelectorAll('img'));
const slideCount_2 = slides_2.length;

let slideIndex_2 = 0;

// Устанавливаем обработчики событий для кнопок
_3d_prevButton_2.addEventListener('click', showPreviousSlide);
_3d_nextButton_2.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex_2 = (slideIndex_2 - 1 + slideCount_2) % slideCount_2;
    updateSlider_2();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex_2 = (slideIndex_2 + 1) % slideCount_2;
    updateSlider_2();
}

// Функция для обновления отображения слайдера
function updateSlider_2() {
    slides_2.forEach((slide, index) => {
        if (index === slideIndex_2) {
            slide.classList.add('active'); // Добавляем класс активного слайда
        } else {
            slide.classList.remove('active'); // Убираем класс активного слайда
        }
    });
}

// Инициализация слайдера
updateSlider_2();