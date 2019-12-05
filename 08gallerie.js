const menuElement = document.querySelector('.menu');
const viewerImage = document.querySelector('.viewer > img');

const menuLinks = menuElement.querySelectorAll('a');
for (const link of menuLinks) {
    link.addEventListener('click', function(event){
        // this = element attaché à l'écouteur
        // event.target = element qui a reçu en premier l'événemment
        viewerImage.src = this.querySelector('img').src;
    });
}