var fs = require("fs");
var is = require('is-type');
var FlatDataCity = require('./FlatDataCity.js')();

function parserJSON() {}

parserJSON.prototype.parse = function(filename, callback) {
	fs.readFile(filename, "utf8", function (err, data) {
        if (err) throw err;
		var json = JSON.parse(data);

		if (is.object(json)) {
			for (var obj in json) {
				if (is.array(json[obj])) {
					json = json[obj];
					break;
				}
			}
		}
		
		var flat = FlatDataCity(json);
		callback(flat);
		
    });
};

parserJSON.prototype.parseString = function(json, callback) {
		if (is.object(json)) {
			for (var obj in json) {
				if (is.array(json[obj])) {
					json = json[obj];
					break;
				}
			}
		}
        var flat = FlatDataCity(json);
		callback(flat);
};

module.exports = new parserJSON();