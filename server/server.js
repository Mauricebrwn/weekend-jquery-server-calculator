let serverInput ;
let serverAnswer = [];

let total ;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}))

app.post('/result', (req, res) => {
    console.log(req.body);
    serverInput = req.body
    if(serverInput.operator === '+') {
        return serverInput.finalResult = Number(serverInput.inputOne) + Number(serverInput)
        //return serverInput.finalResult = total
    }
    else if(serverInput.operator === '-'){
        total = Number(serverInput.inputOne) - Number(serverInput)
        return serverInput.finalResult = total
    }
    else if(serverInput.operator === '*'){
        total = Number(serverInput.inputOne) * Number(serverInput)
        return serverInput.finalResult = total
    }
    else if(serverInput.operator === '/'){
        total = Number(serverInput.inputOne) / Number(serverInput)
        return serverInput.finalResult = total
    }
    //answerOne.finalResult = total
    serverAnswer.push(serverInput);
    res.sendStatus(201);
    console.log('hi')
})

app.get('/answer', (req, res) => {
    res.send(serverAnswer);
})


app.listen(PORT,() => {
    console.log()
})