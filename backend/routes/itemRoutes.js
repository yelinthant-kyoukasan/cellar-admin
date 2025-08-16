const router = require('express').Router();
const {
    addItem,
    getAllItems,
    deleteItem,
    updateItem,
} = require('../controllers/itemsController')

router.post('/additem', addItem)

router.get('/getallitems', getAllItems)

router.delete('/delete/:id', deleteItem)

router.put('/update/:id', updateItem)

module.exports = router;