const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const bot = document.querySelector("#auto");


var auto = true;

bot.checked = auto;

bot.addEventListener("click",() =>{
    auto = false;
    if (bot.Checked) reload();
});

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if (auto) {
        if (pipePosition<= 210 && !mario.classList.contains("jump")) {
            jump();
        }


    }


  console.log(marioPosition)
    if (pipePosition <= 120 && pipePosition > 0  && marioPosition   < 80)  {
        
console.log('loop')


        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft ='50px';
        clearIntervalal(loop);
        if (auto) {
            reload();
        }
    }
}, 1);

const reload =  () => {
    window.location,reload();
}
document.addEventListener("keydown", jump);
