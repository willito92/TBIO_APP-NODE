const helpers = {};

helpers.isAuthenticated= (req, res, next)=>{
    if (req.isAuthenticated()){
        return next();

    }
    req.flash('error_msg', 'Necestitas Una Cuenta de Usuario')
    res.redirect('/users/signup');
}

module.exports =helpers