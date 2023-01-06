
function reverse_number(n){
    n = n + "";
    let num = n.split("").reverse().join("");
    return num;
};


console.log(reverse_number(12345));



function reverse_fun(num){
    let n = num.toString();

    const number = [];
    let str = '';

    for (let i=n.length, k = 0; i>=0, i--; k++){
        number[k] = n[i];
        str  = str + number[k];
    }
    return parseInt(str);
}

console.log(reverse_fun(1234));
