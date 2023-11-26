const http = require('http')

http.createServer(function(req, res){
  res.write("Hello i love aswathy :)");
  res.end();
}
).listen(3000);

console.log("Server started on port 3000");
