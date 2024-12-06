// Получаем элементы слайдера
const _2d_slider_2 = document.querySelector('._2d_photo_2');
const _2d_prevButton_2 = document.querySelector('._2d_prev-button_2');
const _2d_nextButton_2 = document.querySelector('._2d_next-button_2');
const _2d_slides_2 = Array.from(_2d_slider_2.querySelectorAll('img'));
const _2d_slideCount_2 = _2d_slides_2.length;

let _2d_slideIndex_2 = 0;

// Устанавливаем обработчики событий для кнопок
_2d_prevButton_2.addEventListener('click', showPreviousSlide);
_2d_nextButton_2.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    _2d_slideIndex_2 = (_2d_slideIndex_2 - 1 + _2d_slideCount_2) % _2d_slideCount_2;
    update_2d_slider_2();
}

// Функция для показа следующего слайда
function showNextSlide() {
    _2d_slideIndex_2 = (_2d_slideIndex_2 + 1) % _2d_slideCount_2;
    update_2d_slider_2();
}

// Функция для обновления отображения слайдера
function update_2d_slider_2() {
    _2d_slides_2.forEach((slide, index) => {
        if (index === _2d_slideIndex_2) {
            slide.classList.add('active'); // Добавляем класс активного слайда
        } else {
            slide.classList.remove('active'); // Убираем класс активного слайда
        }
    });
}

// Инициализация слайдера
update_2d_slider_2();