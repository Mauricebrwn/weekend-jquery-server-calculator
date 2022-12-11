let serverInput ;
let serverAnswer = [];

let total ;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5001;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}))
function Slice () {
    if(serverInput.operator === '+') {
        serverInput.finalResult = Number(serverInput.inputOne) + Number(serverInput.inputTwo)
        console.log(serverInput.finalResult);
        return serverAnswer.push(serverInput)
        //return serverInput.finalResult = total
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
app.post('/result', (req, res) => {
    console.log(req.body);
    serverInput = req.body
    Slice(serverInput)
    //answerOne.finalResult = total
    //serverAnswer.push(serverInput);
    res.sendStatus(201);
    console.log('hi')
})

app.get('/answer', (req, res) => {
    res.send(serverAnswer);
})


app.listen(PORT,() => {
    console.log()
})