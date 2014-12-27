
var esprima = require("esprima");
var escodegen = require("escodegen");
var fs = require('fs');




var code = escodegen.generate({
    type: 'BinaryExpression',
    operator: '+',
    left: { type: 'Literal', value: 40 },
    right: { type: 'Literal', value: 2 }
});


var tmp = esprima.parse("obj.foo + 42");


console.log("Hello World " + code);

console.log(JSON.stringify(tmp.body[0], null, "  "));

console.log("res =", escodegen.generate(tmp.body[0]));


var tt = eval("2 + 1");

console.log(tt);


fs.readFile('/var/tmp/hello.js', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var tmp = esprima.parse(data);
    console.log(escodegen.generate(tmp));
    console.log("OOLOL");

});

