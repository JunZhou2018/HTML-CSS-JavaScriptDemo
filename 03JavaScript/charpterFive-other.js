/**
 * 5.6 基本包装类型
 */
/**
 * ECMAScript 还提供了3 个特殊的引用类型：Boolean、Number 和String。
 * 每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。
 * 
 */
//----eg01-----begin----
var s1 = "some text";
var s2 = s1.substring(2);
//等同于
var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;
//----eg01------end------
/**
 * 引用类型与基本包装类型的主要区别就是对象的生存期.
 * 使用new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。
 * 而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。
 * 这意味着我们不能在运行时为基本类型值添加属性和方法
 */
//----eg02-----begin----
var s21 = "some text";
s21.color = "red";
console.log(s21.color);//undefined

//----eg02------end------
/**
 * 把字符串传给Object 构造函数，就会创建String 的实例；
 * 而传入数值参数会得到Number 的实例，传入布尔值参数就会得到Boolean 的实例。
 */

/**
 * 5.6.1 Boolean类型
 */
/**
 * 要创建Boolean 对象,调用Boolean构造函数并传入true 或false 值。
 * Boolean 类型的实例重写了valueOf()方法，返回基本类型值true 或false；
 * 重写了toString()方法，返回字符串"true"和"false"。
 * 
 */
//----eg01-----begin----
var booleanObject = new Boolean(true);
console.log(booleanObject.toString());//true

var falseObject = new Boolean(false);
console.log("falseObject:"+falseObject.toString());//false

//布尔表达式中的所有对象都会被转换为true，
//因此falseObject 对象在布尔表达式中代表的是true。
var result = falseObject && true;
console.log("result:"+result);
//----eg01------end------
/**
 * 基本类型与引用类型的布尔值还有两个区别。
 * 首先，typeof 操作符对基本类型返回"boolean"，而对引用类型返回"object"。
 * 其次，由于Boolean 对象是Boolean 类型的实例，所以使用instanceof操作符测试Boolean 对象会返回true，而测试基本类型的布尔值则返回false。
 */
//建议是永远不要使用Boolean 对象
//----eg02-----begin----
var falseValue = false;
console.log(typeof falseObject);//object
console.log(typeof falseValue);//boolean
console.log(falseObject instanceof Boolean);//true
console.log(falseValue instanceof Boolean);//false
//----eg02------end------
/**
 * 5.6.2 Number类型
 */
/**
 * Number 是与数字值对应的引用类型。
 * 要创建Number 对象，可以在调用Number 构造函数时向其中传递相应的数值
 *
 * Number 类型也重写了valueOf()、toLocaleString()和toString()方法。
 * 重写后的valueOf()方法返回对象表示的基本类型的数值;
 * 另外两个方法则返回字符串形式的数值
 * 可以为toString()方法传递一个表示基数的参数，告诉它返回几进制数值的字符串形式
 */
//----eg01-----begin----
var numberObject = new Number(23);
var num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));
console.log("num.valueOf():"+num.valueOf());
console.log("num.toLocaleString():"+num.toLocaleString());

//----eg01------end------
/**
 * Number 类型还提供了一些用于将数值格式化为字符串的方法
 * toFixed()方法会按照指定的小数位返回数值的字符串表示,如果数值本身包含的小数位比指定的还多，那么接近指定的最大小数位的值就会舍入
 * 能够自动舍入的特性，使得toFixed()方法很适合处理货币值.
 * 在给toFixed()传入0 的情况下，IE8 及之前版本不能正确舍入范围在{(0.94,0.5],[0.5,0.94)}之间的值。
 * 对于这个范围内的值，IE 会返回0，而不是1 或1；其他浏览器都能返回正确的值
 * */

//----eg02-----begin----
var num2 = 10.005;
console.log("num.toFixed(2):"+num.toFixed(2));//10.00
console.log("num2.toFixed(2):"+num2.toFixed(2))//10.01
//----eg02------end------
/**
 * 另外可用于格式化数值的方法是toExponential()，该方法返回以指数表示法（也称e 表示法）表示的数值的字符串形式。
 */
//----eg03-----begin----
console.log("num.toExponential(1):"+num.toExponential(1));//1.0e+1
//----eg03------end------
/**
 * 对于一个数值来说，toPrecision()方法可能会返回固定大小（fixed）格式，
 * 也可能返回指数（exponential）格式；具体规则是看哪种格式最合适。
 * 这个方法接收一个参数，即表示数值的所有数字的位数（不包括指数部分）
 */
//----eg04-----begin----
var num3 = 99;
console.log("num3.toPrecision(1):"+num3.toPrecision(1));//1e+2
console.log("num3.toPrecision(2):"+num3.toPrecision(2));//99
console.log("num3.toPrecision(3):"+num3.toPrecision(3));//99.0
//----eg04------end------

/**
 * 不建议直接实例化Number 类型
 * 在使用typeof 和instanceof 操作符测试基本类型数值与引用类型数值时，得到的结果完全不同
 */
//----eg05-----begin----
var numberValue = 10;
console.log(typeof numberObject);//object
console.log(typeof numberValue);//number
console.log(numberObject instanceof Number);//true
console.log(numberValue instanceof Number);//false
//----eg05------end------

/**
 * 5.6.3 String类型
 * String 类型是字符串的对象包装类型，可以像下面这样使用String 构造函数来创建。
 * String 对象的方法也可以在所有基本的字符串值中访问到。
 * 其中，继承的valueOf()、toLocale-String()和toString()方法，都返回对象所表示的基本字符串值。
 * String 类型的每个实例都有一个length 属性，表示字符串中包含多个字符。
 * 
 * */
//----eg01-----begin----
var stringObject = new String("hello world");
console.log(stringObject.length);
//----eg01------end------
/**
 * 1. 字符方法
 * 两个用于访问字符串中特定字符的方法是：charAt()和charCodeAt()。
 * 这两个方法都接收一个参数，即基于0 的字符位置。
 * 其中，charAt()方法以单字符字符串的形式返回给定位置的那个字符
 */
//----eg02-----begin----
console.log("stringObject.charAt(1):"+stringObject.charAt(1));//e
console.log("stringObject.charCodeAt(1):"+stringObject.charCodeAt(1));//101
console.log("stringObject[1]:"+stringObject[1]);//e
//----eg02------end------
/**
 * 2. 字符串操作方法
 * concat()，用于将一或多个字符串拼接起来，返回拼接得到的新字符串。
 * ECMAScript 还提供了三个基于子字符串创建新字符串的方法：slice()、substr()和substring()。
 * 这三个方法都会返回被操作字符串的一个子字符串，而且也都接受一或两个参数。
 * 第一个参数指定子字符串的开始位置，第二个参数（在指定的情况下）表示子字符串到哪里结束.
 * slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。
 * substr()的第二个参数指定的则是返回的字符个数。如果没有给这些方法传递第二个参数，则将字符串的长度作为结束位置
 * 与concat()方法一样，slice()、substr()和substring()也不会修改字符串本身的值,
 * 它们只是返回一个基本类型的字符串值，对原始字符串没有任何影响
 */
//----eg03-----begin----
var stringValue = "hello";
var result = stringValue.concat("world");
console.log("stringValue:"+stringValue);
console.log("result:"+result);

var result2 = stringValue.concat("world","!");
console.log("result2:"+result2);//helloworld!

console.log("result2.slice(3):"+result2.slice(3));//loworld!
console.log("result2.substring(3):"+result2.substring(3));//loworld!
console.log("result2.substr(3):"+result2.substr(3));//loworld!
console.log("result2.slice(3,7):"+result2.slice(3,7));//lowo
console.log("result2.substring(3,7):"+result2.substring(3,7));//lowo
console.log("result2.substr(3,7):"+result2.substr(3,7));//loworld

/**
 * 在传递给这些方法的参数是负值的情况下，它们的行为就不尽相同了。
 * 其中，slice()方法会将传入的负值与字符串的长度相加，
 * substr()方法将负的第一个参数加上字符串的长度，而将负的第二个参数转换为0。
 * 最后，substring()方法会把所有负值参数都转换为0
 */
console.log("result2.slice(-3):"+result2.slice(-3));//ld!
console.log("result2.substring(-3):"+result2.substring(-3));//helloworld!
console.log("result2.substr(-3):"+result2.substr(-3));//ld!
console.log("result2.slice(3,-4):"+result2.slice(3,-4));//lowo
console.log("result2.substring(3,-4):"+result2.substring(3,-4));//hel
console.log("result2.substr(3,-4):"+result2.substr(3,-4));//""（空字符串）
//----eg03------end------
/**
 * 3. 字符串位置方法
 * 从字符串中查找子字符串的方法：indexOf()和lastIndexOf()
 * 从一个字符串中搜索给定的子字符串，然后返子字符串的位置（如果没有找到该子字符串，则返回-1）。
 * indexOf()方法从字符串的开头向后搜索子字符串
 * lastIndexOf()方法是从字符串的末尾向前搜索子字符串
 * 这两个方法都可以接收可选的第二个参数，表示从字符串中的哪个位置开始搜索
 */
//----eg04-----begin----
var stringValue = "hello world";
console.log("stringValue.indexOf(o):"+stringValue.indexOf("o"));//4
console.log("stringValue.lastIndexOf(o):"+stringValue.lastIndexOf("o"));//7
console.log("stringValue.indexOf(o,6):"+stringValue.indexOf("o",6));//7
console.log("stringValue.lastIndexOf(o,6):"+stringValue.lastIndexOf("o",6));//4

var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1){
    positions.push(pos);
    pos = stringValue.indexOf('e',pos+1);
}console.log("positions:"+positions);//3,24,32,35,52
//----eg04------end------
/**
 * 4. trim()方法
 * 这个方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果.
 * 由于trim()返回的是字符串的副本，所以原始字符串中的前置及后缀空格会保持不变
 */
//----eg05-----begin----
var stringValue5="   hello world   ";
var trimStringValue = stringValue5.trim();
console.log("stringValue5:"+stringValue5);
console.log("trimStringValue:"+trimStringValue);
//----eg05------end------



//----eg02-----begin----
console.log();
//----eg02------end------



//----eg02-----begin----
console.log();
//----eg02------end------



//----eg02-----begin----
console.log();
//----eg02------end------



//----eg02-----begin----
console.log();
//----eg02------end------