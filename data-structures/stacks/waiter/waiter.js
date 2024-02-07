// https://www.hackerrank.com/challenges/waiter/problem

const primes = [];

function generateNthPrime(i) {
    if (i < 1) {
        return 'Invalid input. Please provide a positive integer.';
    }

    
    let num = 2;

    while (primes.length < i) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes[i - 1];
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function waiter(number, q) {
    // Write your code here
    generateNthPrime(q);
    
    const answers = [];
    let A = [...number];
    const B = [];
    for (let i = 0; i < q; i++) {
        const newA = [];
        while (A.length > 0) {  
            const value = A.pop();
            if (value % primes[i] === 0) {
                B.push(value);
            } else {
                newA.push(value);
            } 
        }
        A = newA;
        while (B.length > 0) {
            const value = B.pop();
            answers.push(value);
        }
    }
    
    while (A.length > 0) {
        const value = A.pop();
        answers.push(value);
    }
    
    return answers;
    
}