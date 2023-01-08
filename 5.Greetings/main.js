

const dt = new Date();

if (dt.getHours() > 12){
    console.log(dt.getHours()-12 + ' PM')
}

let minutes = dt.getMinutes();

let hour = dt.getHours();

let prepend = hour >= 12 ? "PM" : "AM";

let user = "Daily";


if (hour >= 12 && hour <= 17){
    console.log('good afternoon');
}
else if (hour >=17 && hour <= 20){
    console.log('good evening');
}
else if (hour >=20 || hour <= 6){
    console.log('good night');
}
else{
    console.log('good morning ' + user);
}

console.log(`${hour} : ${minutes} ${prepend}`);



