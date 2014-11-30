"use strict";

var qrcode = function(req, res, next){
    req.qrcode = function(){
        
    }
    next();
}

module.exports = exports = qrcode;