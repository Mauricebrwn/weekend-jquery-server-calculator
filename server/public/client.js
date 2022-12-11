$(document).ready(onReady);

function onReady(){
    //clickhandlers for operation/clear and equates button
    $('#addButton').on('click', addition);
    $('#minusButton').on('click', subtract);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#equalsButton').on('click', submitEquation);
    $('#clearButton').on('click',onClear);

}
//values for operation buttons
let add = '+'
let minus = '-'
let multiplication = '*'
let division = '/'
//creating array inot object to pull values
let inputArray = 
    {
        inputOne:'',
        inputTwo:'',
        operator:'',
        finalResult:''
    }


function sendIt(inputArray) {
    $.ajax({
        method:'POST',
        url:'/result',
        data:inputArray
    }).then((response) => {
console.log(response);
    })
}

function submitEquation() {
    let firstInput = $('#numberOne').val()
    let secondInput = $('#numberTwo').val()
    inputArray.inputOne = firstInput
    inputArray.inputTwo = secondInput
    console.log(inputArray);
    sendIt(inputArray);
    renderCalculation();
    appendList();
}
//clears out values in the inputs when pressing c button
function onClear() {
    $('#numberOne').val('');
    $('#numberTwo').val('');
   
}
//GETS the calculation from the server side
function renderCalculation(){
    $.ajax({
        method:'GET',
        url: '/answer'
    }).then((response) => {
        console.log(response);
        $('#answer').text(response[response.length - 1].finalResult)
    ;
    })
}
//appends the calculations into an unordered list
    function appendList() {
        $.ajax({
            method:'GET',
            url: '/answer'
        }).then((response) => {
//dont forget to empty before appending!!
    $('#calculationList').empty();
    for(let results of response)
        $('#calculationList').append(`
        <li>${results.inputOne} ${results.operator} ${results.inputTwo} = ${results.finalResult}</li>
        `)
    })
}
//function for operator buttons/routed for each one
function addition(){
    inputArray.operator = add;
}
function subtract(){
    inputArray.operator = minus;
}
function multiply(){
    inputArray.operator = multiplication;
}
function divide(){
    inputArray.operator = division;
}