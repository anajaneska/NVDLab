function createFibGenerator() {
    let a = 0;
    let b = 1;

    function fib_next() {
        const next = a + b;
        a = b;
        b = next;
        return a;
    }

    return fib_next;
}

var fib_next = createFibGenerator();

fib_next();// returns 1
console.log(fib_next(),fib_next(), fib_next())

