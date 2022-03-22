import modal from "./modules/modal.js";
import music from "./modules/music";
import carousel from "./modules/carusel";
import scrolling from "./modules/scrolling";
import topSlider from "./modules/topSlider";
import sendForm from "./modules/sendForm";
import validation from "./modules/validation";
import maskPhone from "./modules/maskPhone";

modal();
music();
carousel();
scrolling();
topSlider();
// sendForm({formId: '[name=form-callback]' });
validation();
maskPhone();

const allForms = document.querySelectorAll('[name=form-callback]');
allForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(form);
        sendForm(form);
    });
});