// Assuming you have already done "npm install fernet"
let Fernet = require('./node_modules/fernet/fernet.js');
let secret = new Fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=');

console.log(`Shhhh... ${secret}`);

// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcYdh0TUeRHNKIJtT1U49eE87GdEr--oNvMVF6WAuukSwgxlNZF1uslxrkQ-HiTwmS1IMrKmTd7f3nRcd6y8QQMpFmlwVhuwAzEIrdjFK3Z399QaLJqPHsjh646Iap4HD__js8zRwUQi34DmZps6VCM0QGHtrC51WZ678_j6CQOOQvN1qv8rYso_D1V7zjnvNmxFmC';
let token = new Fernet.Token({secret: secret, token: message, ttl:0});
token.decode();

console.log(`Tokeeennn: ${JSON.stringify(token)}`);
