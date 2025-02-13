var fs = require('fs');
var xml2js = require('xml2js');
var events = require("events");
var jsonParser = require('./parserJSON.js');

/**
 * Get the first array of an object
 * @param  {Object} obj the input object
 * @return {Array}     the element returned which contains an array of any type (string, object, etc...)
 */
function getFirstArray(obj) {
    for(var key in obj) {
        var elem = obj[key];

        if(Object.prototype.toString.apply(elem) === '[object Array]') {
            return elem;
        }

        if(typeof elem === "object") {
            var ret = getFirstArray(elem);
            if (ret) {
            	return ret;
            }
        }
    }
    return false;
}

/**
 * @class See also {@link parserCSV}, {@link parserJSON}
 */
function parserXML() {}

parserXML.prototype.__proto__ = events.EventEmitter.prototype;

/**
 * Convert a xml file opened by a path into json.
 * @param  {string}   fileName  path of the file
 * @param  {boolean}  noRam     if true, it will send the parsed file line by line otherwise, all the parsed file will be send
 * @param  {function(result, index)} callback
 * @param {string} callback.result the parsed file line by line or the entire one
 * @param {string} callback.index the index of the line if noRam is true
 * @return {void}
 */
parserXML.prototype.parse = function(fileName, callback) {
    var XMLparser = new xml2js.Parser({explicitArray: false});
    fs.readFile(fileName, function(err, data) {
        XMLparser.parseString(data, function (err, result) {
            var first = getFirstArray(result);

            // var str = JSON.stringify(first);
            // var parser = new jsonParser();
            callback(first, first.length);
            //parser.parseString(str, noRam, callback);
        });
    });
};
module.exports = new parserXML();