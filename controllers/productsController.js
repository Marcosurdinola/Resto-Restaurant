
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    add: (req, res) => {

        db.Category.findAll()
            .then(categories => {
                return res.render('addproduct', {
                    categories,
                    title: "Agregar producto"
                })
            })
            .catch(error => console.log(error))
    },
    edit: (req, res) => {
        return res.render('editproduct')
    },
}