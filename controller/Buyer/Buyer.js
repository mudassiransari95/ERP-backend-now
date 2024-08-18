const BuyerModel = require("../../models/Party-list/BuyerSchema")

const createbuyer=async(req,res)=>{
    const {
        PartyName,
        PartyEmail,
        Phone,
        Password,
        Address,
        BalanceType,
        OpeningBalance,
        Country,
        Remarks,
        Image  
    }=req.body
    try {
        const createdata=await BuyerModel.create({
            PartyName,
            PartyEmail,
            Phone,
            Password,
            Address,
            BalanceType,
            OpeningBalance,
            Country,
            Remarks,
            Image        
        })
        return res.json({
            data:createdata,
            message:'buyer data created successfully',
            success:true,
            error:false
        })
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

const getallbuyerdata=async(req,res)=>{
    try {
        const getalldata=await BuyerModel.find()
        return res.status(200).json({
            data:getalldata,
            message:'all buyer data get successfully',
            success:true,
             error:false
        })
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}
const deletebuyerdata=async(req,res)=>{
 
    const id=req.params._id
try {
const deletedata=await BuyerModel.findByIdAndDelete(id)
res.status(200).json({
    data:deletedata,
    message:'data deleted successfully',
    success:true,
    error:false
}) 
} catch (error) {
return res.json({
    message:error.message||error,
    success:false,
    error:true
})
}
    
}
const updatebuyerdata=async(req,res)=>{
    const {
        PartyName,
        PartyEmail,
        Phone,
        Password,
        Address,
        BalanceType,
        OpeningBalance,
        Country,
        Remarks,
        Image  
    }=req.body
    const id=req.params._id
try {
const updatedata=await BuyerModel.findByIdAndUpdate({_id:id},{$set:{
    PartyName,
    PartyEmail,
    Phone,
    Password,
    Address,
    BalanceType,
    OpeningBalance,
    Country,
    Remarks,
    Image  
}},{new:true})
res.status(200).json({
    data:updatedata,
    message:'data deleted successfully',
    success:true,
    error:false
}) 
} catch (error) {
return res.json({
    message:error.message||error,
    success:false,
    error:true
})
}
    
}

module.exports={
    createbuyer,
    getallbuyerdata,
    updatebuyerdata,
    deletebuyerdata
}