/**
 * Node JS - Path Module APIs
 */
 
 const path = require('path');
 
 console.log('File Path Seperator - ' + path.sep);
 
 
 const filePath = path.join('/temp','temp1','test.txt');
 
 console.log(filePath);
 console.log('Path base Name - '+ path.basename(filePath));
 
 const absolute = path.resolve(__dirname,'temp','temp1','test.txt');
 console.log('Absolute path - ' + absolute);