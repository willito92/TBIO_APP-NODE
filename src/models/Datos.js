const{Schema, model} = require('mongoose');
const DatoSchema= new Schema({
    operacion:{
        type: String,
        required:true
    
    },
    descripcion: {
        type: String,
        required: true 
    },
    
    email: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports= model('Dato', DatoSchema);