const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name : String,
});

const childSchema = new Schema({
    name : String,
    category : {type : Schema.Types.ObjectId, ref : 'Category'}
});

const parentSchema = new Schema({
    categories : [{type : Schema.Types.ObjectId, ref : 'Category'}],
    children : [childSchema]
},{collection:'parent'});


const Category = mongoose.model('Category', categorySchema);
const Child = mongoose.model('Child', childSchema);
const Parent = mongoose.model('Parent', parentSchema);

module.exports = {
    Category:Category,
    Child:Child,
    Parent:Parent
}