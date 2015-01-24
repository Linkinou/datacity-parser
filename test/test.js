var GenericParser = require("../index.js");
var fs = require("fs");
var assert = require('assert');

/*
 * Note: On Windows, it's better to launch mocha with these options:
 *  - $> mocha -R spec
 *  with that we have a better output on the windows command line
 */


// UNIT TEST


describe('Parser CSV', function () {
	this.timeout(5000);
    it ("Should test OSM_MTP_Pharmacie.csv file",function(done){
         var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_Pharmacie.json");
        GenericParser.parse(__dirname + "/files/input/OSM_MTP_Pharmacie.csv", function(result, index) {
            
            stream.write(JSON.stringify(result, null, 2));
			done();
        });
    });
     it ("Should test OSM_MTP_Recyclage.csv file",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_Recyclage.json");
        GenericParser.parse(__dirname + "/files/input/OSM_MTP_Recyclage.csv", function(result, index) {
            stream.write(JSON.stringify(result, null, 2));
            done();
        });
    });
     it ("Should test /files/output/OSM_MTP_Restaurants.json file",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_Restaurants.json");
        GenericParser.parse(__dirname + "/files/input/OSM_MTP_Restaurants.csv", function(result, index) {
            stream.write(JSON.stringify(result, null, 2));
            done();
        });
    });
     it ("Should test /files/output/OSM_MTP_StationService.json file",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_StationService.json");
        GenericParser.parse(__dirname + "/files/input/OSM_MTP_StationService.csv", function(result, index) {
            stream.write(JSON.stringify(result, null, 2));
            done();
        });
    });
     it ("Should test /files/output/OSM_MTP_TelephonePublic.csv.json file",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_TelephonePublic.json");
        GenericParser.parse(__dirname + "/files/input/OSM_MTP_TelephonePublic.csv", function(result, index) {
            stream.write(JSON.stringify(result, null, 2));
            done();
        });
    });
     it ("Should test /files/output/VilleMTP_MTP_EtabliPublic_2011.json file",function(done){
        var stream = fs.createWriteStream(__dirname+"/VilleMTP_MTP_EtabliPublic_2011.json");
        GenericParser.parse(__dirname + "/files/input/VilleMTP_MTP_EtabliPublic_2011_v3.csv", function(result, index) {
            stream.write(JSON.stringify(result, null, 2));
            done();
        });
    });
    
});


describe("JSON parser",function(done){
    this.timeout(50000);
	it ("Should test .json file",function(done){
        var gp = GenericParser;
         gp.parse(__dirname + "/files/input/index-de-legalite-des-sexes.json", function(result) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/index-de-legalite-des-sexes.json");
                 stream.write(JSON.stringify(result, null, 2));
                 done();
        });
    });
	it ("Should test .json file",function(done){
        var gp = GenericParser;
         gp.parse(__dirname + "/files/input/prix_des_carburants_j_7.json", function(result) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/prix_des_carburants_j_7.json");
                 stream.write(JSON.stringify(result, null, 2));
                 done();
        });
    });
	it ("Should test .json file",function(done){
        var gp = GenericParser;
         gp.parse(__dirname + "/files/input/test4.json", function(result) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/test4.json");
                 stream.write(JSON.stringify(result, null, 2));
                 done();
        });
    });
    it ("Should test .json file",function(done){
        var gp = GenericParser;
         gp.parse(__dirname + "/files/input/JSON_TelephonePublic.json", function(result) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/JSON_TelephonePublicParse.json");
                 stream.write(JSON.stringify(result, null, 2));
                 done();
        });
    });
    it ("Should test .json file",function(done){
         GenericParser.parse(__dirname + "/files/input/JSON_test2.json", function(result, index) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/JSON_test2Parse.json");
                 stream.write(JSON.stringify(result, null, 2));
                 done();
        });    
    });
    it ("Should test Test1.json file (should work)",function(done){
        GenericParser.parse(__dirname + "/files/input/gestion_erreur/Test1.json", function(result, index){
	    var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test1_json.json");
	    stream.write(JSON.stringify(result, null, 2));
	    done();
	});
    });
});

describe("XML parser",function(done){
    this.timeout(5000);
    it ("Should test .xml file",function(done){
         GenericParser.parse(__dirname + "/files/input/VilleMTP_MTP_ZATAntigone_2011.xml", function(result) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/VilleMTP_MTP_ZATAntigone_2011.json");
                 stream.write(JSON.stringify(result, null, 2));
                 done();
        });
    });
    it ("Should test .xml file",function(done){
         GenericParser.parse(__dirname + "/files/input/24440040400129_NM_NM_00010_LISTE_HORAIRES_PKGS_PUB_NM_STBL.xml", function(result, index) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/24440040400129_NM_NM_00010_LISTE_HORAIRES_PKGS_PUB_NM_STBL.json");
                 stream.write(JSON.stringify(result, null, 2));
                 done();
        });
    });
});
