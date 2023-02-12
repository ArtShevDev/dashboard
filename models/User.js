const { Schema, model } = require('mongoose');

const User = new Schema({
    nikname: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, default: '123123123' },
    birthday: { type: String, required: true },
    sex: { type: String, default: 'famale' },
    tel: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    images: {
        avatar: { type: String, default: 'icon-user-red.png' },
        otherimg: [ { type: String, default: 'urlImage.jpg' } ],
    },
    location: {
        country: { type: String, required: true},
        city: { type: String, required: true }
    },
    serviceinfo: {
        // !!! убогое временное решение !!!
        device: { type: String, default: ['tablet','laptop','phone'][Math.floor(Math.random() * 3)] },
        // !!! убогое временное решение !!!
        server: { type: String, default: `192.168.13.${Math.floor(Math.random() * 254)}` },
        // !!! убогое временное решение !!!
        sippir: { type: Number, default: Math.floor(Math.random() * 1000) }
    }
}, { timestamps: true });

module.exports = model('User', User);