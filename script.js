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
        alertAnimation()
    }
    document.getElementById('total').innerHTML = `Valor total: R$${finalPrice},00`
}
function decreaseNumber(){
    var value = parseInt(document.getElementById('ticket-number').value, 10)
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('ticket-number').value = value;
    document.getElementById('increase-number').disabled = false;
    if(value <= 1){
        document.getElementById('ticket-number').value = 1
    }
    let finalPrice = value * 15;
    if (finalPrice < 15){
        finalPrice = 15
    }
    document.getElementById('total').innerHTML = `Valor total: R$${finalPrice},00`
}

function change_on_number_input(){
    var value = parseInt(document.getElementById('ticket-number').value, 10)
    value = isNaN(value) ? 0 : value;
    let finalPrice = value * 15;
    if (finalPrice >= 450){
        finalPrice = 450
        alertAnimation()
    }
    if (finalPrice < 15){
        finalPrice = 15
    }
    document.getElementById('total').innerHTML = `Valor total: R$${finalPrice},00`
}
function alertAnimation(){
    showAlert()
        setTimeout(() => {
            hideAlert()
        }, 5000);
}

function showAlert(){
    var alert = document.getElementById("alert")
    alert.classList.add('show')
}

function hideAlert(){
    var alert = document.getElementById("alert")
    const clas = alert.classList.contains('show')
    if (clas){
        alert.classList.remove('show')
        alert.classList.add('hide')
        setTimeout(() => {
            alert.classList.remove('hide')
        }, 2000);
    }
}

function close_alert(){
    var alert = document.getElementById("alert")
    alert.classList.remove('show')
    alert.classList.add('hide')
    setTimeout(() => {
        alert.classList.remove('hide')
    }, 2000);
}

function buyside(){
    var value = parseInt(document.getElementById('ticket-number').value, 10)
    value = isNaN(value) ? 0 : value;
    var alert = document.getElementById("alert")
    let finalPrice = value * 15;
    if (finalPrice > 450){
        finalPrice = 450
    }
    return finalPrice
}

