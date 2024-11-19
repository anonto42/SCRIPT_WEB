import mongoose from 'mongoose';

const dataModel = mongoose.Schema({
    email:{
        type: String,
        required: true    
    },
    password:{
        type: String,
        required: true
    }
});

export const DATA = mongoose.model("data", dataModel);