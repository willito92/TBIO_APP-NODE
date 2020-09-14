const {Router}= require('express')
const router = Router()
const {isAuthenticated}= require('../helpers/auth');


const{ renderDatosForm, renderRecoForm}=require('../controllers/datos.controller');
router.get('/datos', isAuthenticated, renderDatosForm)
router.get('/recoleccion', isAuthenticated, renderRecoForm)




module.exports = router