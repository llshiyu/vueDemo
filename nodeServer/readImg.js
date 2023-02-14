const http = require('http');
const server = http.createServer();
const path = require('path');
const optFile = require('./readFile');

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset= utf-8')

    // 跨域后台设置
    res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
        'Access-Control-Allow-Origin': '*',    // 允许访问的域（协议+域名+端口）
    });
    const url = req.url;
    let pathUrl;
    if(url==='/'){
        pathUrl = path.join(__dirname,'./file/img/img1.jpg')
    }else{
        pathUrl = path.join(__dirname,`./file/img/${url}`)
    }
    optFile.readImg(pathUrl, res);
})
server.listen(8090, () => {
    console.log('running at http://localhost or http://127.0.0.1:8090');
})

