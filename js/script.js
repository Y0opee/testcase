/*массив цен*/ 
const prices = [...document.getElementsByClassName('searching-content_results-box_item_name-price_price-box_price')]
/*массив скидок*/ 
const discounts = [...document.getElementsByClassName('searching-content_results-box_item_name-price_price-box_discount')]
//бейджи "акция" 
const badges =[...document.getElementsByClassName('searching-content_results-box_item_pic-box_discount-badge')]

/*раскрываем строку поиска на screenwidth 1400 при hover на кнопку*/
// const searchbut = document.querySelector('.header_down-box_searchshop-box_searching-box_button');
// const searchinput = document.querySelector('.header_down-box_searchshop-box_searching-box_input');
// searchbut.addEventListener("mouseover", (event) => { 
//   searchinput.style.width = '170px';
//   // searchbut.style.backgroundimage = "url(img/search-normal.svg)"
// })
// searchinput.addEventListener("mouseout", (event) => { 
//   searchinput.style.transition = '1s'
//   searchinput.style.width = '39px';
// })
// searchinput.onfocus = (event) => { 
//   searchinput.style.width = '170px';
// }


/*проверяем разрешение*/
const screenWidth = window.screen.width;

if (screenWidth <= 1600) {
  prices[2].textContent = 22060;        /*меняем значение цены*/
  prices[4].textContent = 7060;         //
  prices[6].textContent = 7060;         //
}
if (screenWidth <= 770) {
  prices[2].textContent = 6700;        /*меняем значение цены*/
  prices[4].textContent = 6060;         //
  prices[6].textContent = 6060;         //
}
if (screenWidth <= 390) {
  prices[0].textContent = 3040;         /*меняем значение цены*/
  discounts[0].textContent = '';        //меняем скидку
  prices[3].textContent = 3040;         //
  prices[4].textContent = 6700;         //
  discounts[4].textContent = '';        //
  prices[5].textContent = 6060;         //
  discounts[5].textContent =  5060;     //
  prices[6].textContent = 3040;         //
  discounts[6].textContent =  '';       //
  prices[7].textContent = 6700;         //
  discounts[7].textContent =  '';       //
}
/*Форматируем цифры-> пробелы между тысячами*/
let numformat = (num) => {            /*функция пробелов*/
  const newnum = new Intl.NumberFormat('ru-RU').format(num);
  return newnum
}
/*применяем ко всем массивам*/ 
let length = discounts.length
for(let i = 0; i < length; i += 1){
  prices[i].textContent = numformat(prices[i].textContent); //форматируем цены
  if (discounts[i].textContent === ''){
    badges[i].style.display = 'none';                       //убираем плашку "акция"
    discounts[i].style.setProperty('--content', '?');       //убираем символ валюты
    discounts[i].style.margin = 0                           //убираем отступ от символа валюты
    prices[i].style.color = 'rgba(35, 24, 21, 1)';        //меняем цвет цены
    prices[i].style.textDecoration = 'none';                //убираем эффект зачеркивания
  }else{
    discounts[i].textContent = numformat(discounts[i].textContent)  //форматируем скидки
  }
}

