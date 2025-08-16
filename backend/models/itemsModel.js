const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    itemDetails: {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        imageURL: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    addedBy: {
        type: String,
        required: true,
    }
}, {
    timestamps: String,
})


module.exports = itemsModel = mongoose.model('Items', itemsSchema)