window.onload = start;

function start() {
    updateTitleVisibility();
    setInterval(updateTitleVisibility, 3000);
};

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