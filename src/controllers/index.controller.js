const indexCtrl = {};


 indexCtrl.renderIndex=(req, res)=>{
    res.render('index')
};

indexCtrl.renderAbout=(req, res)=>{
    res.render('about')
};

indexCtrl.renderDefinitions=(req, res)=>{
    res.render('definitions')
};

indexCtrl.renderMng=(req, res)=>{
    res.render('mngtrash')
};

indexCtrl.renderCategories=(req, res)=>{
    res.render('categories')
};

indexCtrl.renderRespon=(req, res)=>{
    res.render('responsabilities')
};

indexCtrl.renderLaw=(req, res)=>{
    res.render('law')
};


module.exports= indexCtrl;