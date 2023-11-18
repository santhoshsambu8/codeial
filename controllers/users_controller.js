const User = require('../models/user');

module.exports.profile = function(req,res){
    // return res.render('user_profile',{title: "Profile"});

    if (req.cookies.user_id != 0){

        User.findById(req.cookies.user_id).then((user) => {

            if (user){

                return res.render('user_profile',{
                    title:"User Profile",
                    user: user
                    
                });

            }

            else{
                return res.redirect('/users/sign-in');
            }


        })

    }

    else{
        return res.redirect('/users/sign-in');
    }
}

module.exports.signin = function(req,res){
    return res.render('user_sign_in',{title: "Codeial | Signin"});
}

module.exports.signup = function(req,res){
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

    User.findOne({email:req.body.mail}).then((user) => {

        if(user){

            if (req.body.password != user.password){
                return res.redirect('back');
            }

            res.cookie('user_id',user._id);
            return res.redirect('/users/profile');

        }

        else{
            return res.redirect('back');
        }

    })
    .catch(err => {

        console.log('error in finding user while signing in');
        return

    });

}

module.exports.signout = function(req,res){
    res.cookie('user_id',0);
    return res.redirect('/users/sign-in');
}