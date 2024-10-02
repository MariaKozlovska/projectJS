const player = document.getElementById('player');
const damper = document.getElementById('damper');
const btn = document.querySelector('.start');

let isStart = false;

const activeJump = () => {
    if (isStart) {
        if(!player.classList.contains('active')) {
            player.classList.add('active')
        }
        // console.dir(player.classList.contains('active'));
        // console.log('jump');
        setTimeout(() => {
            player.classList.remove('active')
        }, 300)
    }
}

const startGame = () => {
    isStart = true;
    console.log('start');
}

const endGame = () => {
    isStart = false;
    console.log('end');
}

document.addEventListener('keydown', activeJump);

btn.addEventListener('click', () => {
    startGame()
});

// console.log(player);
// console.log(damper);
// console.log(btn);