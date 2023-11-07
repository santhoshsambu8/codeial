const express = require('express');
const app = express();
const port = 8000;

app.listen(port,function(err){

    if (err){
        console.log(`Error in running my server: ${err}`);
    }
    console.log(`Server is run on por ${port}`);
});