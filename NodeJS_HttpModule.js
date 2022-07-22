/**
 * HTTP Module
 */
 const http = require('http');
 
 //console.log(http);
 
 const server = http.createServer((req,res) => {
 
console.log(req);
  /*res.end('<h1>Welcome to My Page</h1>');
 */
 
 if(req.url ==='/') {
 	res.end('Welcome to my home page!'); 
 }
 
 if(req.url === '/about') {
 	res.end("This is about a short history!");
 }
 
if(req.url === '/error') {
res.end(`<h1>Oops!</h1>
 <p>We Can not find the page you are looking for</p>
 <a href="/">Back to Home</a>`);
 }
 })
 
 server.listen(5555);