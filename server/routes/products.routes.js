const {Router} = require('express')
const router = Router()

const {getProduct, postProduct, putProduct, delateProduct, findProduct} = require ('../controllers/products.controller')

router.route('/')
    .get(getProduct)
    .post(postProduct)
    

router.route('/:id')
    .put(putProduct)
    .delete(delateProduct)
    .get(findProduct)

module.exports = router;