const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {type : String , required : true},
     description: { type: String, default: '' },
  color: { type: String, default: '#ffffff' },
  dueDate: { type: Date, default: null },
} , { timestamps: true });

const columnSchema = new mongoose.Schema({
    title:{ type : String , required : true},
    cards : [cardSchema],
})

const boardSchema = new mongoose.Schema({
    title :{ type: String , required : true},
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    columns :[columnSchema]
} , {timestamps: true})

module.exports = mongoose.model('Board' , boardSchema)