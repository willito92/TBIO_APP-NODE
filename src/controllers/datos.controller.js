const datosCtrl={};
const Dato = require('../models/Datos');



datosCtrl.renderDatosForm= async(req, res) => {
   const datos = await Dato.find({email: req.user.email, operacion: 'Factura Generada'}).lean().sort({operacion: 'desc'});
   res.render('datos/all-datos', {datos});
}

datosCtrl.renderRecoForm= async(req, res) => {
   const datos = await Dato.find({email: req.user.email, operacion: 'Recoleccion y Transporte'}).lean().sort({operacion: 'desc'});
   res.render('datos/all-datos', {datos});
}

datosCtrl.renderContractData= async(req, res) => {
   const datos = await Dato.find({email: req.user.email, operacion: 'Contrato'}).lean().sort({operacion: 'desc'});
   res.render('datos/all-datos', {datos});
}


module.exports= datosCtrl;