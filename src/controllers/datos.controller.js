const datosCtrl={};
const Dato = require('../models/Datos');



datosCtrl.renderDatosForm= async(req, res) => {
   const datos = await Dato.find({email: req.user.email}).lean().sort({createdAt: 'desc'});
   res.render('datos/all-datos', {datos});
}



module.exports= datosCtrl;