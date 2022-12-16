const processOrders = (customer) => {
    console.log('processing Order for customer 1');

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log('order process for customer 1');
};

console.log('take order for customer 1');
processOrders();
console.log('complete order for customer 1');




/* Here is 3 seconds blocking behaviour just because of Synchronous Js.
 it will print The cose line by line. One After another line . 
 Thats Why There is an 3000 seconds block issue within  the while loop. */
