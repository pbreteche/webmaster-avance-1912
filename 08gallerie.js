const menuElement = document.querySelector('.menu');
const viewerImage = document.querySelector('.viewer > img');

fetch('/images.json').then(function(response){
    return response.json();
}).then(function(filenames){
    let elementsHtml = '';
    for (const filename of filenames) {
        elementsHtml = elementsHtml+'<li><a><img src="/images/tux/'+filename+'"></a></li>';
    }
    menuElement.innerHTML = elementsHtml;
    
    const menuLinks = menuElement.querySelectorAll('a');
    for (const link of menuLinks) {
        link.addEventListener('click', function(event){
            // this = element attaché à l'écouteur
            // event.target = element qui a reçu en premier l'événemment
            viewerImage.src = this.querySelector('img').src;
        });
    }
})

