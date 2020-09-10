const usersCtrl = {};
const User =require('../models/User');
const passport= require('passport');





usersCtrl.renderSignupForm = (req, res) => {
    res.render('users/signup');
}

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
}

usersCtrl.signup = async(req, res) => {
    const { nombre, email, password, confirmar } = req.body;
    const errors = [];
    if (password != confirmar) {
        errors.push({ text: 'La clave no coincide' });
    }
    if (password.length < 4) {
        errors.push({ text: 'Password muy corto' });
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            nombre,
            email,
            password,
            confirmar

        })

    }
    else {
        const emailUser =await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'El correo ya existe');
            res.redirect('/users/signup');
        }
        else{
            const newUser = new User({nombre, email, password});
            newUser.password=await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Usuario Guardado Correctamente');
            res.redirect('/users/signin');
        }
    }



};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/datos',
    failureFlash: true
});






usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Has cerrado la Sesion');
    res.redirect('/users/signin');
}







module.exports = usersCtrl
