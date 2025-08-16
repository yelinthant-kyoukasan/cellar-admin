const itemsModel = require('../models/itemsModel')
const bcrypt = require('bcrypt')

const addItem = async (req, res, next) => {
    try {
        const { title, desc, imageURL, rating, price, weight, quantity, email } = req.body;
        const item = await itemsModel.create({
            itemDetails: {
                title,
                desc,
                imageURL,
                rating,
                price,
                weight,
                quantity,
            },
            addedBy: email,
        })
        delete item.addedBy;
        res.status(200).json({item, status: true})
    } catch (err) {
        res.json({mssg: 'Error in adding item', status: false, err})
    }
}

const getAllItems = async (req, res, next) => {
    const items = await itemsModel.find({}).sort({createdAt: -1})
    const itemDetails = items.itemDetails;
    res.status(200).json({items, status: true})
}

const deleteItem = async (req, res, next) => {

    const { id } = req.params;
    console.log(id)

    itemsModel.findByIdAndDelete(id)
    .then(() => {
        res.send("Item deleted successfully!")
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({mssg: 'Error in deleting the item', status: false})
    })
}

const updateItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
        const { title, desc, imageURL, rating, price, weight, quantity, email } = req.body;
        console.log({ title, desc, imageURL, rating, price, weight, quantity, email })

        const newItem = await itemsModel.findByIdAndUpdate(id, 
            { 
                addedBy: email, 
                itemDetails: { 
                    title: title, 
                    desc: desc, 
                    imageURL: imageURL,
                    rating: rating,
                    quantity: quantity,
                    weight: weight,
                    price: price,
                }
            }, {
            new: true,
        })

        res.status(200).json({newItem, status: true})
    } catch (err) {
        console.log(err);
        res.status(404).json({mssg: 'Error in deleting the item', status: false})
    }    
}

module.exports = {
    addItem,
    getAllItems,
    deleteItem,
    updateItem
}