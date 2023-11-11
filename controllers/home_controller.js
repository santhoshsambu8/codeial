module.exports.home  = function(req,res){
    // return res.end('<h1>Helllo World!</h1>');
    return res.render('home',{title: "Sambu"});
}