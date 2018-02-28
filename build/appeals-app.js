var express = require('express');
var app = express();
var ws_1 = require("ws");
var bodyParser = require('body-parser');

// 加载数据模块
var appealEngine = require('./apeals');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/appeal', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var appeals = appealEngine.getAppeals();
    res.json(appeals);
});
app.get('/appeal/:id', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var appeal = appealEngine.getAppeal(req.params.id);
    res.json(appeal);
});

var server = app.listen(3002, "localhost", function () {
    console.log("服务已经启动，地址是:http://localhost:3002");
});

var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function ( websocket ) {
    // websocket.send("websocket:这个内容是服务器推送的");
    setInterval(function () {
        websocket.send(
            JSON.stringify(appealEngine.getAppeals())
        );
    },600);
    websocket.on("message", function (message) {
        console.log("收到客户端的消息:" + message);
    });
});
