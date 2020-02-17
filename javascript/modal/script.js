var open = document.querySelector('#push');

var close = document.querySelector('#close');

var modal = document.querySelector('.container');

document.addEventListener('click', function(event) {
    if ( event.target.tagName !== 'BUTTON' &&
        event.target.closest('.container') === NaN)  {
        modal.style.display ='none';
    }
})

open.addEventListener('click', function(event) {
    modal.style.display = 'block'
})
close.addEventListener('click', function(event) {
    modal.style.display = 'none'
})