//implement a node app called fetcher.js
//it should take in two command line arguments:
//1. a URL 2. a local file path
//it should download the resource at the URL to the local path on your machine
//it should print out a message like "Downloaded and saved 1235 bytes to ./index.html"
//call the request and fs functions needed to implement the function
const request = require("request");
const fs = require("fs");
//use process.argv to get the command line arguments
const url = process.argv[2];
const path = process.argv[3];
//use request to fetch the data from the URL
request(url, (error, response, body) => {
  if (error === 404) {
    //if there is an error, print it directly to the console
    console.log(`error: ${error} - URL not found`);
  } else if (error) {
    console.log(`error:, ${error} - Error found, try again`);
    return;
  }
  fs.writeFile(`${path}`, body, function (error) {
    //if there is no error, write the file to the specified path
    if (error) {
      console.log("error:", error); //again, check if there is a different error
    } else {
      //if all good, print the message. Use body.length to get the number of bytes (1 byte = 1 character)
      console.log(
        `Downloaded and saved ${response.body.length} bytes to ${path}`
      );
    }
  });
});
