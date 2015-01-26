var mime = require('mime');
var csvParser = require('./parserCSV.js');
var xmlParser = require('./parserXML.js');
var jsonParser = require('./parserJSON.js');
var xlsParser = require('./parserXLS.js');
var converter = require('json-2-csv');
var crystallize = require('crystallize');
var jsonxml = require('jsontoxml');

var GenericParser = function() { };

function cleanJSON(json) {
	var res = [];
	
	for (key in json) {
		res.push(json[key]["_source"]});
	}
	
	return res;
}

GenericParser.prototype.parse = function(filename, ext, callback) {
	
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
	converter.json2csv(cleanJSON(json), function(err, csv) {
		if (err) throw err;
		return csv;
	});
};

GenericParser.prototype.exportJSON = function(json) {
	return JSON.stringify(crystallize(cleanJSON(json)));
};

GenericParser.prototype.exportXML = function(json) {
	return jsonxml(cleanJSON(json));
};

module.exports = new GenericParser();