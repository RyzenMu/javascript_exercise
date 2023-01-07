console.log('World');

const sampleArray = [10, 5, -5, 2, 4, 10];


for(let i = 0; i < sampleArray.length; i++){
    // console.log(sampleArray[i]);

    if (i == sampleArray.length - 1){
        continue;
    }
    else{
        if(sampleArray[i] > sampleArray[i+1]){
            sampleArray[i] = sampleArray[i+1];

    }
}
}

console.log(sampleArray)

