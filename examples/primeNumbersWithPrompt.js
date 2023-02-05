function showPrimeNumbers() {
    const lowNumber = Number(prompt('Low number:'));
    const highNumber = Number(prompt('High number:'));
    for (let i = lowNumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
showPrimeNumbers();