'use strict';

var isObj = require('isobj');
var is = require('is-type');

var FlatDataCity = module.exports = function () {
  var blacklist = Array.prototype.slice.call(arguments);
  var isBlacklisted = function (obj) {
    return blacklist.some(function (type) {
      return obj instanceof type;
    });
  };

  return function (obj) {
    var result = [];
	
    (function iterator (obj, prefix) {
      var n = 0;
      var keys = Object.keys(obj);
      var len = keys.length;
      var key, val;

      for (; n < len; n++) {
        key = keys[n];
        val = obj[key];

        if (isObj(val) && !isBlacklisted(val)) {
          iterator(val, prefix + key + '_');
          continue;
        }
		
		var nb = parseInt(prefix.replace('_', ''));
		var param = {};
		param[prefix.replace(nb + '_', '') + key] = val;
		if (!result[nb]) {
			result[nb] = {};
		}
		var pref = prefix.replace(nb + '_', '') + key;
		if (is.nullOrUndefined(result[nb][pref]) && is.array(val)) {
			val = JSON.stringify(val);
		}
        result[nb][pref] = val.trim();
      }
    })(obj, '');

    return result;
  };
};