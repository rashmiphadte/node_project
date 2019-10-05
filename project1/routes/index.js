var fs;

fs = require('fs');

module.exports = function(app) {
  app.get("/", function(req, res) {
    return res.send("Welcome to  API.");
  });

  return fs.readdir('./routes/', function(err, files) {
    return files.forEach(function(file) {
      var route_name;
      if (file.indexOf("index.js") < 0) {
        route_name = file.slice(0, file.indexOf("-router.js"));

        console.log("hello",route_name, file)
        console.log("hello",route_name.toString() + "/", require("./" + file));
        return app.use("/" + route_name.toString() + "/", require("./" + file));
      }
    });
  });
};
