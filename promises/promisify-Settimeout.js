function printHelloWorld() {
  console.log("Hello, World!");
}
function wait(n) {
  var p = new Promise(r => setTimeout(r, n));
  return p;
}


var p = wait(5000);
p.then(printHelloWorld);
