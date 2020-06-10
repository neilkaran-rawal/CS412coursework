// Problem 3

const string = 'supercalifragilisticexpialidocious';

const fun1 = (string, lambda1 = string => {
    let arr = string.split('c');
    for (let i = 0; i< arr.length; i++){
        if (i!== 0){
            arr[i] = 'c' + arr[i]
        }
    }
    return arr
})

const fun2 = (string, lambda2 = string => {
    let orgStr = string;
    let length = string.length;
    let numReplaced = 0;
    let modStr = string.replace(/a/g, 'A');

    for(let i = 0; i < string.length; i++) {
        if(string[i] == 'a'){
            numReplaced++;
        }
    }
    var obj = {
        originalString: orgStr,
        modifiedString: modStr,
        numberReplaced: numReplaced,
        length: length,
    }
    return obj
})

console.log(fun1(string));
console.log(fun2(string));