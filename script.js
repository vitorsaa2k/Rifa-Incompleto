function increaseNumber(){
    var value = parseInt(document.getElementById('ticket-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('ticket-number').value = value
    document.getElementById('decrease-number').disabled = false;
    if (value >= 30){
        document.getElementById('ticket-number').value = 30;
    }
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
    document.getElementById('decrease-number').disabled = false;
}