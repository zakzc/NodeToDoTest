'esversion: 6';
const fs = require('fs');
const fileName = 'myLog.txt';

const log = (content) => {
  const timeCurrent = new Date().toISOString().
    replace(/T/, ' '). // replace T with a space
    replace(/\..+/, ''); // delete the dot and everything after
  var conteudo = "On: " + timeCurrent + " => " + content + '\n';
  fs.appendFileSync(fileName, conteudo, function(err) {
    if (err) throw err;
    console.log('There was an error.');
  });
  console.log('Log file updated on %s', timeCurrent);
};

module.exports = log;
