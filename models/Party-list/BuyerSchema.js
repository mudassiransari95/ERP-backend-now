const mongoose=require('mongoose')


const BuyerSchema=new mongoose.Schema({
    PartyName:String,
    PartyEmail:String,
    Phone:String,
    Password:String,
    Address:String,
    BalanceType:String,
    OpeningBalance:String,
    Country:String,
    Remarks:String,
    Image:String
},
{
  timestamps:true  
})
const BuyerModel=mongoose.model('PartyBuyer',BuyerSchema)

module.exports=BuyerModel