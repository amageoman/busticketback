const db = require('./db')


bookseat = (name,phone,start,end,seat) => {
    var price={Thrissur:300,Ernakulam:200,Kollam:100,Trivandrum:0}
    return db.Ticket.findOne({ phone }).then(res => {


        if (res) {
            return res
        }
        else {

            const newticket = new db.Ticket({
                name,phone, start, end,
                seats: seat,
              
ticketprice:price[start]-price[end]

            })

            newticket.save();
            return "added"
        }
    })
}


getseats = () => {


    return db.Ticket.find().then(res => {
        result=[];
        if(res){

            for(i of res){
                for(j of i.seats){
                    result.push(j)
                }
            }
            return {
                bookedseats:result,
                message:res
            }
        }
 
   



    
    })
}

cancelticket=(phone,name)=>{

    return db.Ticket.findOneAndDelete({name:name ,phone:phone}).then(res=>{
if(res){
    return "deleted"
}
else{
    return "wrong input"
}
    })
}

module.exports = {
    bookseat, getseats,cancelticket
}