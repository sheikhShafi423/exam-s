const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    console.log(`os = ${req.headers['sec-ch-ua-platform']}`);
    console.log(`browser = ${req.headers['sec-ch-ua']}`);
    console.log(`version = ${req.headers['sec-ch-ua-version']}`);
    console.log(req.headers['user-agent']);
    console.log(req.ip);
    console.log(req.ips);
    console.log(req.hostname);
    // try {
    //     const browser = req.useragent.browser;
    //     const version= req.useragent.version;
    //     const os= req.useragent.os;
    //     const platform= req.useragent.platform;
    //     const source= req.useragent.source;
    //     console.log(browser, version, os, platform, source);
    // } catch (error) {
    //     console.error("Error loading express-useragent:", error);
    // }
   
  res.send("Hello, Express server is running!");
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


