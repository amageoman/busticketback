
// import cors

const cors=require('cors')

const dataservice =require('./service/dataservice')


// import express
const express=require('express')
const { json } = require('express')

// create app
const app=express()

app.use(cors({origin:'http://localhost:4200'}))

app.use(express.json())



app.post('/bookseat',(req,res)=>{
    dataservice.bookseat(req.body.name,req.body.phone,req.body.start,req.body.end,req.body.seat).then(result=>{
        res.json(result)
    })
})

app.get('/getseats',(req,res)=>{
    dataservice.getseats().then(result=>{
        res.json(result)
    })
})


app.post('/cancelticket',(req,res)=>{
    dataservice.cancelticket(req.body.phone,req.body.name).then(result=>{
        res.json(result)
    })
})

app.listen(3000,()=>{
    console.log('server started at port number 3000');
})