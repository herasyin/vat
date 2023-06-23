//не даем писать дичь в проценты
window.onload = precent;
function precent() {
    var taxvalue = document.getElementById('taxrate').value;
    if (taxvalue == 0 || !parseInt(taxvalue) || parseFloat(taxvalue) >= 100) {
        taxvalue = 20;
    }
    document.getElementById('taxrate').value = parseFloat(taxvalue) + ' %';
};

//считаем это дерьмо
var sernum = 0;
var sernumprint = 0;
function countthis() {

var usernumber = document.getElementById('playernum').value;
var taxaction = document.getElementById('iruno').checked;
var history = document.getElementById('putithere').innerHTML;
var historyprint = document.getElementById('putithereprint').innerHTML;
var taxvalue = parseFloat(document.getElementById('taxrate').value);
    
if (taxaction != true){
    var whithouttax = usernumber / (100 + taxvalue) * 100;
    var tax = usernumber / (100 + taxvalue) * taxvalue;
    var withtax = usernumber;
    }
else {
    var withtax = usernumber / 100 * (100 + taxvalue);
    var tax = usernumber / 100 * taxvalue;
    var whithouttax = parseFloat(usernumber);
    }
document.getElementById('resulttable').style.display = 'table';
document.getElementById('printme').style.display = 'table';
document.getElementById('putithereprint').innerHTML = historyprint + '<tr class="valuezzz"><td>' + ++sernumprint + '</td><td>' + whithouttax.toFixed(2) + '</td><td>' + document.getElementById('taxrate').value + '</td><td>' + tax.toFixed(2) + '</td><td>' + parseFloat(withtax).toFixed(2) + '</td></tr>';
document.getElementById('putithere').innerHTML = '<tr class="valuezzz"><td>' + ++sernum + '</td><td>' + whithouttax.toFixed(2) + '</td><td>' + document.getElementById('taxrate').value + '</td><td>' + tax.toFixed(2) + '</td><td>' + parseFloat(withtax).toFixed(2) + '</td></tr>' + history;

document.getElementById('playernum').value = null;
};

//total vs subtotal
function ontotal() {
    document.getElementById('playernum').placeholder = 'Total';
};
function onsubtotal() {
    document.getElementById('playernum').placeholder = 'Subotal';
};

//запуск через Enter
document.getElementById('playernum')
    .addEventListener('keyup', function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        document.getElementById('butt').click();
    }
});
