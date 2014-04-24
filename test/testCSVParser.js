var GenericParser = require("../index.js");
var fs = require("fs");
var assert = require("assert");

describe("Csv parser",function(){
     this.timeout(5000);
    it ("Should test OSM_MTP_Pharmacie.csv file",function(done){
         var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_Pharmacie.json");
        GenericParser("csv").parse(__dirname + "/files/input/OSM_MTP_Pharmacie.csv", true, function(result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]");
                done()
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
     it ("Should launch an error file not found",function(done){
         var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_Pharmacie.json");
         var gp = new GenericParser("csv");
         gp.on("error", function(err) {
            assert.equal(err.message, "undefined");
            done();
         });
         gp.parse(__dirname + "/files/input/fileunknown.csv", false, function(result, index) {
            stream.write(JSON.stringify(result));
            done();
        });
    });
     it ("Should test OSM_MTP_Recyclage.csv file",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_Recyclage.json");
        GenericParser("csv").parse(__dirname + "/files/input/OSM_MTP_Recyclage.csv", false, function(result, index) {
            stream.write(JSON.stringify(result));
            done();
        });
    });
    it ("Should test OSM_MTP_Restaurants.csv csv file",function(done){
         var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_Restaurants.json");
        GenericParser("csv").parse(__dirname + "/files/input/OSM_MTP_Restaurants.csv", true, function(result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]"); 
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
    it ("Should test OSM_MTP_StationService.csv file",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_StationService.json");
        GenericParser("csv").parse(__dirname + "/files/input/OSM_MTP_StationService.csv", true, function(result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]"); 
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
    
    
    it ("Should test OSM_MTP_TelephonePublic.csv file",function(done){
         var stream = fs.createWriteStream(__dirname+"/files/output/OSM_MTP_TelephonePublic.json");
        GenericParser("csv").parse(__dirname + "/files/input/OSM_MTP_TelephonePublic.csv", true, function(result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]"); 
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
    it ("Should test VilleMTP_MTP_EtabliPublic_2011.csv file",function(done){
           var stream = fs.createWriteStream(__dirname+"/files/output/VilleMTP_MTP_EtabliPublic_2011.json");
        GenericParser("csv").parse(__dirname + "/files/input/VilleMTP_MTP_EtabliPublic_2011_v3.csv", true, function(result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]"); 
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
    it ("Should test VilleMTP_MTP_FontainesPublic.csv file",function(done){
         var stream = fs.createWriteStream(__dirname+"/files/output/VilleMTP_MTP_FontainesPublic.json");
        GenericParser("csv").parse(__dirname + "/files/input/VilleMTP_MTP_FontainesPublic.csv", true, function(result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]"); 
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
    it ("Should test Test1.csv file (should work)",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/Test1_csv.json");
        GenericParser("csv").parse(__dirname + "/files/input/gestion_erreur/Test1.csv", true, function(result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]");
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
    it ("Should test Test2.csv file (should fail)",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/Test2_csv.json");
        GenericParser("csv").parse(__dirname + "/files/input/gestion_erreur/Test2.csv", true, function( result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]");
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
    it ("Should test Test3.csv file (should fail)",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/Test3_csv.json");
        GenericParser("csv").parse(__dirname + "/files/input/gestion_erreur/Test3.csv", true, function( result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]");
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
    it ("Should test Test4.csv1 file (should fail)",function(done){
        var stream = fs.createWriteStream(__dirname+"/files/output/Test4_csv.json");
        GenericParser("csv").parse(__dirname + "/files/input/gestion_erreur/Test4.csv1", true, function(result, index) {
            if (index == 1)
                stream.write("[");
            else if (result == null) {
                stream.write("]");
                done();
                return;
            }
            else
                stream.write(",");
            stream.write(JSON.stringify(result));
        });
    });
});



