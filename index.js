const http = require('http')
const fs = require('fs')

// http://localhost:8080


http.createServer(function(req, res) {
    console.log("Server Active")
    console.log("Navigating to:", req.url)

    function servePage(reqPage) {
        fs.readFile(reqPage, (error, htmlCode) => {
            if (error) {
                throw error;
            }
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(htmlCode) 
        })
    }

    let requestedPage = "./404.html";
    // 404 default, if valid path requested then serve relevant html below

    if(req.url == "/") {
        requestedPage = "./index.html";
    }
    else if(req.url == "/about") {
        requestedPage = "./about.html";
    }
    else if(req.url == "/contact"){
        requestedPage = "./contact-me.html";
    }
    servePage(requestedPage);


}).listen(8080);

