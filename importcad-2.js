const { pipeline } = require('stream/promises');
const fs = require('fs');
const got= require('got')

async function run() {
  await pipeline(
    fs.createReadStream('testindoormap.zip'),
    got.stream.post('https://sindresorhus.com').on('response', response => {
      console.log("never reach this line")
      console.log(response.headers);
    }).resume()
  )
  console.log("done")
};
run().catch(console.error);
