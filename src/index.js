import modal from "./modules/modal.js";
import menu from "./modules/menu.js";
import music from "./modules/music";
import carousel from "./modules/carusel";
import scrolling from "./modules/scrolling";
import topSlider from "./modules/topSlider";
import sendForm from "./modules/sendForm";

modal();
menu();
music();
carousel();
scrolling();
topSlider();
sendForm({formId: '[name=form-callback]' });