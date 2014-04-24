var GenericParser = require("../index.js");
var fs = require("fs");


describe("XML parser",function(done){
    this.timeout(5000);
    it ("Should test .xml file",function(done){
         GenericParser("xml").parse(__dirname + "/files/input/VilleMTP_MTP_ZATAntigone_2011.xml", false, function(result, index) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/VilleMTP_MTP_ZATAntigone_2011.json");
                 stream.write(JSON.stringify(result));
                 done();
        });
    });
    it ("Should test .xml file",function(done){
         GenericParser("xml").parse(__dirname + "/files/input/24440040400129_NM_NM_00010_LISTE_HORAIRES_PKGS_PUB_NM_STBL.xml", false, function(result, index) {
             var stream = fs.createWriteStream(__dirname+"/../test/files/output/24440040400129_NM_NM_00010_LISTE_HORAIRES_PKGS_PUB_NM_STBL.json");
                 stream.write(JSON.stringify(result));
                 done();
        });
    });
    it ("Should test Test1.xml file (should be ok)",function(done){
        GenericParser("xml").parse(__dirname + "/files/input/gestion_erreur/Test1.xml", false, function(result, index) {
    var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test1_xml.json");
    stream.write(JSON.stringify(result));
    done();
	});
    });
    it ("Should test Test2.xml file (should fail)",function(done){
        GenericParser("xml").parse(__dirname + "/files/input/gestion_erreur/Test2.xml", false, function(result, index) {
    var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test2_xml.json");
    stream.write(JSON.stringify(result));
    done();
	});
    });
    it ("Should test Test3.xml file (should fail)",function(done){
        GenericParser("xml").parse(__dirname + "/files/input/gestion_erreur/Test3.xml", false, function(result, index) {
	    var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test3_xml.json");
	    stream.write(JSON.stringify(result));
	    done();
        });
    });
    it ("Should test Test4.xml3 file (should fail)",function(done){
        GenericParser("xml").parse(__dirname + "/files/input/gestion_erreur/Test4.xml3", false, function(result, index) {
            var stream = fs.createWriteStream(__dirname+"/../test/files/output/Test4_xml.json");
            stream.write(JSON.stringify(result));
            done();
        });
    });
});