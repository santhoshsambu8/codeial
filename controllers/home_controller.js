const Post = require('../models/post');

module.exports.home  = function(req,res){

    console.log('tell me whats the issue');
    // return res.end('<h1>Helllo World!</h1>');
    // console.log(req.cookies);
    // res.cookie('user_id',25);

    // Post.find({},function(err,posts){

    //     return res.render('home',
        
    //     {title: "Sambu",
    //     posts : posts

    //     });

        

    // });

    // Post.find({}).populate('user').exec(function(err,posts){

    //     return res.render('home',
        
    //     {title: "Sambu",
    //     posts : posts

    //     });

    // });

    // working code
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path:'user'
        }
    })
    .exec()
    .then((posts) => {



        console.log(posts);
        return res.render('home',
        
        {title: "Sambu",
        posts : posts

        });

    })
    .catch(() => {

    });


    // var posts = Post.find({}).populate('user').exec();
    // console.log('i am called here');
    // console.log(posts[0])
    // return res.render('home',
    
    // {title: "Sambu",
    // posts : posts

    // });



    // Post.find({})
    // .populate('user')
    // // .populate({
    // //     path: 'comments',
    // //     populate: {
    // //         path: 'user'
    // //     }
    // // })
    // .exec()
    
    // .then((posts) => {

    //     return res.render('home',
        
    //     {title: "Sambu",
    //     posts : posts

    //     });

        
    // })
    // .catch((err) => {

    // })

    // .finally((hello) => {
    //     console.log("123");
    // })

}