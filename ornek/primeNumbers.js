// 1 e ve kendisine bölünecek, 1 den büyük pozitif tamsayı:

const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNumber, highNumber) {
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
showPrimeNumbers(arguments[0] *1, arguments[1] *1 );            // *1 ile çarparak int'e dönüştürdük.

// console.log(process);

// console.log(process.argv.slice(2));

console.log(process.argv[1]);
console.log(process.argv[0]);