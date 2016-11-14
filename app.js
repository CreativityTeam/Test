var express = require('express')
var app = express();

app.get('/',function(req,res){
    res.send("Hello World");
});
/**Set port */
app.set('port',(process.env.PORT || 3000));
/**Set up Server */
app.listen(app.get('port'),function(){
    console.log("Server is running at :", app.get('port'));
})