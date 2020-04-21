const http = require("http");
const fs = require('fs');
const url = require('url');
const path = require('path');
const host = '127.0.0.1';
const port = '3000';
const mime = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css",
    "docx": "application/msword"
};
http.createServer((req, res) => {
    const pn = url.parse(req.url).pathname;
    let fn;
    if (pn === '/'){
        fn = 'index.html';
    }
    else {
        fn = path.join(process.cwd(), pn);
    }
    try{
        fs.accessSync(fn, fs.F_OK);
        let fStr = fs.createReadStream(fn);
        let mtype = mime[path.extname(fn).split(".")[1]];
        res.writeHead(200, {'Content-Type': mtype});
        fStr.pipe(res);
    } catch(e) {
        console.error('File do not exist: ' + fn);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found\n');
        res.end();
        return;
    }
    return;
}).listen(port, host, () => {
    console.log(`Server running at ${host}:${port}`);
})