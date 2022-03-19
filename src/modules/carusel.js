const carousel = () => {

    window.addEventListener('load', () => {
        const carousel = document.querySelector('.services-carousel');
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
        const images = document.querySelectorAll('.col-sm-6.col-md-4');

        let counter = 0;
        const stepSize = images[0].clientWidth;

        const cssStyle = `
    <style> 
    
    .services-elements {
        display: flex;
        width: 100%;
        height: 460px;
        margin: auto;
        overflow: hidden;
    }
    .services-carousel .element {
        display: block;
        width: 100%;
        
    }
    .services-carousel {
        display: flex;
        
    }
    .transformAnimation {
        transition: .4s all ease-in-out;
    }
    .col-md-4 {
        width: 400px;
    }
    .services-elements .title-h5 {
        margin-bottom: 45px;
    }
    .services-elements .element-price {
        margin-top: -48px;
       
    }
    `
        carousel.insertAdjacentHTML('beforeend', cssStyle);


        carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

        arrowRight.addEventListener('click', () => {
                if (counter >= 4 - 1) counter = -1;
                carousel.classList.add('transformAnimation')
                counter++;
                carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`
        })

        arrowLeft.addEventListener('click', () => {
                if (counter <= 0 ) counter = 4
                carousel.classList.add('transformAnimation')
                counter--;
                carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`

        })
    })
}

export default carousel