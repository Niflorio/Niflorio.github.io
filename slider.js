// Получаем элементы слайдера
const slider = document.querySelector('.slides');
const _3d_button = document.querySelector('._3d_button');
const _2d_button = document.querySelector('._2d_button');
const slides = Array.from(slider.querySelectorAll('section'));
const slideCount = slides.length;

let message = document.querySelector('._3d_2d');

const mediaQuery = window.matchMedia('(orientation:portrait) and (max-width:820px)')

if (mediaQuery.matches){
    function button_hide_3d() {
        _3d_button.style.opacity = '0';
        _3d_button.style.transform = 'translateY(-50%)';
        setTimeout(() => {
            _3d_button.style.display = 'none'; // Скрываем кнопку после анимации
            _2d_button.style.display = 'block';
            setTimeout(() => {
                _2d_button.style.opacity = '1';
                _2d_button.style.transform = 'translateY(-20%)';
            }, 10); // Задержка для запуска анимации
        }, 500); // Время ожидания соответствует времени перехода
    }
    
    function button_hide_2d() {
        _2d_button.style.opacity = '0';
        _2d_button.style.transform = 'translateY(-50%)';
        setTimeout(() => {
            _2d_button.style.display = 'none'; // Скрываем кнопку после анимации
            _3d_button.style.display = 'block';
            setTimeout(() => {
                _3d_button.style.opacity = '1';
                _3d_button.style.transform = 'translateY(-20%)';
            }, 10); // Задержка для запуска анимации
        }, 500); // Время ожидания соответствует времени перехода
    }
}
else{

    
function button_hide_3d() {
    _3d_button.style.opacity = '0';
    _3d_button.style.transform = 'translateY(-50%)';
    setTimeout(() => {
        _3d_button.style.display = 'none'; // Скрываем кнопку после анимации
        _2d_button.style.display = 'block';
        setTimeout(() => {
            _2d_button.style.opacity = '1';
            _2d_button.style.transform = 'translateY(-30%)';
        }, 10); // Задержка для запуска анимации
    }, 500); // Время ожидания соответствует времени перехода
}

function button_hide_2d() {
    _2d_button.style.opacity = '0';
    _2d_button.style.transform = 'translateY(-50%)';
    setTimeout(() => {
        _2d_button.style.display = 'none'; // Скрываем кнопку после анимации
        _3d_button.style.display = 'block';
        setTimeout(() => {
            _3d_button.style.opacity = '1';
            _3d_button.style.transform = 'translateY(-30%)';
        }, 10); // Задержка для запуска анимации
    }, 500); // Время ожидания соответствует времени перехода
}


}

function replace_2d() {
    message.style.opacity = '0'; // Плавное исчезновение текста
    setTimeout(() => {
        message.textContent = '2d'; // Меняем текст
        message.style.opacity = '1'; // Плавное появление текста
    }, 500); // Время ожидания должно соответствовать времени перехода
}

function replace_3d() {
    message.style.opacity = '0'; // Плавное исчезновение текста
    setTimeout(() => {
        message.textContent = '3d'; // Меняем текст
        message.style.opacity = '1'; // Плавное появление текста
    }, 500); // Время ожидания должно соответствовать времени перехода
}

let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
_3d_button.addEventListener('click', button_hide_3d);
_2d_button.addEventListener('click', button_hide_2d);

_3d_button.addEventListener('click', show3dSlide);
_2d_button.addEventListener('click', show2dSlide);

_3d_button.addEventListener('click', replace_3d);
_2d_button.addEventListener('click', replace_2d);

// Функция для показа предыдущего слайда
function show3dSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount; // исправлено на slideCount
    updateSlider();
}

// Функция для показа следующего слайда
function show2dSlide() {
    slideIndex = (slideIndex + 1) % slideCount; // исправлено на slideCount
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active'); // Добавляем класс активного слайда
            slide.classList.remove('L')
        } else {
            slide.classList.remove('active'); // Убираем класс активного слайда
            slide.classList.add('L')
        }
        
        setTimeout(() => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        }, 500);
    });
}


function scale_b(button) {
    button.style.transform = 'scale(1.1) translateY(-30%)';
}


function reset_b(button) {

    button.style.transform = 'scale(1) translateY(-30%)'; // Возвращаем к исходному размеру

}
// Передаем функции как обработчики событий

_3d_button.addEventListener('mouseover', () => scale_b(_3d_button));
_3d_button.addEventListener('mouseout', () => reset_b(_3d_button));

_2d_button.addEventListener('mouseover', () => scale_b(_2d_button));
_2d_button.addEventListener('mouseout', () => reset_b(_2d_button));

