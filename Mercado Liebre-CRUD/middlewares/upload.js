const multer = require('multer'); // file uploads
const path = require('path');
let imageProductsPath = path.resolve(__dirname, 'public/images/products');

// Start File uploads config ---------------------------------------------------------
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, imageProductsPath)
    },
    filename: function(req, file, cb) {
        let fechaActual = new Date();
        cb(null, req.body.name + ' - ' + fechaActual.getDate() + "-" + fechaActual.getMonth() + "-" + fechaActual.getFullYear() + " " + fechaActual.getHours() + "_" + fechaActual.getMinutes() + "_" + fechaActual.getSeconds() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('La imagen sólo puede ser imagen JPG, PNG, JPEG.'))
        }
        callback(null, true)
    }
}).single('imageProducts');
// End File uploads config ---------------------------------------------------------
let uploadFile = {
    uploadFile: function(req, res, next) {
        upload(req, res, function(err) { // invocamos la función upload de multer para subir el archivo
            if (err) {
                console.log(err);
                return res.render("create", { title: err }); //corregir mensaje de error
            } else { next(); } // todo salió bien, continuamos al próximo middleware
        });
    }
}
module.exports = uploadFile;