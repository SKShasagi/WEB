//console.log(2333);
//var a = 1, b = "123", c = new Date();
//console.log(typeof a);
//console.log(typeof b);
//console.log(typeof c);
//console.log(-a);
//console.log(-b);
//console.log(123 == "123");
//console.log(123 === "123");

//var arr = new Array();
//console.log(arr);
//arr = [1, 2, 3, 4, 5];
//console.log(arr);
//console.log(arr[3]);

//var arr = [1, 1.2, "abc", new Date(), function () { alert("hello world!") }];
//console.log(arr);
//arr[4]();

//for - in 不仅可以输出数组下标，而且还可以输出对象的属性
//for (var key in [4, 22, 55, 78]) {
//    console.log(key);
//}


//全局的方法或对象会被附加到window对象上
//demo()

//function demo() {
//    console.log("this is a demo");
//}

//demo();

//function add(num1, num2) {
//    if (num1 && num2) {
//        console.log(num1 + num2);
//    }
//    else {
//        console.log("不要传递0或者空参数！")
//    }
//}

//add(1, 0);
//add(1, 3);
//add("abd", 3)
//add("12", 3)

//回调函数
//function runfun(fn) {
//    if (fn) {
//        fn();
//    }
//}

////var fn = function() {
////    console.log("我是被传递过去的方法");
////}

////runfun(fn);

//runfun(function () {
//    console.log("我是被传递过去的方法");
//})

////lambda表达式
//runfun(() => {
//    console.log("我是被传递过去的方法");
//})

//返回值
//function demo() {
//    return 123;
//}

//var result = demo();
//console.log(result);

//返回方法
//function demo() {
//    return function () { alert("hello world!"); console.log("2333"); };
//}

//var result = demo();
//result();

//自调用函数（闭包）
//(function (name) {
//    console.log("Hello " + name );
//}) ("SK");

//((name) => {
//    console.log("Hello ");
//}
//    ) ("SK");

//js的作用域:除了函数中的变量是局部变量，其他变量都是全局变量
//function demo() {
//    var num = 123;
//    console.log(num);
//}

//demo();
//console.log(num);
//函数中变量的就近原则
//function f1() {
//    var i = 10;
//    function f2() {
//        i = 22;
//        console.log(i);
//    }
//    f2();
//}

//f1();

//function isSumLess(arrA, arrB) {
//    function sum(arr) {
//        var s = 0;
//        for (var i = 0; i < arr.length; i++)
//            s += arr[i]
//        return s
//    }
//    return sum(arrA) < sum(arrB)
//}
//var result = isSumLess([0, 0, 0], [1, 1, 1]);
//console.log(result);

//预解析:var 和 function 都会被程序运行时最先声明
//定义会被提升，但是赋值不会被提升
//console.log(a);
//var a = 12;

//console.log(typeof a);

//var a;

//function a() {
//    console.log("aaa");
//}

//console.log(typeof a);

//json对象 字面量对象 特性：一次性  作用:传递数据 
//var json = {
//    id: 1,
//    name: "zhangsan",
//    show: function () {console.log("id:"+this.id+" "+"name:"+this.name)}
//}

//json.show();

//var demo = [{ id: 1, name: "zhangsan" }, { id: 2, name: "lisi" }];
//((a) => {
   
//    for (var i = 0; i < a.length;i++) {
//        console.log("id:" + a[i].id + " " + "name:" + a[i].name);
//    }
//})(demo)

//object
//var obj = new Object();
//obj.id = 1;
//obj.name = "nihao";
//obj.show =  function () {
//    console.log(this);
//}

//obj.show();

//function demo() {
//    console.log(this);
//}

//demo();

//(function () {
//function Student(id,name,age) {
//    this.id = id;
//    this.name = name;
//    this.age = age;
//    this.show = function () {
//        console.log("id:" + this.id + " name:" + this.name + " age:" + this.age);
//    }
//}

//var stu1 = new Student(1, "zhangsan1", 11);
//stu1.show();
//var stu2 = new Student(2, "zhangsan1", 12);
//stu2.show();
//var stu3 = new Student(3, "zhangsan1", 13);
//stu3.show();

//var arr = [stu1, stu2, stu3];
//console.log(arr);

//    for (var element in stu3) {
//        console.log(element);
//    }

//寻找对象里的方法
    //for (var element in stu1) {
    //    if ((typeof stu1[element]) == "function") {
    //        console.log(element + ":" + stu1[element]);
    //    }
    //}

    //删除属性
//    console.log(stu1.id);
//    delete stu1.id;
//    console.log(stu1.id);
//})()

//console.log(Math.max(1, 2, 3, 4, 5, 22, 33, 7, 8));

//date函数
//function Tools() {
//    this.toStringDate = function (date) {
//        var year, month, day, hour, minute, second;
//        year = date.getFullYear();
//        month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()+1;
//        //if (date.getMonth() + 1 == 10) {
//        //    console.log(date.getMonth() + 1);
//        //    month = "0" + String(date.getMonth() + 1);
//        //}
//        //console.log(String(date.getMonth() + 1));
//        day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
//        hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
//        minute = date.getMinutes();
//        second = date.getSeconds();
//        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
//    }
//}

//var tool = new Tools();
//console.log(tool.toStringDate(new Date));

//Array
var arr = new Array();
//添加数组
arr.push(0);
console.log(arr);
arr.push(1);
console.log(arr);
arr.push(2);
console.log(arr);
arr.push(3);
console.log(arr);
//删除元素
arr.splice(1, 2);
console.log(arr);
//添加元素
arr.splice(0, 0, "abc");//arr.splice(索引，长度，插入值)
console.log(arr);
//替换元素
arr.splice(1, 1, "replace");
console.log(arr);
//pop  LIFO
arr.pop();
console.log(arr);
//shift FIFO
arr.shift();
console.log(arr);
