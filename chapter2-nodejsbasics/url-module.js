const url = require("url");

const parsedURL = url.parse("http://localhost:3011/user?search=string");

const { protocol, port, host, query } = parsedURL;

console.log("protocol", protocol);
console.log("port", port);
console.log("host", host);
console.log("query", query);
