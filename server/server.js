//empty array to push into
let serverInput ;
let serverAnswer = [];

let total ;
//necessary to run page
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}))

//function to run depending on the operation selected on the client side
function Slice () {
    if(serverInput.operator === '+') {
        serverInput.finalResult = Number(serverInput.inputOne) + Number(serverInput.inputTwo)
        console.log(serverInput.finalResult);
        return serverAnswer.push(serverInput)
    }
    if(serverInput.operator === '-'){
        serverInput.finalResult = Number(serverInput.inputOne) - Number(serverInput.inputTwo)
        return serverAnswer.push(serverInput)
    }
    if(serverInput.operator === '*'){
        serverInput.finalResult = Number(serverInput.inputOne) * Number(serverInput.inputTwo)
        return serverAnswer.push(serverInput)
    }
    if(serverInput.operator === '/'){
        serverInput.finalResult = Number(serverInput.inputOne) / Number(serverInput.inputTwo)
        return serverAnswer.push(serverInput)
    }

}
//POST route for status/results
app.post('/result', (req, res) => {
    console.log(req.body);
    serverInput = req.body
    Slice(serverInput)
    res.sendStatus(201);
    console.log('hi')
})
//Get route for answer back
app.get('/answer', (req, res) => {
    res.send(serverAnswer);
})

//necessary for which port to be listened on 
app.listen(PORT,() => {
    console.log()
})