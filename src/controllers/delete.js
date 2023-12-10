const Brand = require('../models/Brand')
const { request, response } = require('express')

/**
 * Crear Brand
 */
const detele = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombreBrand } = req.body
    try {
        const brandDB = await Brand.findOne({ nombreBrand })

        if(brandDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }
        
        const datos = {
            nombreBrand
        }
    
        const brand = new Brand(datos)
    
        await brand.save()
    
        return res.status(201).json(brand)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

module.exports = {
    deleteBrand
}