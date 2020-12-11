var http = require('http');
let userRequest = "5 + 5";
let array = userRequest.split(" ");
let a = array[0];
let b = array[2];
let operator = array[1];
let result = 0;
let stringResult = null;
if(operator=="+"){
    result = parseInt(a)+parseInt(b);
    stringResult = userRequest+" = "+ result;
    console.log("Server running at http://192.168.0.143:8000/plus/");
}
else if(operator=="-"){
    result = parseInt(a)-parseInt(b);
    stringResult = userRequest+" = "+ result;
    console.log("Server running at http://192.168.0.143:8000/minus/");
}
else if(operator=="*"){
    result = parseInt(a)*parseInt(b);
    stringResult = userRequest+" = "+ result;
    console.log("Server running at http://192.168.0.143:8000/multiply/");
}
else if(operator=="/"){
    result = parseInt(a)/parseInt(b);
    stringResult = userRequest+" = "+ result;
    console.log("Server running at http://192.168.0.143:8000/divide/");
}


var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(stringResult);
});

server.listen(8000, "192.168.0.143");

console.log(result);