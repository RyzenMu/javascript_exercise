
let sort = array => {
    const arry2 = [];
    let pos =0, max=array[0], min=array[0];
    for (let j=0; j<array.length;j++){
        if(max < array[j]){
            max = array[j];
        }
    }

    for(let i = 0; i <array.length; i++){
        for(let k=0; k<array.length; k++){
            if(min>array[k]){
                min=array[j];
            }
        }
        arry2[i] = min;
    }
    return arry2;
}


