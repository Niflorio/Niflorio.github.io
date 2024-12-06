const a = document.querySelector('.head_left_logo_1');
const a1 = document.querySelector('.logo_footer_relative');
const logo_1 = document.querySelector('.logo_1');
const logo_3 = document.querySelector('.logo_3');
const main = document.querySelector('.head_left_abstract_top_suit');
const progress = document.querySelector('.head_left_abstract_top_crown');
const product = document.querySelector('.head_left_abstract_top_box');
const chat = document.querySelector('.head_left_abstract_top_chat');

const _1_logo = document.querySelector('.f_l_1');
const _3_logo = document.querySelector('.f_l_3');

function slice() {
    logo_3.style.transform = 'translateY(2px) translateX(-3px)'; // Перемещение Logo 3
    logo_1.style.transform = 'translateY(-2px) translateX(3px)'; // Перемещение Logo 1
}

function reset() {
    logo_3.style.transform = 'translateY(0) translateX(0)'; // Возвращение Logo 3
    logo_1.style.transform = 'translateY(0) translateX(0)'; // Возвращение Logo 1
}

function slice_1() {
    _3_logo.style.transform = 'translateY(1px) translateX(-1.5px)'; // Перемещение Logo 3
    _1_logo.style.transform = 'translateY(-1px) translateX(1.5px)'; // Перемещение Logo 1
}

function reset_1() {
    _3_logo.style.transform = 'translateY(0) translateX(0)'; // Возвращение Logo 3
    _1_logo.style.transform = 'translateY(0) translateX(0)'; // Возвращение Logo 1
}


function scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Получаем позицию элемента
    const offsetPosition = elementPosition - offset; // Вычисляем позицию с учетом смещения

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Плавная прокрутка
    });
}

// Прокрутка к элементам с учетом смещения
a.addEventListener('mouseover', slice);
a.addEventListener('click', () => scrollToElement('thenif', 100));
a1.addEventListener('click', () => scrollToElement('thenif', 100));
main.addEventListener('click', () => scrollToElement('main', 20));
product.addEventListener('click', () => scrollToElement('product', 20)); 
progress.addEventListener('click', () => scrollToElement('progress', 20));
chat.addEventListener('click', () => scrollToElement('chat', 20)); 
a.addEventListener('mouseout', reset);
a1.addEventListener('mouseover', slice_1);
a1.addEventListener('mouseout', reset_1);