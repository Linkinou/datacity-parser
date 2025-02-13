var fs = require('fs');
var csv = require('csv');
var events = require('events');
var chardet = require('chardet');

/**
 * Guess the delimiters of an input string by counting the most frequent one. 
 * @param  {string} text               input string to search
 * @param  {array} possibleDelimiters  array of delimiters (as characters)
 * @return {array}                     delimiters finded ordered by frequency of appearance
 */
function guessDelimiters(text, possibleDelimiters) {
    var lineDelim = 1;
    return possibleDelimiters.filter(weedOut);

    function weedOut (delimiter) {
        var cache = -1;
       
        return text.split('\n').every(checkLength);

        function checkLength (line) {
            if (!line) {
                return true;
            }
            var length = line.replace(/"[^"]*"/g,"").split(delimiter).length;
            if (cache < 0) {
                cache = length;
            }
            lineDelim++;  
            if ((cache === length && length > 1) === false && lineDelim > 3) {
                lineDelim = 1;
            }             
            return cache === length && length > 1;
        }
    }
}

/**
 * @class See also {@link parserJSON}, {@link parserXML}
 */
function parserCSV() {
}

parserCSV.prototype.__proto__ = events.EventEmitter.prototype;

/**
 * Convert a csv file opened by a path into json.
 * @param  {string}   fileName  path of the file
 * @param  {Boolean}  noRam     if true, it will send the parsed file line by line otherwise, all the parsed file will be send
 * @param  {function(result, index)} callback
 * @param {string} callback.result the parsed file line by line or the entire one
 * @param {string} callback.index the index of the line if noRam is true
 * @return {void}
 */
parserCSV.prototype.parse = function(fileName, callback) {
  var keys = [];
    var delimiter = "";
    var output = [];
    if (fs.existsSync(fileName) === false) {
        this.emit("error", new Error("The file doesn't exist!"));
        return;
    }
    var that = this;
    var type = chardet.detectFileSync(fileName);
    
    fs.readFile(fileName, "utf8", function(err, data) {
      if (err)
            that.emit('error', new Error("Problem of reading the file while parsing"));

      delimiter = guessDelimiters(data , [",", ";", "/", "\t", ":"]);
        
        if (delimiter.length === 0) {
            that.emit("error", new Error("pas de délimiteur détecté"));
            return;
        }
        else {
            delimiter = delimiter[0];
        }
        csv()
        .from(data, { delimiter: delimiter, escape: '"' })
        .on('record', function(row,index){
          if (index === 0) {
              keys = row;
              for (var key in keys) {
                keys[key] = keys[key].replace(/\W/g, '_');
              }
          }
          else {
              var tmp = {};
              for (var i in row) {
                  tmp[keys[i]] = row[i];
              }
              output.push(tmp);
          }
        })
        .on('end', function(count) {
         if (callback) {
             callback(output, count);
         }
        })
        .on('error', function(error){
          that.emit("error", error.message);
        });
   });
};

parserCSV.prototype.parseString = function(data, callback) {
	var keys = [];
    var delimiter = "";
    var output = [];
    
    var that = this;
    
      delimiter = guessDelimiters(data , [",", ";", "/", "\t", ":"]);
        
        if (delimiter.length === 0) {
            delimiter = ",";
            return;
        }
        else {
            delimiter = delimiter[0];
        }
        csv()
        .from(data, { delimiter: delimiter, escape: '"' })
        .on('record', function(row,index){
          if (index === 0) {
              keys = row;
              for (var key in keys) {
                keys[key] = keys[key].replace(/\W/g, '_');
              }
          }
          else {
              var tmp = {};
              for (var i in row) {
                  tmp[keys[i]] = row[i];
              }
              output.push(tmp);
          }
        })
        .on('end', function(count) {
         if (callback) {
             callback(output, count);
         }
        })
        .on('error', function(error){
          that.emit("error", error.message);
        });
};

module.exports = new parserCSV();