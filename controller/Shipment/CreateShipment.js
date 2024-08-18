const ShipmentModel = require("../../models/ShipmentSchema/ShipmentSchema")

const createShipment=async(req,res)=>{

    const { InvoiceNo,
        OrderNo,
        Creater,
      TotalQty ,
        TotalCM
 
    }=req.body
    try {
        const shipment=await ShipmentModel.create({
            InvoiceNo,
        OrderNo,
        Creater,
      TotalQty,
        TotalCM
        })
        return res.status(200).json({
            data:shipment,
            message:'shipment data created successfully',
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


const getallshipmentdata=async(req,res)=>{
    try {
        const getalldata=await ShipmentModel.find()

        return res.status(200).json({
            data:getalldata,
             message:'get all data for shipment ',
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

const deleteshipmentdata=async(req,res)=>{
 
    const id=req.params._id
try {
const deletedata=await ShipmentModel.findByIdAndDelete(id)
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
const updateshipmentdata=async(req,res)=>{

    const { InvoiceNo,
        OrderNo,
        Creater,
      TotalQty ,
        TotalCM
 
    }=req.body
    const id=req.params._id
try {
const updatedata=await ShipmentModel.findByIdAndUpdate({_id:id},{$set:{ 
    InvoiceNo,
        OrderNo,
        Creater,
      TotalQty ,
        TotalCM}},{new:true})
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
    createShipment,
    getallshipmentdata,
    deleteshipmentdata,
    updateshipmentdata
}