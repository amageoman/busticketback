
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/busticket', {useNewUrlParser:true})

const Ticket = mongoose.model('Ticket',{
    name: String,
    phone:Number,
    start:String,
    end:String,
    seats:Array,
    
    ticketprice:Number
})

module.exports={
    Ticket
}