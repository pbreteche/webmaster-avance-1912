const myWorker = new Worker('11worker1.js');
const start = Date.now();

myWorker.addEventListener('message', function(event){
    const ellapsedTime = (Date.now() - start) / 1000;
    console.log(ellapsedTime+'s', event.data);
});