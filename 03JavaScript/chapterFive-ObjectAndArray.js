/**
 * 五、引用类型
 */

//eg01----begin----
//eg01----end------


/**
 * 5.1 Object 类型
 */
//创建Object 实例的方式有两种。第一种是使用new 操作符后跟Object 构造函数
//eg01----begin----
var person = new Object();
person.name = "zhoujun";
person.age=18;
//eg01----end------
//另一种方式是使用对象字面量表示法。
//eg02----begin----
var person = {
    name :"zhoujun",
    age : 18
};
//eg02----end------
//eg03----begin----
var person ={};
person.name = "zhoujun";
person.age=18;
//eg03----end------

//eg04----begin----
function displayInfo(args){
    var output='';
    if(typeof args.name == 'string'){
        output +="Age:"+args.name +"\n";
    }

    if(typeof args.age == "number"){
        output += "Age:"+args.age+'\n';
    }
    console.log(output);
}
displayInfo({
    name :"zhoujun",
    age : 18
});
displayInfo({
    name : "Luoxiaobai"
});
//eg04----end------
/**
 * 5.2 Array 类型
 */
//eg01----begin----
var colors = new Array();
var colors1 = new Array(20);
var colors2 = new Array('red','blue','green');
//eg01----end------

//eg02----begin----
//数组的length 属性很有特点——它不是只读的。因此，通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项
var colors = ['red','blue','green'];
colors[colors.length]='black';//（在位置3）添加一种颜色
colors[colors.length]='brown';//（在位置4）再添加一种颜色
//eg02----end------


//eg03----begin----
var value = new Array();
if(value instanceof Array){
/**
 * instanceof 操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实
际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的Array 构造函数。如果你从
一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自
不同的构造函数
 */
}
if(Array.isArray(value)){

}
//eg03----end------
//eg04----begin----
var colors = ['red','blue','green'];
console.log(colors.toString());// red,blue,green
console.log(colors.valueOf());// red,blue,green
console.log(colors);// red,blue,green
//eg04----end------


//eg05----begin----
var person1 = {
    toLocaleString : function(){
        return "Zhoujun";
    },
    toString : function(){
        return "Zhoujun";
    }
};

var person2 = {
    toLocaleString : function(){
        return "Luoxiaobai";
    },
    toString : function(){
        return "Luo";
    }
}
var people =[person1,person2];
console.log(people);
console.log(people.toString());
console.log(people.toLocaleString());
//eg05----end------
//eg06----begin----
var colors = ['red','green','blue'];
console.log(colors.join(','));//red,green,blue
console.log(colors.join('||'));//red||green||blue
//eg06----end------
//eg07----begin----
var colors = new Array();
var count = colors.push("red","green");
console.log(count);
count = colors.push("black");
console.log(count);
var item = colors.pop();
console.log(item);
console.log(colors.length);
//eg07----end------
/**
 * 5.2.4 队列方法
 */
//eg08----begin----
var colors = new Array();
var count = colors.push("red","green");
console.log(count);
count = colors.push("black");
var item = colors.shift();
console.log(item);
//eg08----end------

//eg09----begin----
var colors = new Array();
var count = colors.unshift("red","green");
colors.unshift("black");
console.log(colors.toString);//"black","red","green"
//eg09----end------
/**
 * 5.2.5 重排序方法
 */
//eg01----begin----
var values = [1,2,3,4,5];
values.reverse();
console.log(values.toString());//5,4,3,2,1
//eg01----end------

//eg02----begin----
var values = [0,1,5,10,15];
values.sort();
console.log(values.toString());
//eg02----end------
//eg03----begin----
function compare(value1,value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}
var values = [0,12,51,10,15];
values.sort(compare);//0,10,12,15,51
console.log(values.toString());
//eg03----end------

//eg04----begin----
function compare2(value1,value2){
    if(value1 < value2){
        return 1;
    }else if(value1 > value2){
        return -1;
    }else{
        return 0;
    }
}
values.sort(compare2);
values.reverse();
console.log(values.toString());
//eg04----end------

//eg05----begin----
function compare3(value1,value2){
    return value2 - value1;
}
//eg05----end------
/**
 * 5.2.6 操作方法
 */
//eg06----begin----
var colors = ['red','green','blue'];
var colors2 = colors.concat("yellow",["black","brown"]);
//eg06----end------

//eg07----begin----
var colors = ['red','green','blue','yellow','purple'];
var colors1 = colors.slice(1);//green,blue,yellow,purple
var colors2 = colors.slice(1,4);
//eg07----end------
//eg08----begin----
var colors = ['red','green','blue'];
//删除：可以删除任意数量的项，只需指定2 个参数：要删除的第一项的位置和要删除的项数。例如，splice(0,2)会删除数组中的前两项
var removed = colors.splice(0,1);// green,blue
//插入：可以向指定位置插入任意数量的项，只需提供3 个参数：起始位置、0（要删除的项数）和要插入的项
removed = colors.splice(1,0,"yellow","orange");// green,yellow,orange,blue
//替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定3 个参数：起始位置、要删除的项数和要插入的任意数量的项
removed = colors.splice(1,1,'red','purple');// green,red,purple,orange,blue
//eg08----end------

/**
 * 5.2.7 位置方法
 */
//ECMAScript 5 为数组实例添加了两个位置方法：indexOf()和lastIndexOf()。这两个方法都接收两个参数：要查找的项和（可选的）表示查找起点位置的索引
var number = [1,2,3,4,5,4,3,2,1];
console.log(number.indexOf(4));//3
console.log(number.lastIndexOf(4));
console.log(number.indexOf(4,4))//5
/**
 * 5.2.8 迭代方法
 */
var numbers = [1,2,3,4,5,4,3,2,1];
//eg01----begin----
//every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
var everyResult = numbers.every(function(item,index,array){
    return (item > 2);
});
console.log(everyResult);//false
//eg01----end------
//eg02----begin----
//some()：对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true
var someResult = numbers.some(function(item,index,array){
    return (item>2);
});
console.log(someResult);

//eg02----end------

//eg03----begin----
//filter()：对数组中的每一项运行给定函数，返回该函数会返回true 的项组成的数组
var filterResult = numbers.filter(function(){
    return (item>2);
});
console.log(filterResult);//[3,4,5,4,3]
//eg03----end------

//eg04----begin----
//map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
var mapResult = numbers.map(function(item,index,array){
    return item * 2;
})
console.log(mapResult);
//eg04----end------
//eg05----begin----
//forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
numbers.forEach(function(item,index,array){
    //执行某些操作
})
//eg05----end------
/**
 * 5.2.9 归并方法
 */
//eg01----begin----
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev,cur,index,array){
    return prev + cur;
})
console.log(sum);
//使用reduce()还是reduceRight()，主要取决于要从哪头开始遍历数组
var sum1 = values.reduceRight(function(prev,cur,index,array){
    return prev + cur;
})


//eg01----end------

//eg02----begin----
//eg02----end------

//eg03----begin----
//eg04----end------







