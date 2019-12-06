const Product = function(name) {
    this.name = name;
}


const request = window.indexedDB.open('LeNomDeMaBase', 42);

request.addEventListener('upgradeneeded', function(ev) {
    const db = ev.target.result;

    const productStore = db.createObjectStore('product', { keyPath: 'name' });
    console.log('creation de la boutique');

    const productData = [
        new Product('stylo'),
        new Product('brosse à dents'),
        new Product('café'),
        new Product('balai')
    ];

    productStore.transaction.addEventListener('complete', function(ev) {
        console.log('transaction complete', ev);
        const productObjectStore = db.transaction('product', 'readwrite').objectStore('product');
        for (const product of productData) {
            productObjectStore.add(product);
        }
    });
});