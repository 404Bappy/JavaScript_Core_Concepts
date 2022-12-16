const processOrders = (customer) => {
    console.log('processing Order for customer 1');

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log('order process for customer 1');
};

console.log('take order for customer 1');
processOrders();
console.log('complete order for customer 1');