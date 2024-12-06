// Получаем элементы слайдера
const _2d_slider_3 = document.querySelector('._2d_photo_1');
const _2d_prevButton_3 = document.querySelector('._2d_prev-button_1');
const _2d_nextButton_3 = document.querySelector('._2d_next-button_1');
const _2d_slides_3 = Array.from(_2d_slider_3.querySelectorAll('img'));
const _2d_slideCount_3 = _2d_slides_3.length;

let _2d_slideIndex_3 = 0;

// Устанавливаем обработчики событий для кнопок
_2d_prevButton_3.addEventListener('click', showPreviousSlide);
_2d_nextButton_3.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    _2d_slideIndex_3 = (_2d_slideIndex_3 - 1 + _2d_slideCount_3) % _2d_slideCount_3;
    update_2d_slider_3();
}

// Функция для показа следующего слайда
function showNextSlide() {
    _2d_slideIndex_3 = (_2d_slideIndex_3 + 1) % _2d_slideCount_3;
    update_2d_slider_3();
}

// Функция для обновления отображения слайдера
function update_2d_slider_3() {
    _2d_slides_3.forEach((slide, index) => {
        if (index === _2d_slideIndex_3) {
            slide.classList.add('active'); // Добавляем класс активного слайда
        } else {
            slide.classList.remove('active'); // Убираем класс активного слайда
        }
    });
}

// Инициализация слайдера
update_2d_slider_3();