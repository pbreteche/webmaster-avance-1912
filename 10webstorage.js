let clickCount = +window.localStorage.getItem('click-count');

if(clickCount === null) {
    clickCount = 0;
}

const clickButton = document.querySelector('#web-storage-button');

clickButton.addEventListener('click', function(){
    clickCount = clickCount + 1;
    // clickCount += 1;
    // clickCount++;
    // ++clickCount;
    window.localStorage.setItem('click-count', clickCount);
});

window.sessionStorage // se vide automatiquement à la fermeture de la fenêtre