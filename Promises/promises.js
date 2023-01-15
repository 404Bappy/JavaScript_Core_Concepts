let myPromise = Promise((resolveFunc, rejectFunc) => {
    let result = 2;
    if (result == 2) {
        resolveFunc("success");
    }
    else {
        rejectFunc("Failed");
    }
});

myPromise.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
});