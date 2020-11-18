const {Router}= require('express');
const router = Router();
const{renderIndex, renderAbout, renderDefinitions, renderMng, renderCategories}= require('../controllers/index.controller')


router.get('/', renderIndex)

router.get('/about', renderAbout)

router.get('/definitions', renderDefinitions)

router.get('/mng', renderMng)

router.get('/categories', renderCategories)





module.exports = router;