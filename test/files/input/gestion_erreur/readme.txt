les fichiers "Test1" sont les bons fichiers. Ils sont censés marcher.
Les fichiers "Test2" sont vides. Ils sont censés crasher.
Les fichiers "Test3" sont malformatés (csv: catégorie manquante, xml: balise manquante, json: guillements manquants. Ils sont censés crasher.
Les fichiers "Test4" ont des extensions erronés. Ils sont censés crasher.
Les fichiers "Test5" sont malformatés (json: mauvais séparateur (;), xml: ). Ils sont censés crasher.


TestJSON.js:

-sortie attendue: Test1.json réussit, tous les autres échouent.

résultat:
-4 tests échouent --->  Test1.json, Test2.json, Test4.json, Test5.json

Il y a 2 problèmes: -Test1.json devrait marcher car il contient du json conforme
       	 	    -Test3.json devrait échouer car il contient du json malformaté


entrée:

Test2.json est vide
Test3.json est malformaté
Test4.json1 a une extension erronée

sortie:

Pour Test2.json, il échoue bien mais un fichier est crée en sortie (output/Test2_json.json), il contient "[]"




TestCSV.js:

-sortie attendue: Test1.csv réussit, tous les autres échouent.

résultat:
-0 tests échouent

Il y a des problèmes: les fichiers Test2.csv, Test3.csv, Test4.csv1 devraient échouer mais ils passent les tests

entrée:

Test2.csv est vide
Test3.csv est malformaté
Test4.csv1 a une extension erronée

sortie:

Test2_csv.json contient: ,{}]
Test3_csv.json contient le contenu csv du fichier Test3.csv même si celui-ci est malformaté
Test4_csv.json est crée avec le contenu csv de Test4.csv1



TestXML.js:

-sortie attendue: Test1.xml réussit, tous les autres échouent.

-résultat:
-1 seul test échoue ---> Test3.xml, il est mal formaté


Il y a quelques problèmes: Test2.xml, Test4.xml3 passent les tests. Ils devraient échouer
       			   Test1_xml.json est le fichier de sortie correspondant à Test1.xml, il est crée mais la seule chose inscrite dans ce fichier est "false", alors que le fichier Test1.xml est en règle


entrée:

Test2.xml est vide
Test3.csv est malformaté
Test4.xml3 porte une extension erronée et réussit le test même si aucun fichier n'est crée en sortie

sortie:

Test1_xml.json est crée avec "false"
Test2_xml.json est crée avec "false"
Test3_xml.json est crée avec "false"
