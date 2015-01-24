var node_xj = require("xls-to-json");
var fs = require("fs");

/**
 * @class See also {@link parserJSON}, {@link parserCSV}, {@link parserXML}
 */
function parserXLS() {}

/**
 * Convert a xls file opened by a path -> into json.
 * @param  {string}   fileName  path of the file
 * @param  {Boolean}  noRam     if true, it will send the parsed file line by line otherwise, all the parsed file will be send
 * @param  {function(result, index)} callback
 * @param {string} callback.result the parsed file line by line or the entire one
 * @param {string} callback.index the index of the line if noRam is true
 * @return {void}
 */
parserXLS.prototype.parse = function(fileName, callback) {
  node_xj({
    input: fileName,
    output: null
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
        callback(result, 0);
    }
  });
}

module.exports = new parserXLS();