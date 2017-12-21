
2017-12-21
**创建node 服务器**

nodeService文件夹
npm init -y 初始化文件夹
npm i @types/node --save 引入node类型定义文件
将typescript 编译成JS:新建tsconfig.json 并让IDE知道我要用该文件来编译typescript
在webstorm设置下 typescript->typescript language service 下全打钩
`
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
}`


简化我们的手写代码量：
express框架提供了所有web应用都需要的常用功能
npm install express --save
装express的类型定义文件
npm install @types/express --save

npm install -g nodemon 监控源代码，当代码改变时自动重启node服务器
nodemon build/auction_server.js