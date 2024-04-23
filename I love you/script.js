const wrapper = document.querySelector('.wrapper');
const question = document.querySelector(".question");
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no ");

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "I love you too!";
    gif.src = "https://media.tenor.com/SiqVtvrB0PwAAAAC/mochi-cat.gif";
});

noBtn.addEventListener('mouseover', ()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
