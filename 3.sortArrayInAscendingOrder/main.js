
let sort = array => {
    const arry2 = [];
    let pos =0, max=array[0], min=array[0];
    // find max number
    for (let j=0; j<array.length;j++){
        if(max < array[j]){
            max = array[j];
        }
    }
    //find minimum number
    for(let i = 0; i <array.length; i++){
        for (let k=0; k < array.length; k++){
            if (array[k] != null){
                if (min > array[k]){
                    min = array[k];
                    pos = k;
                }
            }
        }
        arry2[i] = min;
        array[pos] = null;
        min = max;
    }
    return arry2;
}

let arry = [1, -5, -3, 2, 4];

// console.log(sort(arry)); 


