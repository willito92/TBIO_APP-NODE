const {Router}= require('express');
const router = Router();
const{renderIndex, renderAbout, renderDefinitions, renderMng, renderCategories, renderRespon, renderLaw}= require('../controllers/index.controller')


router.get('/', renderIndex)

router.get('/about', renderAbout)

router.get('/definitions', renderDefinitions)

router.get('/mng', renderMng)

router.get('/categories', renderCategories)

router.get('/responsabilities', renderRespon)

router.get('/law', renderLaw)





module.exports = router;