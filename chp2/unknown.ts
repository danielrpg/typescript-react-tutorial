let val: unknown = 22;
val = "string value";
val = new Array();
// val.push(33); // property push does not exist
//console.log(val);
if(val instanceof Array) {
    val.push(33);
}

console.log(val);

