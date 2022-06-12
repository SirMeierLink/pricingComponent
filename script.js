const print = console.log;

const sliding_ball = document.querySelector('.ball');
const prices = document.querySelectorAll('.pricing-tier span');

sliding_ball.addEventListener('click', ()=> {
    
    sliding_ball.classList.toggle('left-side');

    for(let price of prices) {
        price.classList.toggle('hide');
    }

});


