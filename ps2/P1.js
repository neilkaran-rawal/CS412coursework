// Problem 1

// Fibonacci Sequence Generators

// fibGen output: 0,1,1,2,3,5,8,13,21,34

function* fibGen() {
    [a, b] = [0, 1]
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

/*
Testing
var fib = fibGen();
for (let i = 0; i < 5; i++) {
    console.log(fib.next().value);
}
*/

// fibEvenGen output: 0, 2, 8, 34, 144, 610, 2584, 10946

function* fibEvenGen(){
    const fibList =  fibGen();
    let res = fibList.next();
    while(!res.done){
        if(res % 2 == 0){
            yield res.value
        }
    }
}

/*
Testing
const fibEven = fibEvenGen();
console.log(fibEven)
for (let i = 0; i < 10; i++) {
    console.log(fibEven.next().value);
}
const fibEven = fibEvenGen();
console.log(fibEven.next().value);
console.log(fibEven.next());
*/