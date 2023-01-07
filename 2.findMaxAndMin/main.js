

let min = (array, min=array[0]) => {
    min = array[0];

    for(let i = 0; i < array.length; i++){
        if(min > array[i]) min = array[i];
    }
    return min;
}

const arry = [1, 2, 4, 3, 0, -3];



let max = (array, min=array[0]) => {
    max = array[0];

    for(let i = 0; i < array.length; i++){
        if(max < array[i]) max = array[i];
    }
    return max;
}



console.log(min(arry));
console.log(max(arry));
