// Problem 2

// Sentence broken down into words; stored into an array

const sentence = "All I know is something like a bird within her sang"

function* senBreaker() {
    const words = sentence.split(" ").join('\n')
    yield words

}

const test = senBreaker();
console.log(test.next().value);