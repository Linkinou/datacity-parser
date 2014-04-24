var GenericParser = require("../index.js");
var fs = require("fs");


describe("JSON parser",function(done){
    this.timeout(5000);
    it ("Should test .json file",function(done){
        var gp = GenericParser("json");
         gp.parse(__dirname + "/files/input/JSON_TelephonePublic.json", false, function(result, index) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/JSON_TelephonePublicParse.json");
                 stream.write(JSON.stringify(result));
                 done();
        });
    });
    it ("Should test .json file",function(done){
         GenericParser("json").parse(__dirname + "/files/input/JSON_test2.json", false, function(result, index) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/JSON_test2Parse.json");
                 stream.write(JSON.stringify(result));
                 done();
        });    
    });
    it ("Should test Test1.json file (should work)",function(done){
        GenericParser("json").parse(__dirname + "/files/input/gestion_erreur/Test1.json", false, function(result, index){
	    var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test1_json.json");
	    stream.write(JSON.stringify(result));
	    done();
	});
    });
    it ("Should test Test2.json file (should fail)",function(done){
        GenericParser("json").parse(__dirname + "/files/input/gestion_erreur/Test2.json", false, function(result, index){
            var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test2_json.json");
            stream.write(JSON.stringify(result));
            done();
        });
    });
    it ("Should test Test3.json file (should fail)",function(done){
        GenericParser("json").parse(__dirname + "/files/input/gestion_erreur/Test3.json", false, function(result, index){
            var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test3_json.json");
            stream.write(JSON.stringify(result));
            done();
        });
    });
    it ("Should test Test4.json1 file (should fail)",function(done){
        GenericParser("json").parse(__dirname + "/files/input/gestion_erreur/Test4.json1", false, function(result, index){
            var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test4_json.json");
            stream.write(JSON.stringify(result));
            done();
        });
    });
    it ("Should test Test5.json file (should fail)",function(done){
        GenericParser("json").parse(__dirname + "/files/input/gestion_erreur/Test5.json", false, function(result, index){
            var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test5_json.json");
            stream.write(JSON.stringify(result));
            done();
        });
    });
});
