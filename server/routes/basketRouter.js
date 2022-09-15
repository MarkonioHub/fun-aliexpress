const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.get('/:id', basketController.getBasket)
router.post('/update', basketController.updateBasket)

module.exports = router
