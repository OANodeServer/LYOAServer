var appeals = [
    {
        "checked":"",
        "id": 1,
        "appealStatus":"completed",
        "visitors":{
            "id":1200,
            "name":"石大牛sssss",
            "sex": "男",
            "phone":13200000000,
            "registered": "2012-02-02"
        },
        "location": {
            "street":"白马社区",
            "city":"宁乡",
            "state":"白马桥乡"
        },
        "appealDepartment":"城管局",
        "appealTitle":"白马桥下水道常年被收废品的拿去卖了",
        "appealDesc": "这里是描述白马桥下水道常年被收废品的拿去卖了",
        "appealTime": "2012-02-12",
        "appealImg":["./assets/img/bg1.jpg","./assets/img/bg2.jpg","./assets/img/bg3.jpg","./assets/img/bg4.jpg","./assets/img/bg5.jpg"],
        "appealVideo":"./assets/img/wx_camera_1519557335116.mp4"
    },
    {
        "id": 2,
        "appealStatus":"untreated",
        "visitors":{
            "id":1200,
            "name":"磊宝石",
            "sex": "男",
            "phone":13200000000,
            "registered": "2012-02-02"
        },
        "location": {
            "street":"玉潭镇",
            "city":"宁乡",
            "state":"新城社区02号"
        },
        "appealDepartment":"环保局",
        "appealTitle":"新城社区怎么没人搞卫生",
        "appealDesc": "一个可观察对象是一个事件流，我们可以用数组型操作符来处理它。\n" +
        "Angular 内核中提供了对可观察对象的基本支持。而我们这些开发人员可以自己从 RxJS 库中引入操作符和扩展。 我们会简短的讲解下如何做。\n" +
        "\n" +
        "快速回忆一下HeroService，它在http.get()返回的Observable后面串联了一个toPromise操作符。 该操作符把Observable转换成了Promise，并且我们把那个承诺返回给了调用者。\n" +
        "\n" +
        "转换成承诺通常是更好地选择，我们通常会要求http.get()获取单块数据。只要接收到数据，就算完成。 使用承诺这种形式的结果是让调用方更容易写，并且承诺已经在 JavaScript 程序员中被广泛接受了。\n" +
        "\n" +
        "但是请求并非总是“一次性”的。我们可以开始一个请求， 并且取消它，在服务器对第一个请求作出回应之前，再开始另一个不同的请求 。 像这样一个请求-取消-新请求的序列用承诺是很难实现的，但接下来我们会看到，它对于可观察对象却很简单。\n" +
        "\n" +
        "请求-取消-新请求的序列对于Promise来说是很难实现的，但是对Observable来说则很容易。",
        "appealTime": "2012-02-12",
        "appealImg":["./assets/img/bg1.jpg","./assets/img/bg2.jpg","./assets/img/bg5.jpg"],
        "appealVideo":"./assets/img/wx_camera_1519557335116.mp4"
    },
    {
        "id": 3,
        "appealStatus":"untreated",
        "visitors":{
            "id":1200,
            "name":"我曹",
            "sex": "女",
            "phone":13300000000,
            "registered": "2012-02-02"
        },
        "location": {
            "street":"大成桥",
            "city":"宁乡",
            "state":"大成高架桥"
        },
        "appealDepartment":"交通局",
        "appealTitle":"大成高架桥竟然有人摆摊",
        "appealDesc": "除了调用组件的delete方法之外，这个删除按钮的点击处理器还应该阻止点击事件向上冒泡我们并不希望触发的事件处理器，否则它会选中我们要删除的这位英雄delete处理器的逻辑略复杂当然，我们仍然把删除英雄的操作委托给了 hero 服务，不过该组件仍然负责更新显示：它从数组中移除了被删除的英雄，如果删除的是正选中的英雄，还会清空选择。我们希望删除按钮被放在英雄条目的最右边。 于是 CSS 变成了这样：",
        "appealTime": "2012-02-12",
        "appealImg":["./assets/img/bg1.jpg","./assets/img/bg3.jpg","./assets/img/bg4.jpg","./assets/img/bg5.jpg"],
        "appealVideo":"./assets/img/wx_camera_1519557335116.mp4"
    }
];

exports.getAppeals = function (){
    return appeals;
};

exports.getAppeal = function (id){
    for(var i=0; i < appeals.length; i++){
        if(appeals[i].id == id) return appeals[i];
    }
};