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

indexCtrl.renderMsgSent=(req, res)=>{
    res.render('scsent')
};

indexCtrl.renderServices=(req, res)=>{
    res.render('services')
};

indexCtrl.renderProducts=(req, res)=>{
    res.render('products')
};

indexCtrl.renderGridinfo=(req, res)=>{
    res.render('cvalor')
};

indexCtrl.renderGridinfo2=(req, res)=>{
    res.render('docinfo')
};






module.exports= indexCtrl;