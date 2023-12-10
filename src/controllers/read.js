const getBrand = async (req = request, res = response) => {// endpoint
    try {
        const { estado } = req.query

        const Brand = await Brand.find({ estado })

        return res.json(brand)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}


module.exports = {
    getBrand
}