"use strict";

var qrcode = function (req, res, next) {
    
    /**
     * Return a qrcode for put qrcode image on ejs template
     * @returns mixed
     */
    req.qrcode = function () {
        
        /**
         * Endpoint google to generate a qrcode image
         * @type String
         */
        var endpoint = "http://chart.googleapis.com/chart?";
        
        /**
         * Properties of qrcode image
         * @type Array
         */
        var properties = [];
        
        properties.push({name: 'cht', value: 'qr'});
        
        var setDimension = function (w, h) {
            properties.push({name: 'chs', value: w + "x" + w});
        }

    }
    
    next();
}

module.exports = exports = qrcode;