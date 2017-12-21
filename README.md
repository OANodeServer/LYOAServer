主页
任务

审批
（出勤休假：请假 出差 外出 加班 补卡）
（人事：转正 招聘 离职申请单 调岗申请单）
（财务：报销 备用金申请 付款申请 采购）
（行政：用车申请 物品领用 用印申请 通用审批 紧急问题绿色通道）
（其他：工作请示 合同审批）
考勤
（打卡 考勤表）
日志
（发日志 我发出的 我收到的 日志报表）
通知
会议


cnpm install 安装node包
cnpm install jquery
npm install jquery --save
cnpm install @types/jquery --save-dev
cnpm install admin-lte --save

日历备忘
js->typescript?

<!-- fullCalendar -->
<script src="../bower_components/moment/moment.js"></script>
<script src="../bower_components/fullcalendar/dist/fullcalendar.min.js"></script>


（1） 在项目中引入 moment.js 文件
以日期格式化库——moment.js为例，将此 js 复制到src/libs 目录中。
（2） 编写TypeScript 声明文件——moment.d.ts
（3） 使用 moment 库
在AppComponent组件中，导入moment库：

import * as moment from '../../libs/moment';
在src/libs目录下创建moment.d.ts文件。并根据moment.js 的代码，为其编写声明代码。

网上有angular2的JS插件库，是否可用，let me try

还是先用路由，把各个框架造出来再说吧。
点击菜单栏，判断在手机端的body内加上样式：sidebar-open

20171219(二)
webpack
ng build
ng build –prod Error: ENOENT: no such file or directory,
再多加个参数 ng build --base-href / --prod -no-extract-license


git clone lingyun@ip地址：项目名字.git


2017-12-20
ng g service too many symbolic links encountered
淘宝镜像惹的错

删除根目录下的node_modules；
重新安装：npm install；
更新cli版本：npm install -g @angular/cli

VPN下载
User:185246042@qq.com
Pw:xieyuxing1978
Vyprvpn:https://www.goldenfrog.online/signup/vyprvpn/confir


2017-12-21
创建node 服务器

nodeService文件夹
npm init -y 初始化文件夹
npm i @types/node --save 引入node类型定义文件
将typescript 编译成JS:新建tsconfig.json 并让IDE知道我要用该文件来编译typescript
在webstorm设置下 typescript->typescript language service 下全打钩
{
	"compilerOptions":{
	"target":"es5",
	"module":"commonjs",
	"emitDecoratorMetadata":true,
	"outDir":"build",
	"lib":["es6"]
	},
	"exclude":[
	"node_modules"
	]
}

import * as http from 'http';
const server =http.createServer((request,response) =>{
	response.end("hello Node");
})
server.listen(8080);
node build/hello_server.js

简化我们的手写代码量：
express框架提供了所有web应用都需要的常用功能
npm install express --save
装express的类型定义文件
npm install @types/express --save

npm install -g nodemon 监控源代码，当代码改变时自动重启node服务器
nodemon build/auction_server.js