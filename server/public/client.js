$(document).ready(onReady);

function onReady(){
    //clickhandlers
    $('#addButton').on('click', addition);
    $('#minusButton').on('click', subtract);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#EqualsButton').on('click', submitEquation);
    $('#clearButton').on('click',onClear);

}
let add = '+'
let minus = '-'
let multiplication = '*'
let division = '/'

let inputArray = [
    {
        inputOne:'',
        inputTwo:'',
        calcOperator:'',
        finalResult:''
    }
]

function submitEquation() {
    let firstInput = $('#numberOne').val()
    let secondInput = $('#numberTwo').val()
    inputArray.inputOne = firstInput
    inputArray.inputTwo = secondInput
    $.ajax({
        method:'POST',
        url:'/result',
        data:inputArray[0]
    }).then((response) => {

    })
    $.ajax({
        method:'GET',
        url: '/answer'
    }).then((response) => {
        $('#answer').text(response[response.length].finalResult)
    })
}

//clear function//
function onClear() {
    $('#numberOne').val('');
    $('#numberTwo').val('');
   
}

function renderCalculation(array){
    $('#calculationList').empty();
    for(let i = 0; i< array.length; i++){
        $('#calculation list').append(`
        <li>${array[i].inputOne} ${array[i].calcOperator} ${array[i].finalResult}</li>
        `)
    }
}

function addition(){
    inputArray[0].operator = add;
}
function subtract(){
    inputArray[0].operator = minus;
}
function multiply(){
    inputArray[0].operator = multiply;
}
function divide(){
    inputArray[0].operator = divide;
}

