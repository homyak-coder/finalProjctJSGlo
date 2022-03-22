const validation = () => {
   const validateNodes = document.querySelectorAll('.form-control');
   const phoneForm = document.querySelector('.form-control.tel')

   phoneForm.addEventListener('input', (e) => {
       e.target.value = e.target.value.replace(/[^0-9\+\-\(\)]/g, "");
   });
   validateNodes[0].addEventListener('input', (e) => {
       e.target.value = e.target.value.replace(/[^а-яА-Я]/g, "")
   });
}

export default validation