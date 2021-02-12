const {Router}= require('express');
const router = Router();
const{renderIndex, renderAbout, renderDefinitions, renderMng, renderCategories, renderRespon, renderLaw, renderMsgSent, renderServices, renderProducts, renderGridinfo, renderGridinfo2}= require('../controllers/index.controller')


router.get('/', renderIndex)

router.get('/about', renderAbout)

router.get('/definitions', renderDefinitions)

router.get('/mng', renderMng)

router.get('/categories', renderCategories)

router.get('/responsabilities', renderRespon)

router.get('/law', renderLaw)

router.get('/scsent', renderMsgSent)

router.get('/services', renderServices)

router.get('/products', renderProducts)

router.get('/cvalor', renderGridinfo)

router.get('/docinfo', renderGridinfo2)





module.exports = router;