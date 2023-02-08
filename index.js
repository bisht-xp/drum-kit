const btns = document.querySelectorAll('.drum');


function sounds(key) {
    let audio = new Audio(`sounds/${key}.mp3`)
    audio.play();
}



btns.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const btns = e.currentTarget.classList;
        drumSound(btns[0]);
        buttonAnimation(btns[0]);
    })
})

document.addEventListener('keydown', (e) => {
    drumSound(e.key);
    buttonAnimation(e.key);
})

const drumSound = function (key) {
    switch (key) {
        case 'w':
            sounds(key);
            break;
        case 'a':
            sounds(key);
            break;
        case 's':
            sounds(key);
            break;
        case 'd':
            sounds(key);
            break;
        case 'j': 
            sounds(key);
            break;
        case 'k':
            sounds(key);
            break;
        case 'l':
            sounds(key);
            break;
        default:
            break;
    }
}


const buttonAnimation = function(currentKey) {
    const activeKey = document.querySelector(`.${currentKey}`);
    activeKey.classList.add('pressed')
    setTimeout(() => {
        activeKey.classList.remove('pressed');
    }, 100);
}