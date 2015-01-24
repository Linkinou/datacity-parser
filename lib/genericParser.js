var mime = require('mime');
var csvParser = require('./parserCSV.js');
var xmlParser = require('./parserXML.js');
var jsonParser = require('./parserJSON.js');
var xlsParser = require('./parserXLS.js');

var GenericParser = function() { };

GenericParser.prototype.parse = function(filename, callback) {
	var ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
	
	switch(ext) {
		case "json":
			jsonParser.parse(filename, function(result) {
				if (result.length == 0)
					callback("");
				else {
					callback(result);
				}
			})
			break;
		case "csv":
			csvParser.parse(filename, function(result) {
				if (result.length == 0)
					callback("");
				else {
					callback(result);
				}
			})
			break;
		case "xml":
			xmlParser.parse(filename, function(result) {
				if (result.length == 0)
					callback("");
				else {
					jsonParser.parseString(result, function(resJson) {
						callback(resJson);
					});
				}
			});
			break;
		case "xls":
			xlsParser.parse(filename, function(result) {
				if (result.length == 0)
					callback("");
				else {
					callback(result);
				}
			})
			break;
		default:
			callback("");
			break;
	}	
};

GenericParser.prototype.exportCSV = function(json) {

};

module.exports = new GenericParser();