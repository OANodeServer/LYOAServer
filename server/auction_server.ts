import * as express from 'express';
import {Server} from "ws";

let bodyParser = require('body-parser');
const app = express();
//接收json数据
 app.use(bodyParser.json());
 //extended:true代表可以接收任何数据类型的数据
 app.use(bodyParser.urlencoded( { extended : true } ));
/*任务模拟数据*/
export class Hometask {
    constructor(
        public taskId:number,
        public taskTitle:string,
        public userName:string
    ) {}
}
const hometasks:Hometask[] = [
    new Hometask(1,"请做一个大神",'范小余' ),
    new Hometask(2,"请做一顿大牛",'石大牛' ),
    new Hometask(3,"请做一顿狂拽炫富",'许磊' )
];

app.get('/',(req,res) => {
    res.send("hello express");
});
app.get('/hometasks',(req,res) => {

    res.json( hometasks );
});
/*用户模拟数据*/
export class User {
    constructor(
        public mobile:number,
        public pwd:string
    ) {}
}
const users:User[]={'users':[
    new User(13874824705,'123456'),
    new User(13800000000,'000000')
    ]
};
    app.get('/api/users',(req,res) => {
        res.json( users );
        console.log(JSON.stringify(users))
    });
app.post('/api/users',(req,res) => {
    if(req.body.mobile==='13600000000'){
        res.json( {"success":true,"message":"register success!"} );

    }else {
        res.json( {"success":false,"message":"phone number invalid!"} );

    }
    console.log(req.body)
    console.log(JSON.stringify(users))

});


const server = app.listen(8000,"localhost",() => {
    console.log("服务已经启动，地址是:http://localhost:8000");
});

const wsServer = new Server({port:8085});
wsServer.on("connection",websocket => {
    websocket.send("websocket:这个内容是服务器推送的");
    websocket.on("message",message =>{
        console.log("收到客户端的消息:"+message)
    })
})
setInterval( () => {
    if(wsServer.clients){
        wsServer.clients.forEach( client => {
            client.send("这是定时推送")
        })
    }
},2000)