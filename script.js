window.onload = start;

function start() {
    updateTitleVisibility();
    setInterval(updateTitleVisibility, 3000);
    addEventListeners();
};

function addEventListeners() {
    const overlays = document.querySelectorAll('.img-overlay');
    for (let i = 0; i < overlays.length; i++) {
        overlays[i].onmouseover = showImgOverlay;
        overlays[i].onmouseleave = removeImgOverlay;
    }
    
};

$(document).on('scroll', function() {
    setTimeout(moveProgressBars, 800);
});

const titleIds = ['title-one', 'title-two', 'title-three'];
const titleVisibility = ['visible', 'hidden', 'hidden'];

function changeTitleVisibility(titleId, visibility) {
    document.getElementById(titleId).style.visibility = visibility;
};

function updateTitleVisibility() {
    for (let i = 0; i < titleIds.length; i++) {
        changeTitleVisibility(titleIds[i], titleVisibility[i]);
    }
    titleVisibility.unshift(titleVisibility.pop());
};


function moveProgressBars() {
    const widths = ['85%', '50%', '98%', '70%'];
    const bars = document.querySelectorAll('.skills-progress > span');
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.width = widths[i];
    }
};

function showImgOverlay(event) {
    event.target.style.opacity = "1";
};

function removeImgOverlay(event) {
    event.target.style.opacity = "0";
};