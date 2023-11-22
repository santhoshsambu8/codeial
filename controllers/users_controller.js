const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_profile',{title: "Profile"});
}

module.exports.signin = function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('user_sign_in',{title: "Codeial | Signin"});
}

module.exports.signup = function(req,res){

    if (req.isAuthenticated()){
        return res.redirect('/users/profile')
    }

    return res.render('user_sign_up',{title: "Codeial | Signup"});
}



module.exports.create = function(req,res){

    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    // const resu = User.findOne({email : req.body.mail});
    // console.log(!resu==false);

    User.findOne({email : req.body.mail}).then((user)=>
    
    {   
        console.log(user);
        if (!user){
            User.create(req.body).then((user)=>{
                return res.redirect('/users/sign-in'); 
            })
            .catch(err => {
                return res.redirect('back');
            })
            
        }
    }

    )
    .catch(err => {console.log('error in finding user')})


    // if (resu){

    //     debugger;

    //     console.log('apple');

    //     try {
    //         console.log('ball');
    //         User.create(req.body);
    //         return res.redirect('/users/sign-in');
    //     }

    //     catch (e){
    //         console.log(e);
    //         return
    //     }
        
    // }

    // else{
    //     return res.redirect('/users/sign-in');
    // }
}
//     
    
  

    

    // User.findOne({email : req.body.mail},function(err,user){

    //     if (err){
    //         console.log('error in finding in user while signing up');
    //         return
    //     }

    //     if (!user){

            
    //         User.create(req.body,function(err,user){

    //             if (err){
    //                 console.log('error while creating the user');
    //                 return
    //             }
    //             return res.redirect('/users/sign-in');

    //         });
    //     }

    //     else{
    //         return res.redirect('back');
    //     }

    // });

// }

module.exports.createsession = function(req,res){

    console.log("halllo")

    return res.redirect('/');

}

module.exports.destroysession = function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
    });
        


    return res.redirect('/');
}