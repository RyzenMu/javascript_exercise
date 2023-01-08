

let sampleArray = [5, 4, 3, 2, 1, 9, 10, 55];

let resultArray = [];

for (let i = 0; i < sampleArray.length; i++){
    for (j = 0 ; j < sampleArray.length; j++){
        console.log(`${sampleArray[i]} < ${sampleArray[j]}` + '  is   ' + (sampleArray[i] < sampleArray[j]));
        if (sampleArray[i] < sampleArray[j]){
            resultArray.unshift(sampleArray[i]);
            console.log(resultArray)
        }
    }
}



