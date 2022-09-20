const mongoose = require('mongoose')

const test = new mongoose.Schema({
    blue:{
        type: String
    }
},
{
    collection: "test"
})

const TestModel = mongoose.model('test', test)

module.exports = TestModel