/**
 *   Copyright (C) 2014  Igor C. de Paula
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
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
        
         return {
            setDimension: setDimension,
            setCharset: setCharset,
            setCorrectionLevel: setCorrectionLevel,
            setData: setData,
            getImage: getImage
        }

    }
    
    next();
}

module.exports = exports = qrcode;