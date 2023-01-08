

let arry = [1, 2, 3, 4, 5, 6];;

let arrysum = 0;

// for each
arry.forEach(element => {
    arrysum = arrysum + element;
});

console.log(arrysum);

let multi = [[1,2,3],[4,5,6],[7,8,9]];

let multisum = 0;

for (let i = 0; i < multi.length; i++){
    multi[i].forEach(element =>{
        multisum = multisum + element;
    });
}

console.log(multisum);

// sum of 3d array

let arr3 = [
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
    [[19, 20, 21], [22, 23, 24], [25, 26, 27]],
]

multisum = 0;
for (let i = 0; i < arr3.length; i++ ){
    for (let j = 0; j < arr3[i].length; j++){
        arr3[i][j].forEach(element => {
            multisum += element;
        });
    };
};

console.log(multisum);




