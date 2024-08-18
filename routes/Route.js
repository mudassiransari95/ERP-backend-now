const express=require('express')
const { createBuyerDue, BuyerDuelist, buyerdueSearch } = require('../controller/BuyerDue')
const { createAdminProfile, updateAdminProfile } = require('../controller/AdminProfile')
const { OrderCreate, getallorderdata } = require('../controller/reports/Order')
const { createpurchaseReport, getallpurchasereport, deletepurchasedata, updatepurchasedata } = require('../controller/reports/PurchaseReport')
const { createSalesReport, getallsalesreport, deletesaledata } = require('../controller/reports/SalesReport')
const { createSupplierDue, getallSupplierDue } = require('../controller/reports/SupplierDue')
const { createTransaction, getallTransaction } = require('../controller/reports/Transaction')
const { createSample, getallsampledata, deletesampledata, updatesampledata } = require('../controller/Sample/Sample')
const { createCurrency, getallcurrency } = require('../controller/Setting/AddNewCurrency')
const { createShipment, getallshipmentdata, deleteshipmentdata } = require('../controller/Shipment/CreateShipment')
const { getallSupplierdata, deletesupplierdata, createSupplier } = require('../controller/Buyer/Supplier')
const { getallbuyerdata, deletebuyerdata } = require('../controller/Buyer/Buyer')
const { createbuyer } = require('../controller/Buyer/Buyer')
// const { createOrder, deleteOrder, updateOrder, singleOrder, getAllOrder } = require('../controller/orderManagement/orderList')

const router=express.Router()






// sample file

router.post('/createsample',createSample)
router.get('/getallsample',getallsampledata)
router.delete('/delete/:_id',deletesampledata)
router.put('/update/:_id',updatesampledata)
// router.get('/searchsample')



// Report folder router

router.post('/createbuyerdue',createBuyerDue)
router.get('/getallbuyerlist',BuyerDuelist)
router.get('/buyerduesearch',buyerdueSearch)
router.post('/super-admin',createAdminProfile)
router.put('/update-admin-profile/:_id',updateAdminProfile)
router.post('/createorder',OrderCreate)
router.get('/getallorderdata',getallorderdata)
router.post('/createpuchasereport',createpurchaseReport)
router.get('/getallpurchasereport',getallpurchasereport)
router.delete('/deletepurchasedata/:_id',deletepurchasedata)
router.put('/updatepurchasedata/:_id',updatepurchasedata)


router.post('/createsalesreport',createSalesReport)
router.get('/getallsalesreport',getallsalesreport)
router.delete('/deletesaledata/:_id',deletesaledata)
router.post('/createsupplierdue',createSupplierDue)
router.get('/getallSupplierDue',getallSupplierDue)
router.post('/createtransaction',createTransaction)
router.get('/getalltransaction',getallTransaction)


router.post('/addnewcurrency',createCurrency)
router.get('/getallcurrency',getallcurrency)


router.post('/create',createShipment)

router.get('/getallshipmentdata',getallshipmentdata)
router.delete('/deleteshipmentdata/:_id',deleteshipmentdata)




router.get('/getallsupplierdata',getallSupplierdata)
router.post('/createSupplier',createSupplier)
router.delete('/deletesupplierdata/:_id',deletesupplierdata)
router.get('/allbuyerdata',getallbuyerdata)
router.delete('/deletebuyerdata/:_id',deletebuyerdata)
router.post('/createbuyer',createbuyer)
,
// getallshipmentdata

// router.post('/create',createOrder)
// router.delete('/delete/:id',deleteOrder)
// router.put('/update/:id',updateOrder)
// router.get('/singleOrder/:id',singleOrder)
// router.get('/getAllOrder',getAllOrder)



module.exports=router