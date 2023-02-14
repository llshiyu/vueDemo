const fs = require("fs");

module.exports = {

    readfileSync: function (path) {//同步读取
        let data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");
    },

    readfile: function (path, recall) {//异步执行
        fs.readFile(path, function (err, data) {
            recall(err, data);   //回调recall函数，它是闭包函数，它会存储原来的response对象
        });
    },

    readImg: function (path, res) {
        fs.readFile(path, 'binary', function (err, file) {
            if (err) {
                console.log(err);
                return;
            } else {
                res.write(file, 'binary');
                res.end();
            }
        });
    }
}
