const music =() => {

    const musicMain = document.querySelector('.accordeon');
    const musicElements = musicMain.querySelectorAll('.element');
    const musicContents = musicMain.querySelectorAll('.element-content');

    musicMain.addEventListener('click', (e) => {
        if (e.target.closest('.element')) {
            let currentMusic = e.target.closest('.element');
            musicElements.forEach((item, index) => {
                if (item === currentMusic) {
                    item.classList.add('active');
                    musicContents[index].style.display = 'block';
                } else {
                    item.classList.remove('active');
                    musicContents[index].style.display = 'none';
                }
            })
        }
    })
}

export default music;

