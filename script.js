function increaseNumber(){
    var value = parseInt(document.getElementById('ticket-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('ticket-number').value = value
    document.getElementById('decrease-number').disabled = false;
    if (value >= 30){
        document.getElementById('ticket-number').value = 30;
    }
    let finalPrice = value * 15;
    if (finalPrice > 450){
        finalPrice = 450
    }
    document.getElementById('total').innerHTML = `Valor total: R$${finalPrice},00`
}
function decreaseNumber(){
    var value = parseInt(document.getElementById('ticket-number').value, 10)
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('ticket-number').value = value;
    document.getElementById('increase-number').disabled = false;
    if(value <= 0){
        document.getElementById('ticket-number').value = 0
    }
    let finalPrice = value * 15;
    if (finalPrice < 0){
        finalPrice = 0
    }
    document.getElementById('total').innerHTML = `Valor total: R$${finalPrice},00`
}

function change_on_number_input(){
    var value = parseInt(document.getElementById('ticket-number').value, 10)
    value = isNaN(value) ? 0 : value;
    let finalPrice = value * 15;
    if (finalPrice > 450){
        finalPrice = 450
    }
    document.getElementById('total').innerHTML = `Valor total: R$${finalPrice},00`
}

function buyside(){
    var value = parseInt(document.getElementById('ticket-number').value, 10)
    value = isNaN(value) ? 0 : value;
    let finalPrice = value * 15;
    if (finalPrice > 450){
        finalPrice = 450
    }
    return finalPrice
}

function maxAlert(){

}

