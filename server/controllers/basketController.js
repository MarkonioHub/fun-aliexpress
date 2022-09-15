const ApiError = require('../error/ApiError');
const {Basket} = require('../models/models')

class BasketController {
    async getBasket(req, res) {
        const {id} = req.params
        const basket = await Basket.findOne( {where: { userId: id} } )
        return res.json(basket)
    }

    async updateBasket(req, res) {
        const {products, id} = req.body
        const parseProducts = JSON.parse(products)
        await Basket.update(
            { products: parseProducts},
            { where: { userId : id } }
        )
        const basket = await Basket.findOne( {where: { userId: id} } )
        return res.json(basket)
    }
}

module.exports = new BasketController()
