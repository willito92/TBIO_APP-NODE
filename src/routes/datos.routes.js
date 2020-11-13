const {Router}= require('express')
const router = Router()
const {isAuthenticated}= require('../helpers/auth');


const{ renderDatosForm, renderRecoForm, renderContractData}=require('../controllers/datos.controller');
router.get('/datos', isAuthenticated, renderDatosForm)
router.get('/recoleccion', isAuthenticated, renderRecoForm)
router.get('/contrato', isAuthenticated, renderContractData)



module.exports = router