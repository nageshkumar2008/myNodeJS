/**
 * Node JS - FS Module APIs
 */
 //const fs = require('fs');
 
 //console.log(fs)
 
 const {readFileSync, writeFileSync} = require('fs');

 const first = readFileSync('./myfolder/first.txt','utf8');
 const second = readFileSync('./myfolder/second.txt','utf8');
 
 console.log('First File Contents:\n' + first);
 console.log('\nSecond File Contents:\n' + second);
 
 writeFileSync(
 './myfolder/WriteToFileContents.txt',
`Here are the above two files First File - ${first}, Second File - ${second}\n`,
{flag: "a"}
 )
  
  