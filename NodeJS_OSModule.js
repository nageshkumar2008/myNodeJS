/**
 * Node JS - OS Module APIs
 */
 
 const os = require('os');
 
 console.log('OS Version - ' + os.version);
  console.log('OS Home Directory - ' + os.homedir);
  
  console.log('OS Host Name - ' + os.hostname);
   console.log('OS Type - ' + os.type);
   console.log('OS Release - ' + os.release);
    console.log('OS Total Memory - ' + os.totalmem);
   console.log('OS Free Memory - ' + os.freemem);
    console.log('OS UP Time - ' + os.uptime);
    
  const osParms = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem()
   }
   
   console.log('\n\nOperating System Parameters: \n');
   console.log(osParms);
    