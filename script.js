window.addEventListener('load', start);

/** The main function that starts the program */
function start() {
    updateTitleVisibility();
    setInterval(updateTitleVisibility, 3000);
    addEventListeners();
};

/** Collection of event listeners, handles mouse overs, onclick, hides/shows portfolio items */
function addEventListeners() {
    const overlays = document.querySelectorAll('.img-overlay');
    for (const overlay of overlays) {
        overlay.onmouseover = showImgOverlay;
        overlay.onmouseleave = removeImgOverlay;
        overlay.onclick = (event) => {
            const target = event.target.dataset['target'];
            document.getElementById(target).style.display = 'block';
            document.getElementById('portfolio-items').style.display = 'none';
        }
    }
    const buttons = document.querySelectorAll('.portfolio-close-button');
    for (const button of buttons) {
        button.onclick = (event) => {
            document.getElementById('portfolio-items').style.display = 'block';
            const infos = document.querySelectorAll('.portfolio-info');
            for (const info of infos) {
                info.style.display = 'none';
            }
        }
    }
};

/** Sets timeout on progress bars on scroll */
$(document).on('scroll', function() {
    setTimeout(moveProgressBars, 800);
});

/** Variable that holds the different titles in an array */
const titleIds = ['title-one', 'title-two', 'title-three'];

/** Variable that holds the different visibilities in an array */
const titleVisibility = ['visible', 'hidden', 'hidden'];

/** Change visibility on titles */
function changeTitleVisibility(titleId, visibility) {
    document.getElementById(titleId).style.visibility = visibility;
};

/** Updates visibility on titles */
function updateTitleVisibility() {
    for (let i = 0; i < titleIds.length; i++) {
        changeTitleVisibility(titleIds[i], titleVisibility[i]);
    }
    titleVisibility.unshift(titleVisibility.pop());
};

/** Changes the width on progress bars */
function moveProgressBars() {
    const widths = ['85%', '50%', '98%', '70%'];
    const bars = document.querySelectorAll('.skills-progress > span');
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.width = widths[i];
    }
};

/** Shows overlay on portfolio images */
function showImgOverlay(event) {
    event.target.style.opacity = "1";
};

/** Hides overlay on portfolio images */
function removeImgOverlay(event) {
    event.target.style.opacity = "0";
};