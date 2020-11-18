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
    }, 
    
    monto:{
        type: Number
    },

    fecha: {
        type: Date
    },
    
    estado: {
        type: String
    }
    
},
{
    timestamps: true
})

module.exports= model('Dato', DatoSchema);