// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Require's ************


const multer = require('multer');
const path = require('path');

// ************ Multer ************

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


// ************ Controller Require ************
const productsControllers = require("../controllers/productsControllers");

router.get("/", productsControllers.list); //
router.get("/detail/:id", productsControllers.detail); //
router.get('/in-sale', productsControllers.sales) //

/*** CREATE ONE PRODUCT ***/

router.get("/create/",  productsControllers.create); /* GET - Form to create */
router.post("/create/", upload.any(), productsControllers.add); 


/*** EDIT ONE PRODUCT ***/

router.get("/edit/:id", productsControllers.edit); /* GET - Form to create */
router.put("/edit/:id", productsControllers.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/

router.delete("/delete/:id", productsControllers.destroy); /* DELETE - Delete from DB */

module.exports = router;
