const express= require ('express');
const {createOrder, deleteOrder, getAllOrder, updateOrder, singleOrder}=require('../controller/orderManagement/orderList')
const router = express.Router()

router.post('/create',createOrder)
router.delete('/delete/:id',deleteOrder)
router.put('/update/:id',updateOrder)
router.get('/singleOrder/:id',singleOrder)
router.get('/getAllOrder',getAllOrder)


module.exports= router;