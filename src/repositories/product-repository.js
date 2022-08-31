const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.getProduct = async () => {
    const result = await Product.find({}, '_id title price description category active');

    return result;
}

exports.create = async (data) => {
    let produto = Product(data);
    await produto.save();
}

exports.put = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
       $set:{
        title: data.title,
        description: data.description,
        price: data.price,
        category: data.category,
        active: data.active
       } 
    });
}

exports.getById = async (id) => {
    const result = await Product.findOne({_id : id,}, "_id title description price category active")
    return result;
}

exports.delete = async (id) => {
    await Product.findByIdAndUpdate(id,{
        $set:{
            active : false
        }
    });
}
