let arr = [5,2,1,4, -5, 7, 3, 10, 0, -11, -1, -22, 22, 33];

// loop through the array


for (let b = 0; b < arr.length; b++){
    for (a =0; a < arr.length; a++){
        if (arr[a] > arr[a+1]){
            temp = arr[a+0];
            arr[a+0] = arr[a+1];
            arr[a+1] = temp;
        }
        
    }
}

console.log(arr);














