const express= require('express');

let app=express()

app.use(express.json())
const missions = require('./mission/misiones')
const mission_objectives = require('./mission/mission_objectives')
const characters = require('./player/character/caracter') 

app.use('/missions', missions)
app.use('/mission_objectives', mission_objectives)
app.use('/characters', characters)

app.get('/',async(req,res)=>{
    res.status(200).json({'message':'success'})
});

app.listen(8080);