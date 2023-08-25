document.addEventListener("DOMContentLoaded", () => {
    const tabs = ()=>{
        const cardDetailChange = document.querySelectorAll('.card-detail__change')
        const cardImage = document.querySelectorAll('.card__image')
        const cardDetailsTitle = document.querySelectorAll('.card-details__title')
        

        const hideAll =()=> {
            for(let  i = 0; i <cardDetailChange.length; i++) {
                            cardDetailChange[i].classList.remove('active')
                    cardImage[i].classList.remove('active')
                    cardDetailsTitle[i].classList.remove('active')
            }
        } 

        for(let i = 0; i < cardDetailChange.length; i++){
            cardDetailChange[i].addEventListener('click', ()=>{
                hideAll()
                cardDetailChange[i].classList.add('active')
                cardImage[i].classList.add('active')
                cardDetailsTitle[i].classList.add('acrive')
            })
        }
           
    }
    tabs()
});
    

const graphiteBtn = document.getElementById("graphiteBtn");
const silverBtn = document.getElementById("silverBtn");
const blueBtn = document.getElementById("blueBtn");

const description = document.querySelector(".card-details__description-list");

// Визначте обробники подій для натискання на кнопки
graphiteBtn.addEventListener("click", () => {
    updateDescription("Экран 6.1\"/2532x1170 Пикс", "Технология экрана OLED", "Тип процессора A14 Bionic", "Встроенная память (ROM) 128 ГБ", "Основная камера МПикс 12/12/12/LiDAR");
});

silverBtn.addEventListener("click", () => {
    updateDescription("Экран ввиде камня", "Технология экрана отстутствует", "Тип процессора Пентиум", "Встроенная память (ROM) 1 ГБ", "Основная камера отсутстует");
});

blueBtn.addEventListener("click", () => {
    updateDescription("Экран разбит", "Технология экрана наилучшая", "Тип процессора засекречен", "Встроенная память (Виски) 0,1 ГБ", "33 камеры");
});

// Функція для оновлення опису на основі натиснутої кнопки
function updateDescription(screen, techScreen, processor, memory, camera) {
    const descriptionItems = description.querySelectorAll(".card-details__description-item");
    
    descriptionItems[0].textContent = screen;
    descriptionItems[1].textContent = techScreen;
    descriptionItems[2].textContent = processor;
    descriptionItems[3].textContent = memory;
    descriptionItems[4].textContent = camera;
}

// Виклик для ініціалізації опису
updateDescription("Екран 6.1\"/2532x1170 Пикс", "Технологія екрана OLED", "Тип процесора A14 Bionic", "Вбудована пам'ять (ROM) 128 ГБ", "Основна камера МПикс 12/12/12/LiDAR");