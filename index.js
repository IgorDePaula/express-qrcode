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
        
        /**
         * Set dimension of image
         * @param int w width
         * @param int h height    
         */
        var setDimension = function (w, h) {
            properties.push({name: 'chs', value: w + "x" + w});
        }
        
        /**
         * Set the charset of data
         * @param String charset Charset of data
         */
        var setCharset = function (charset) {
            properties.push({name: 'choe', value: charset});
        }
        
        /**
         * Set level of loss of content and margin of image
         * @param String level Level of loss
         * @param int margin Margin of image
         */
        var setCorrectionLevel = function (level, margin) {
            properties.push({name: 'chld', value: level + "|" + margin});
        }
        
        /**
         * Set data to encode in QRCode
         * @param {type} data
         */
        var setData = function (data) {
            properties.push({name: 'chl', value: data});
        }
        
        /**
         * Generate the URL og QRCode Image
         * @returns String
         */
        var getImage = function () {
            var parameters = properties.map(function (elem) {
                return elem.name + "=" + elem.value;
            }).join("&");
            return (endpoint + parameters);
        }

    }
    
    next();
}

module.exports = exports = qrcode;