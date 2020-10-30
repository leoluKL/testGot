const fs = require('fs');
const request = require('request');
const util = require('util');
const requestPost = util.promisify(request.post);
const requestGet = util.promisify(request.get);

async function run() {
  var filename='testindoormap.zip'
  var file = fs.createReadStream(filename)
  
  var re  = await requestPost({
    uri: "https://sindresorhus.com",
    body: file
  })
  console.log(re.statusCode+" "+re.statusMessage)
};
run().catch(console.error);
