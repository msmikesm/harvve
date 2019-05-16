"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config/config");
var https = require("https");
var url = require("url");
var fs = require("fs");
var privateKey = fs.readFileSync(__dirname + "/config/SSL/privatekey.pem");
var certificate = fs.readFileSync(__dirname + "/config/SSL/certificate.pem");
var options = {
    key: privateKey,
    cert: certificate
};
var server = https.createServer(options, function (req, res) {
    var pathName = url.parse(req.url, true).pathname;
    if (pathName === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile(__dirname + "/client/index.html", "utf-8", function (err, data) {
            if (err)
                throw err;
            var output = data;
            res.end(output);
        });
    }
    else if (/\.js$/i.test(pathName)) {
        res.writeHead(200, { "Content-type": "text/javascript" });
        fs.readFile(__dirname + "/client/js" + pathName, function (err, data) {
            if (err)
                throw err;
            res.end(data);
        });
    }
    else if (/\.css$/i.test(pathName)) {
        res.writeHead(200, { "Content-type": "text/css" });
        fs.readFile(__dirname + "/client" + pathName, function (err, data) {
            if (err)
                throw err;
            res.end(data);
        });
    }
    else {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile(__dirname + "/client/index.html", "utf-8", function (err, data) {
            if (err)
                throw err;
            var output = data;
            res.end(output);
        });
    }
});
server.listen(config_1.serverConf.port, config_1.serverConf.hostname, function () {
    var address = "http://" + config_1.serverConf.hostname + ":" + config_1.serverConf.port;
    var startBrowser = process.platform == "darwin"
        ? "open"
        : process.platform == "win32"
            ? "start"
            : "xdg-open";
    require("child_process").exec(startBrowser + " " + address);
});
