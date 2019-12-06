let primeCount = 0;
let currentNumber = 1;

while(primeCount < 10000) {
    currentNumber++;
    let isPrime = true;
    for(let i=2; i < currentNumber; i++) { // for (initialisation; condition de poursuite; incrémentation)
        if (currentNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        primeCount++;
    }
}

postMessage(currentNumber);
