var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   let x = Math.random()*100;
   x = x.toFixed(3)
   
   if(req.query.x != undefined){
    x = parseFloat(req.query.x)
   }
    let num1=Math.cos(x);
    let num2=Math.asin(x);
    let num3=Math.asinh(x);
    res.render('computation', {x:x,cos:num1,asin:num2,asinh:num3});
  });
module.exports = router;