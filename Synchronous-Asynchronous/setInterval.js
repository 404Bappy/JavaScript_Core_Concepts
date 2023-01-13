console.log('bappy');
setInterval(() => {
    console.log('karim');
}, 2000)

console.log('jashim');

let second = 0;

const timeId = setInterval(() => {
    second++;
    console.log(second);

    if (second > 15) {
        clearInterval(timeId);
    }
})


// it will running again and again until we stop it //





//////// SetInterval( ) is used for finding the our put in a certain amount of time.
//////// SetTimeout( ) is used for nake js Asynchronous . it print the due work letter . by scheduling how much time it will take .
//////// 