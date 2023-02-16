const http = require('http');
const server = http.createServer();
const path = require('path');
const optFile = require('./readFile');

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset= utf-8')

    // 跨域后台设置
    res.writeHead(200, {
        'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
        'Access-Control-Allow-Origin': '*',    // 允许访问的域（协议+域名+端口）
        'Access-Control-Allow-Headers': '*'
    });
    const method = req.method;
    const url = req.url;
    let pathUrl;
    switch (url) {
        case('/getList'):{
            pathUrl = path.join(__dirname, './file/list.json');
            break;
        }
        case('/getState'):pathUrl = path.join(__dirname, './file/state.json');break;
        case('/getSuggest'):pathUrl = path.join(__dirname, './file/suggest.json');break;
        default:pathUrl = path.join(__dirname, './file/list.json');break;
    }
    optFile.readfile(pathUrl, (err, dataStr) => {
        if (err) return res.end('没有找到文件')
        if(url==='/getList'){
            let postData = '';
            // 接收数据流 stream
            req.on('data', chunk => {
                // chunk 为二进制数据，所以需要转成字符串，而且数据是一点一点传过来的，也自然需要拼接
                postData += chunk.toString()
            });
            // 接收完成
            req.on('end', () => {
               console.log(postData);
            })
        }

        res.end(dataStr);
    });
})
server.listen(80, () => {
    console.log('running at http://localhost or http://127.0.0.1');
})
