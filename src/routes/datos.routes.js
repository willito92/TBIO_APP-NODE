const {Router}= require('express')
const router = Router()
const {isAuthenticated}= require('../helpers/auth');


const{ renderDatosForm,}=require('../controllers/datos.controller');
router.get('/datos', isAuthenticated, renderDatosForm)




module.exports = router