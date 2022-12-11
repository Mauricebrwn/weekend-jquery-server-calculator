

$(document).ready(onReady);

function onReady(){
    //clickhandlers
    $('#addButton').on('click', addition);
    $('#minusButton').on('click', subtract);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#equalsButton').on('click', submitEquation);
    //$('#clearButton').on('click',onClear);

}
let add = '+'
let minus = '-'
let multiplication = '*'
let division = '/'

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
}
    //$.ajax({
      //  method:'POST',
        //url:'/result',
        //data:inputArray
    //}).then((response) => {

    //})
    // $.ajax({
    //     method:'GET',
    //     url: '/answer'
    // }).then((response) => {
    //     $('#answer').text(response[response.length - 1].finalResult)
    // })


//clear function//
//function onClear() {
  //$('#numberOne').val('');
   //$('#numberTwo').val('');
   
//}

function renderCalculation(){
    $.ajax({
        method:'GET',
        url: '/answer'
    }).then((response) => {
        console.log(response);
        $('#answer').text(response[response.length - 1].finalResult)
    })
    $('#calculationList').empty();
    for(let results of response){
        $('#calculationlist').append(`
        <li>${results.inputOne} ${results.calcOperator} ${results.finalResult}</li>
        `)
    }
}

function addition(){
    inputArray.operator = add;
}
function subtract(){
    inputArray[0].operator = minus;
}
function multiply(){
    inputArray[0].operator = multiplication;
}
function divide(){
    inputArray[0].operator = division;
}