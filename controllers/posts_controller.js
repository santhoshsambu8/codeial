const Post = require("../models/post");

module.exports.create = function(req,res){

    

    console.log('post create is called');

    // const post1 = new Post({content: req.body.content,user: req.user._id});

    Post.create({content: req.body.content,user: req.user._id})
    .then((post) => {

        return res.redirect('back');

    })
    .catch((err) => {
        console.log('error in creating the post');
        return
    })


}



    // Post.create({
    //     content: req.body.content,
    //     user: req.user._id
    // },function(err,post){

    //     if (err){
    //         console.log('error in creating a post');
    //         return
    //     }

    //     return res.redirect('back');

    // });