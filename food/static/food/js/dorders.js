var dcart = document.querySelector('#dcart');
var dtotal = document.querySelector('#dtotal');

function addBeverage(did) {
    // get pizza name
    beverageId = '#bev' + did;
    
    var name = document.querySelector(beverageId).innerHTML;
    var radio = 'beverage' + did;
    var pri = document.getElementsByName(radio);
    var size, price;
    if (pri[0].checked) {
        price = pri[0].value;
        size = 'M';
    }
    else {
        price = pri[1].value;
        size = 'L';
    }
    var orders = JSON.parse(localStorage.getItem('orders'));

    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    // saving item and total in
    
    orders[cartSize] = [name, size, price];
    localStorage.setItem('orders', JSON.stringify(orders));
    total = Number(total) + Number(price);
    localStorage.setItem('total', total);
    
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    butto = '<div class = "del" onclick = "removeBeverage(' + cartSize + ')">x</div>';
    
    dtotal.innerHTML = 'Total: ' + total + ' $';
    dcart.innerHTML += '<li>' + name + ' ' + size + ': ' + price + ' $' + butto + ' </li>';
}

function dshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    
    dcart.innerHTML = '';
    for (let i = 0; i < cartSize; i++) {
        butto = '<div class = "del" onclick = "removeBeverage(' + i + ')">x</div>';
        dcart.innerHTML += '<li>' + orders[i][0] + ' ' + orders[i][1] + ': ' + orders[i][2] + '$' + butto + '</li>';
    }
    dtotal.innerHTML = 'Total: ' + total + ' $';
}

function removeBeverage(n) {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n, 1);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    dshoppingCart();
}



dshoppingCart();
