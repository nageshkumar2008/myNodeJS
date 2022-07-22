/**
 * 
 */
 console.log('start');
const {readFile, writeFile} = require('fs');
var first, second = '';
 
readFile('./myfolder/first.txt','utf8',(err,result) => {
if(err) {
	console.log(err);
	return;
}
first = result;
console.log('Processing ASYNCH Task!!!');
readFile('./myfolder/second.txt','utf8',(err,result) => {

	if(err) {
		console.log(err);
		return
	}
second = result;

console.log('Good Till Here : ',first, second);


writeFile('./myfolder/NewFileWritten.txt',`The First and Second files written to NewFileWritten.txt: ${first},${second}`,{flag: "a"}, 
(err, result) => {
if(err) {
	console.log(err);
	return
}
//console.log(result);
console.log('Done with this task');
})})})
console.log('Starting next task');