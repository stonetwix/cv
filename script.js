window.onload = start;

const slideIds = ['slide-one', 'slide-two', 'slide-three'];
let slideOpacity = ['1', '0', '0'];

function start() {
    updateVisibility();
    setInterval(updateVisibility, 3500);
};

function changeSlideVisibility(slideId, opacity) {
    document.getElementById(slideId).style.opacity = opacity;
};


function updateVisibility() {
    for (let i = 0; i < slideIds.length; i++) {
        changeSlideVisibility(slideIds[i], slideOpacity[i]);
    }
    slideOpacity.unshift(slideOpacity.pop());
};