const topSlider = () => {
   const sliderItem = document.querySelectorAll('.item');
   const sliderTable = document.querySelectorAll('.table');
   let index = 1;
   const showPictures = (n) => {
       if (n > sliderItem.length) {
           index = 1; // для того, чтобы зациклить наш слайдер
       };

       sliderItem.forEach((item) => {
           item.style.display = 'none'; // изначально ставим для всех
       });

       sliderItem[index - 1].style.display = 'block'; // для выврла на экран первого элемента коллекции
       sliderTable.forEach((item) => {
           item.classList.remove('active');  // для того, чтобы убрать анимацию для описания картинки
       });
   };

   showPictures(index);  // вызов для первой картинки

   const slidesPlus = (i) => {
       showPictures(index += i); // функция для увеичения картинок на слайдере
   };

   setInterval(() => {  // каждые три секунды будет происходить это
       slidesPlus(1); // переходим на следующую картиинку
        setTimeout(() => {
            return sliderTable[index - 1].classList.add('active'); // теперь выводим текст на экран
        }, 10);
   }, 3000)

}

export default topSlider