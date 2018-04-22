/**
 * 5.5 Function 类型
 */
/**
 * 每个函数都是Function 类型的实例，而且都与其他引用类型一样具有属性和方法.
 * 函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定
 * 由于函数名仅仅是指向函数的指针，因此函数名与包含对象指针的其他变量没有什么不同
 * 
 */
//---eg01---begin----
function sum(num1,num2){
    return num1 + num2;
}
console.log(sum(10,10));//20
var another = sum;
console.log(another(10,10));//20
sum = null;
console.log(another(10,10));//20
//---eg01---end----
/**
 * 5.5.2 函数声明与函数表达式
 */
/**
 * 解析器在向执行环境中加载数据时，对函数声明和函数表达式并非一视同仁。
 * 解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；
 * 至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行
 */
//---eg01---begin----
console.log(sum2(10,10));
function sum2(num1,num2){
    return num1 + num2;
}
//console.log(sum3(10,10));//报错！
var sum3 = function(num1,num2){
    return num1 + num2;
}
//---eg01---end----
/**
 * 5.5.3 作为值的函数
 */
/**
 * 要访问函数的指针而不执行函数的话，必须去掉函数名后面的那对圆括号
 */
//---eg01---begin----
function creatComparisonFunction(propertyName){
    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        return value1 - value2;
    }
}
var data = [{name:"zhoujun",age:25},{name:"luoxiaobai",age:24}];
data.sort(creatComparisonFunction("name"));
console.log(data[1].name);
data.sort(creatComparisonFunction("age"));
console.log(data[0].name);
//---eg01---end----
/**
 * 5.5.4 函数内部属性
 */
/**
 * 在函数内部，有两个特殊的对象：arguments 和this
 * arguments是一个类数组对象，包含着传入函数中的所有参数。虽然arguments 的主要用途是保存函数参数，
但这个对象还有一个名叫callee 的属性，该属性是一个指针，指向拥有这个arguments 对象的函数
* this引用的是函数据以执行的环境对象;
* ECMAScript 5 也规范化了另一个函数对象的属性：caller.这个属性中保存着调用当前函数的函数的引用，
如果是在全局作用域中调用当前函数，它的值为null。为了实现更松散的耦合，也可以通过arguments.callee.caller
来访问相同的信息。
*/
//---eg01---begin----
function factorial(num){
    if(num <= 1){
        return 1;
    }else {
        return num * factorial(num-1);
    }
}
function factorial2(num){
    if(num <= 1){
        return 1;
    }else {
        return num * arguments.callee(num-1);
    }
}
//---eg01---end----

/**
 * 5.5.5 函数属性和方法
 */
/**
 * ECMAScript 中的函数是对象，因此函数也有属性和方法
 * 每个函数都包含两个属性：length 和prototype。其中，length 属性表示函数希望接收的命名参数的个数，
 * 在ECMAScript 5 中，prototype 属性是不可枚举的，因此使用for-in 无法发现。
 * 每个函数都包含两个非继承而来的方法：apply()和call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内this 对象的值
 * 首先，apply()方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。其中，第二个参数可以是Array 的实例，也可以是arguments 对象。
    call()方法与apply()方法的作用相同，它们的区别仅在于接收参数的方式不同。
    对于call()方法而言，第一个参数是this 值没有变化，变化的是其余参数都直接传递给函数。
    换句话说，在使用call()方法时，传递给函数的参数必须逐个列举出来

    使用call()（或apply()）来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系。
 * */
//---eg01---begin----
    function sayName(name){
        console.log(name);
    }
    function sum(num1,num2){
        return num1 + num2;
    }
    function sayHi(){
        return "hi";
    }
    console.log(sayName.length);
    console.log(sum.length);
    console.log(sayHi.length);
//---eg01---end----
//---eg01---begin----
function callSum1(num1,num2){
    return sum.apply(this,arguments);// 传入arguments 对象
}
function callSum2(num1,num2){
    return sum.apply(this,[num1,num2]);
}
function callSum3(num1,num2){
    return sum.call(this,num1,num2);
}
//---eg01---end----

//ECMAScript 5 还定义了一个方法：bind()。
//这个方法会创建一个函数的实例，其this 值会被绑定到传给bind()函数的值
//---eg01---begin----
var o = {color : "blue"};
function sayColor(){
    console.log(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();
//---eg01---end----