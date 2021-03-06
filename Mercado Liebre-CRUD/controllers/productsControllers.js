let db = require('../database/models')
const multer = require('multer'); // file uploads
const path = require('path');

const controller = {
    // HOME
    list: async (req, res, next) => {
        try {
            let products = await db.Product.findAll()

            res.render('products', {
                products
            });

        } catch (error) {
            console.error(error)
        }

    },

    // DETALLE DE PRODUCTO
    detail: async (req, res) => {
        console.log(req.params.id)

        try {
            let product = await db.Product.findByPk(req.params.id);

            if (!product) {
                return res.redirect("/")
            } else {
                return res.render("detail", {
                    product
                });
            }
        } catch (error) {
            console.error(error)
        }
    },

    sales: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                where: {
                    category: 'in-sale'
                }
            })
            res.render("in-sale", {
                products
            });
            }catch (err) {
                console.error(err)
            }
    },

    
    create: (req, res, next) => { /* MUESTRA LA VISTA PARA CREAR PRODUCTOS */
        res.render('create')

    },

    // CREA EL PRODUCTO EN DB
    add: (req, res, next) => {
        console.log(req.body)

        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            description: req.body.description,
            image: req.files[0].filename
        });


        res.redirect("/");
    },

    // EDICIÓN DEL PRODUCTO
    edit: async (req, res) => {

        let productToEdit = await db.Product.findByPk(req.params.id);

        if (productToEdit == null) return res.redirect("/");

         res.render('edit', {
            productToEdit: productToEdit
        })
    },
    // EDITAR Y ACTUALIZAR UN PRODUCTO
    update: (req, res) => {

        db.Product.update({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            description: req.body.description
            
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/products/detail/" + req.params.id);
    },

    // ELIMINA UN PRODUCTO DE LA BASE DE DATOS
    destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/products");
    },
};

module.exports = controller;