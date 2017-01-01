/*module.exports = function(app) {
  var modelNames = Object.keys(app.models);
  var models = [];
  modelNames.forEach(function(m) {
    var modelName = app.models[m].modelName;
    if (models.indexOf(modelName) === -1) {
      models.push(modelName);
    }
  });
  console.log('Models:', models);
};
*/


/*
var loopback = require('loopback');
var ds = loopback.createDataSource('mysql', {
  "host": "localhost",
  "port": 3306,
  "database": "nodi",
  "password": "",
  "user": "root",
  "connector": "mysql"
});

// Discover and build models from INVENTORY table
ds.discoverAndBuildModels('nodi_posts', {associations: false},
function (err, models) {

  console.log("aaa === ",err);
  console.log("mmmmm === ",models);

  // Now we have a list of models keyed by the model name
  // Find the first record from the inventory

  models.NodiPosts.findOne({}, function (err, inv) {
    if(err) {
      console.error(err);
      return;
    }
    //console.log("\nNodiPosts: ", inv);

    // Navigate to the product model

    inv.product(function (err, prod) {
      console.log("\nNodiPosts: ", prod);
      console.log("\n ------------- ");
    });

  });

});

*/
