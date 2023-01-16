const path = require('path');  
const controller = {

    home: (req, res) => {

        // res.sendFile(path.join(__dirname, '../views/home.html'));
        res.render('home')
    },

    descriptionPage: (req, res) => {
    
        //res.sendFile(path.join(__dirname, '../views/products/description-page.ejs'));
         res.render('description-page') 
    },
    
    cart: (req, res) => {
    
        // res.sendFile(path.join(__dirname, '../views/cart.html'));
        res.render('cart')
    },

   edicion: (req, res) => {
    
        // res.sendFile(path.join(__dirname, '../views/cart.html'));
        res.render('edicion')
    },

    nuevoProducto: (req, res) => {
    
        // res.sendFile(path.join(__dirname, '../views/cart.html'));
        res.render('nuevoProducto')
    },

    register: (req, res) => {

        // res.sendFile(path.join(__dirname, '../views/register.html'));
        res.render('register')
     },

    login: (req, res) => {

        // res.sendFile(path.join(__dirname, '../views/login.html'));
        res.render('login')
     }

}

module.exports = controller;