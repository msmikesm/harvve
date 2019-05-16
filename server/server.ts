import { serverConf } from "./config/config";
import * as https from "https";
import * as url from "url";
import * as fs from "fs";


const privateKey = fs.readFileSync(`${__dirname}/config/SSL/privatekey.pem`);
const certificate = fs.readFileSync(`${__dirname}/config/SSL/certificate.pem`);
const options = {
    key: privateKey,
    cert: certificate
}


const server = https.createServer(options, (req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    if (pathName === "/") {

        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile(`${__dirname}/client/index.html`, "utf-8", (err, data) => {
        if (err) throw err;
        let output = data;
        res.end(output);
        });

    } else if (/\.js$/i.test(pathName)) {

        res.writeHead(200, { "Content-type": "text/javascript" });
        fs.readFile(`${__dirname}/client/js${pathName}`, (err, data) => {
        if (err) throw err;
        res.end(data);
        });

    } else if (/\.css$/i.test(pathName)) {

        res.writeHead(200, { "Content-type": "text/css" });
        fs.readFile(`${__dirname}/client${pathName}`, (err, data) => {
        if (err) throw err;
        res.end(data);
        });

    } else {

        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile(`${__dirname}/client/index.html`, "utf-8", (err, data) => {
        if (err) throw err;
        let output = data;
        res.end(output);
        });

    }
});


server.listen(serverConf.port, serverConf.hostname, () => {
  let address: string = `http://${serverConf.hostname}:${serverConf.port}`;
  let startBrowser: string =
    process.platform == "darwin"
      ? "open"
      : process.platform == "win32"
      ? "start"
      : "xdg-open";
  require("child_process").exec(`${startBrowser} ${address}`);
});
