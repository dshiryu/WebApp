const http = require('http');
const url = require('url');
const fs = require('fs'); 

http.createServer(function (req, res) {
  fs.readFile('rechner.html', function(err, data) {
  var parameter = url.parse(req.url, true).query;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Your BMI is: " + rechnen(parameter.gewicht, parameter.groesse));
  res.end();
});
}).listen(8080);

function rechnen(gewicht, groesse){
  let result = gewicht / (groesse*groesse/10000);
  return result.toFixed(2);
}

