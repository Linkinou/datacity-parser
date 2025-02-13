Fonctionnalités API <br><br>
=====================

##Fichiers##
###disponible dans files.js<br>###
**exports.post = function(req, res)**<br>
ajouter un fichier : prend en paramètre l'objet req qui contient les informations sur l'id de l'utilisateur (autrement dit, sa clé publique)<br><br>
**exports.parse = function(req, res)**<br>
récupérer un fichier depuis un chemin : prend en paramètre l'objet req qui contient le chemin du fichier ainsi que l'id du user<br><br>
**exports.list = function(req, res)**<br>
lister tous les fichiers<br><br>
**exports.get = function(req, res)**<br>
récupérer un fichier (depuis la fonction exports.list)<br><br>
**exports.delete = function(req, res)**<br>
supprimer un fichier grâce à l'id et un chemin donné en paramètre<BR><br>
**exports.user = function(req, res)**<br>
récupérer tous les fichiers d'un utilisateur: la clé publique est donnée en paramètre pour rechercher ces fichiers

##Utilisateurs
###disponible dans users.js<br>###

**exports.create = function(req, res)**<br>
créer un nouvel utilisateur : les paramètres utilisées dans cette fonction sont contenus dans req, il s'agit du nom d'utilisateur, de la clé publique, de la clé privée<br><br>
**exports.get = function(req, res)**<br>
récupérer la liste de tous les utilisateurs<br><br>
**exports.delete = function(req, res)**<br>
supprimer un utilisateur : pour cela, l'id est utilisé

##Sources##
###disponible dans sources.js<br>###

**exports.post = function(req, res)**<br>
créer une source : utilise les foncchtions *generateProperJSON* et *storeSourceOnElasticSearch* disponibles dans ce même fichier<br><br>
**exports.get = function(req, res)**<br>
récupérer une source : a besoin de l'id du user et de la catégorie pour retourner les sources correspondantes<br><br>
**exports.getModel = function(req, res)**<br>
récupérer un model : la catégorie doit être fournie en paramètre<br><br>
**var generateProperJSON = function(file, databiding, id)**<br>
générer un object JSON en fonction des paramètres passés : il s'agit du fichier, du databiding et de l'id<br><br>
**var storeSourceOnElasticSearch = function(req, res, type)**<br>
stocker une source sur le serveur elasticsearch : cette opération nécessite le type de fichier<br><br>
**function renameProperty(obj, oldName, newName)**<br>
renommer une propriété attribuée à une source: prend en paramètre la source, l'ancien nom et le nouveau nom de propriété<br><br>

##Utils##
###disponible dans utils.js<br>###

**exports.datacityUtils = function() { var getUser = function(publicKey, callback) }**<br>
permet de récupérer un utilisateur grâce à son id