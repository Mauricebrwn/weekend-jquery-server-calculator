let inputArray = [];

let total ;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}))

app.post('/result', (req, res) => {
    let answerOne = req.body
    if(answerOne.operator === "+") {
        total = Number(answerOne.inputOne) + Number(answerOne)
    }
    else if(answerOne.operator === '-'){
        total = Number(answerOne.inputOne) - Number(answerOne)
    }
    else if(answerOne.operator === '*'){
        total = Number(answerOne.inputOne) * Number(answerOne)
    }
    else if(answerOne.operator === '/'){
        total = Number(answerOne.inputOne) / Number(answerOne)
    }
    answerOne.finalResult = total
    inputArray.push(answerOne);
    res.sendStatus(201);
})

app.get('/answer', (req, res) => {
    res.send(inputArray);
})


app.listen(PORT,() => {
    console.log(`hey!`)
})