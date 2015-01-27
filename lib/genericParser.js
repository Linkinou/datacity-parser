var mime = require('mime');
var csvParser = require('./parserCSV.js');
var xmlParser = require('./parserXML.js');
var jsonParser = require('./parserJSON.js');
var xlsParser = require('./parserXLS.js');
var jscsv = require('json2csv');
var crystallize = require('crystallize');
var js2xmlparser = require("js2xmlparser");
var is = require('is-type');

var GenericParser = function() { };

function cleanJSON(json) {
	var res = [];
	
	for (key in json) {
		var obj = json[key]["_source"];
		if (obj.hasOwnProperty("slugsource"))
			delete obj["slugsource"];
		if (obj.hasOwnProperty("sourceName"))
			delete obj["sourceName"];
		res.push(obj);
	}
	
	return res;
}

function restructure(json) {
	for (var i = 0; i < json.length; i++) {
		json[i] = crystallize(json[i]);
	}
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

GenericParser.prototype.exportCSV = function(json, callback) {
	json = cleanJSON(json);
	var fields = [];
	for (key in json[0]) {
		fields.push(key);
	}
	
	jscsv({data: json, fields: fields}, function(err, csv) {
		if (err) throw err;
	  callback(csv);
	});
};

GenericParser.prototype.exportJSON = function(json) {
	json = cleanJSON(json);
	restructure(json);
	return JSON.stringify(json, null, 2);
};

GenericParser.prototype.exportXML = function(json) {
	json = cleanJSON(json);
	restructure(json);
	var obj = {result: json};
	return js2xmlparser("results", obj);
};

GenericParser.prototype.clean = function(json) {
	return cleanJSON(json);
}

module.exports = new GenericParser();