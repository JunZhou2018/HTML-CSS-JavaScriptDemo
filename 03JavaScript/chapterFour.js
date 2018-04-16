/**JavaScript 变量可以用来保存两种类型的值：基本类型值和引用类型值。基本类型的值源自以下
 * 5种基本数据类型：Undefined、Null、Boolean、Number 和String。基本类型值和引用类型值具有以下特点：
1.基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；
2.从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本；
3.引用类型的值是对象，保存在堆内存中；
4.包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针；
5.从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终都指向同一个对象；
6.确定一个值是哪种基本类型可以使用typeof 操作符，而确定一个值是哪种引用类型可以使用instanceof 操作符
*/

/**
 * 所有变量（包括基本类型和引用类型）都存在于一个执行环境（也称为作用域）当中，这个执
行环境决定了变量的生命周期，以及哪一部分代码可以访问其中的变量。以下是关于执行环境的几
点总结：
1.执行环境有全局执行环境（也称为全局环境）和函数执行环境之分；
2.每次进入一个新执行环境，都会创建一个用于搜索变量和函数的作用域链；
3.函数的局部环境不仅有权访问函数作用域中的变量，而且有权访问其包含（父）环境，乃至全
局环境；
4.全局环境只能访问在全局环境中定义的变量和函数，而不能直接访问局部环境中的任何数据；
5.变量的执行环境有助于确定应该何时释放内存。
 */

/**
 * JavaScript 是一门具有自动垃圾收集机制的编程语言，开发人员不必关心内存分配和回收问题。可
以对JavaScript 的垃圾收集例程作如下总结。
1.离开作用域的值将被自动标记为可以回收，因此将在垃圾收集期间被删除。
2.“标记清除”是目前主流的垃圾收集算法，这种算法的思想是给当前不使用的值加上标记，然
后再回收其内存。
3.另一种垃圾收集算法是“引用计数”，这种算法的思想是跟踪记录所有值被引用的次数。JavaScript
引擎目前都不再使用这种算法；但在IE 中访问非原生JavaScript 对象（如DOM 元素）时，这种
算法仍然可能会导致问题。
4.当代码中存在循环引用现象时，“引用计数”算法就会导致问题。
5.解除变量的引用不仅有助于消除循环引用现象，而且对垃圾收集也有好处。为了确保有效地回
收内存，应该及时解除不再使用的全局对象、全局对象属性以及循环引用变量的引用。
 */


/**
 * 4.1.1 动态的属性
 */
//对于引用类型的值，我们可以为其添加属性和方法，也可以改变和删除其属性和方法
var person = new Object();
person.name = "zhoujun";
console.log(person.name); //zhoujun

//不能给基本类型的值添加属性
var name="zhoujun";
name.age=27;
console.log(name.age);//undefined

/**
 * 4.1.2 复制变量值
 */
//对于引用变量，复制的其实是引用
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "zhoujun";
console.log(obj2.name);//zhoujun

/**
 * 4.1.3 传递参数
 */
//ECMAScript 中所有函数的参数都是按值传递的。
//也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样
// eg ---one----begin--
function addTen(num){
    num +=10;
    return num;
}
var count=20;
var result= addTen(count);
console.log(count);//20，没有变化
console.log(result);//30
// eg ---one----end--

// eg ---two----begin--
//obj与person指向同一个引用，所以修改obj属性，也会影响person
function setName(obj){
    obj.name = "zhoujun";
}
var person = new Object();
setName(person);
console.log(person.name);//zhoujun
// eg ---two----end----

// eg ---three----begin--
function setName(obj){
    obj.name = "zhoujun";
    obj = new Object();
    obj.name = "Luoxiaobai";
}
var person = new Object();
setName(person);
console.log(person.name);//zhoujun
// eg ---three----end----

/**
 *4.1.4 检测类型
 */
// eg ---one----begin--
var s = "zhoujun";
var b = true;
var i=22;
var u;
var n = null;
var o = new Object();
console.log(typeof s);//string
console.log(typeof b);//boolean
console.log(typeof i);//number
console.log(typeof u);//undefined
console.log(typeof n);//object
console.log(typeof o);//object
// eg ---one----end----
/**
 * 4.2 执行环境及作用域
 */
//每个环境都可以向上搜索作用域链，以查询变量和函数名；但任何环境都不能通过向下搜索作用域链而进入另一个执行环境。
// eg ---one----begin--
var color = "blue";
function changeColor(){
    if(color === "blue"){
        color = "red";
    }else{
        color = "blue";
    }
}
changeColor();
console.log("Color is now "+color);//red
// eg ---one----end----

// eg ---two----begin--
var color = "blue";
function changeColor(){
    var anotherColor = "red";
    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
    }
    swapColors();
}
changeColor();

// eg ---two----end----

/**
 * 4.2.1 延长作用域链
 */
//当执行流进入下列任何一个语句时，作用域链就会得到加长：
//try-catch 语句的catch 块；对catch 语句来说，会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明
// with 语句。
// eg ---one----begin----
//对with 语句来说，会将指定的对象添加到作用域链中。
function buildUrl(){
    var qs = "?debug=true";
    //with 语句接收的是location 对象，因此其变量对象中就包含了location 对象的所有属性和方法，而这个变量对象被添加到了作用域链的前端
    with(location){
        //当在with 语句中引用变量href 时（实际引用的是location.href），可以在当前执行环境的变量对象中找到。
        var url = href + qs;
    }
    return url;
}
// eg ---one----end----
/**
 * 4.2.2 没有块级作用域
 */
// eg ---one----begin----
//在JavaScript 中，if 语句中的变量声明会将变量添加到当前的执行环境
//在这里是全局环境
if(true){
    var color = "blue";
}
console.log(color);//blue
// eg ---one----end----
// eg ---two----begin----
for(var i=0;i<10;i++){
    doSomething(i);
}
console.log(i);//10
// eg ---two----end----
/**
 * 1. 声明变量
使用var 声明的变量会自动被添加到最接近的环境中。
在函数内部，最接近的环境就是函数的局部环境；
在with 语句中，最接近的环境是函数环境。
如果初始化变量时没有使用var 声明，该变量会自动被添加到全局环境。
 */

// eg ---one----begin----
function add(num1,num2){
    var sum = num1 + num2;
    return sum;
}
var result = add(10,20);
console.log(sum);//由于sum 不是有效的变量，因此会导致错误
// eg ---one----end----
// eg ---two----begin----
function add2(num1,num2){
    //由于sum未被声明，所以被定义为全局变量
    sum = num1 + num2;
    return sum;
}
var result = add(10,20);//30
console.log(sum);//30
// eg ---two----end----

/**
 * 4.3.4 管理内存
 */
// eg ---one----begin----
function createPerson(name){
    var localPerson = new Object();
    localPerson.name = name;
    return localPerson;
}
var globalPerson = createPerson("zhoujun");
//手工解除globalPerson 的引用
globalPerson = null;

// eg ---one----end----