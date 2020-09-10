require('dotenv').config();
const app = require('./server');
require('./database');



app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
})

//const Dato = require('./models/Datos');

//const insercion= new Dato({
  //  operacion: 'pruebaoperacion',
   // descripcion: 'descripcionprueba'
//})

//console.log(insercion)
//insercion.save((err, document)=>{
  //  if (err) console.log(err);
    //console.log(document)
//})


