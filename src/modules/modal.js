const modal = () => {
    const modalButtons = document.querySelectorAll('.callback-btn');
    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const buttonServices = document.querySelector('.button-services');
    const fancyButtons = document.querySelectorAll('.fancyboxModal');

   const openModal = (e) => {
       e.preventDefault();
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
   }

   const closeModal = () => {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
   }

   modalButtons.forEach((item) => {
       item.addEventListener('click', openModal)
   })

   fancyButtons.forEach((button) => {
       button.addEventListener('click', openModal)
   })

    buttonServices.addEventListener('click', openModal);

   modalClose.addEventListener('click', closeModal);
   modalOverlay.addEventListener('click', closeModal);
}

export default modal