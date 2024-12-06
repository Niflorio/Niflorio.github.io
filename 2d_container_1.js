// Получаем элементы слайдера
const _2d_slider_1= document.querySelector('._2d_photo_1');
const _2d_prevButton_1= document.querySelector('._2d_prev-button_1');
const _2d_nextButton_1= document.querySelector('._2d_next-button_1');
const _2d_slides_1= Array.from(_2d_slider_1.querySelectorAll('img'));
const _2d_slideCount_1= _2d_slides_1.length;

let _2d_slideIndex_1= 0;

// Устанавливаем обработчики событий для кнопок
_2d_prevButton_1.addEventListener('click', showPreviousSlide);
_2d_nextButton_1.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    _2d_slideIndex_1= (_2d_slideIndex_1- 1 + _2d_slideCount_1) % _2d_slideCount_1;
    update_2d_slider_1();
}

// Функция для показа следующего слайда
function showNextSlide() {
    _2d_slideIndex_1= (_2d_slideIndex_1+ 1) % _2d_slideCount_1;
    update_2d_slider_1();
}

// Функция для обновления отображения слайдера
function update_2d_slider_1() {
    _2d_slides_1.forEach((slide, index) => {
        if (index === _2d_slideIndex_1) {
            slide.classList.add('active'); // Добавляем класс активного слайда
        } else {
            slide.classList.remove('active'); // Убираем класс активного слайда
        }
    });
}

// Инициализация слайдера
update_2d_slider_1();