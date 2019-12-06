console.log(window.location);
console.log(window.navigator.geolocation);

const geolocationOutputElement = document.querySelector('#geolocation-output');

window.navigator.geolocation.getCurrentPosition(
    function(position) {
        console.log(position);
        geolocationOutputElement.textContent = 'Vous vous situez ici : '+position.coords.latitude+'/'+position.coords.longitude; 
    },
    function(error) {
        geolocationOutputElement.textContent = error.message;
    }
);

window.navigator.geolocation.watchPosition(
    function(position) {
        console.log(position);
        geolocationOutputElement.textContent = 'Vous vous situez ici : '+position.coords.latitude+'/'+position.coords.longitude; 
    }
)
