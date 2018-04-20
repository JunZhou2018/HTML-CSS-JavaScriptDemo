/**
 * 5.3 Date 类型
 */
//---eg01---begin-----
//在调用Date 构造函数而不传递参数的情况下，新创建的对象自动获得当前日期和时间。
//如果想根据特定的日期和时间创建日期对象，必须传入表示该日期的毫秒数
var now = new Date();
console.log(now);//Fri Apr 20 2018 22:41:04 GMT+0800 (中国标准时间)
//----eg01---end------


//---eg02---begin-----
//Date.parse()方法接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数
var someDate = new Date(Date.parse("May 25,2004"));
console.log(someDate);
//如果传入Date.parse()方法的字符串不能表示日期，那么它会返回NaN。
//实际上，如果直接将表示日期的字符串传递给Date 构造函数，也会在后台调用Date.parse()
var someData1 = new Date("May 25,2004");
console.log(someData1);
//---eg02---end-------
//---eg03---begin-----
//Date.UTC()方法同样也返回表示日期的毫秒数
/**
 * Date.UTC()的参数分别是年份、基于0 的月份（一月是0，二月是1，以此类推）、月中的哪一天
（1 到31）、小时数（0 到23）、分钟、秒以及毫秒数。在这些参数中，只有前两个参数（年和月）是必
需的。如果没有提供月中的天数，则假设天数为1；如果省略其他参数，则统统假设为0。
 */
var y2k = new Date(Date.UTC(2000,0));
console.log(y2k);
var allFive = new Date(Date.UTC(2018,3,20,22,52,34));
var allFive2 = new Date(2018,3,20,22,52,34);
console.log(allFive);
//---eg03---end-------

/**
 * ECMAScript 5 添加了Data.now()方法，
 * 返回表示调用这个方法时的日期和时间的毫秒数
 */
//---eg04---begin-----
function getTimes(){
    var start = Date.now();
    //
    doSomething();
    var stop = Date.now();
    var result = stop - start;
}

//支持Data.now()方法的浏览器包括IE9+、Firefox 3+、Safari 3+、Opera 10.5 和Chrome。
//在不支持它的浏览器中，使用+操作符把Data 对象转换成字符串，也可以达到同样的目的。
function getTimes(){
    var start = +new Date();
    //
    doSomething();
    var stop = +new Date();
    var result = stop - start;
}
//---eg04---end-------
/**
 * 5.3.1 继承的方法
 */
var date1 = new Date(2018,3,20);
var date2 = new Date(2018,3,30);
/**
Date 类型的toLocaleString()方法会按照与浏览器设置的地区相适应的格式返回日期和时间。
这大致意味着时间格式中会包含AM 或PM，但不会包含时区信息（当然，具体的格式会因浏览器而异）
 */
//---eg01---begin-----
console.log("date1.toLocaleString():");
console.log(date1.toLocaleString());//2018-4-20 00:00:00
//---eg01---end-------
/**
 * toString()方法则通常返回带有时区信息的日期和时间，其中时间一般以军用时间（即小时的范围是0 到23）表示
 */

//---eg02---begin-----
console.log("date1.toString():");
console.log(date1.toString());//Fri Apr 20 2018 00:00:00 GMT+0800 (中国标准时间)
//---eg02---end-------
/**
 * Date 类型的valueOf()方法，则根本不返回字符串，而是返回日期的毫秒表示。因此，可以
方便使用比较操作符（小于或大于）来比较日期值
 */
//---eg03---begin-----
console.log("date1 < date2:");
console.log(date1 < date2);//true
//---eg03---end-------

/**
 * 5.3.2 日期格式化方法
 */
/**
 toDateString()——以特定于实现的格式显示星期几、月、日和年；
 toTimeString()——以特定于实现的格式显示时、分、秒和时区；
 toLocaleDateString()——以特定于地区的格式显示星期几、月、日和年；
 toLocaleTimeString()——以特定于实现的格式显示时、分、秒；
 toUTCString()——以特定于实现的格式完整的UTC 日期。
与toLocaleString()和toString()方法一样，以上这些字符串格式方法的输出也是因浏览器
而异的，因此没有哪一个方法能够用来在用户界面中显示一致的日期信息。
 */

 /**
  * 5.3.3 日期/时间组件方法
  */
/**
 * getTime() 返回表示日期的毫秒数；与valueOf()方法返回的值相同
    setTime(毫秒) 以毫秒数设置日期，会改变整个日期
    getFullYear() 取得4位数的年份（如2007而非仅07）
    getUTCFullYear() 返回UTC日期的4位数年份
    setFullYear(年) 设置日期的年份。传入的年份值必须是4位数字（如2007而非仅07）
    setUTCFullYear(年) 设置UTC日期的年份。传入的年份值必须是4位数字（如2007而非仅07）
    getMonth() 返回日期中的月份，其中0表示一月，11表示十二月
    getUTCMonth() 返回UTC日期中的月份，其中0表示一月，11表示十二月
    setMonth(月) 设置日期的月份。传入的月份值必须大于0，超过11则增加年份
    setUTCMonth(月) 设置UTC日期的月份。传入的月份值必须大于0，超过11则增加年份
    getDate() 返回日期月份中的天数（1到31）
    getUTCDate() 返回UTC日期月份中的天数（1到31）
    setDate(日) 设置日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份
    setUTCDate(日) 设置UTC日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份
    getDay() 返回日期中星期的星期几（其中0表示星期日，6表示星期六）
    getUTCDay() 返回UTC日期中星期的星期几（其中0表示星期日，6表示星期六）
    getHours() 返回日期中的小时数（0到23）
    getUTCHours() 返回UTC日期中的小时数（0到23）
    setHours(时) 设置日期中的小时数。传入的值超过了23则增加月份中的天数
    setUTCHours(时) 设置UTC日期中的小时数。传入的值超过了23则增加月份中的天数
    getMinutes() 返回日期中的分钟数（0到59）
    getUTCMinutes() 返回UTC日期中的分钟数（0到59）
    setMinutes(分) 设置日期中的分钟数。传入的值超过59则增加小时数
    setUTCMinutes(分) 设置UTC日期中的分钟数。传入的值超过59则增加小时数
    getSeconds() 返回日期中的秒数（0到59）
    getUTCSeconds() 返回UTC日期中的秒数（0到59）
    setSeconds(秒) 设置日期中的秒数。传入的值超过了59会增加分钟数
    setUTCSeconds(秒) 设置UTC日期中的秒数。传入的值超过了59会增加分钟数
    getMilliseconds() 返回日期中的毫秒数
    getUTCMilliseconds() 返回UTC日期中的毫秒数
    setMilliseconds(毫秒) 设置日期中的毫秒数
    setUTCMilliseconds(毫秒) 设置UTC日期中的毫秒数
    getTimezoneOffset() 返回本地时间与UTC时间相差的分钟数。例如，美国东部标准时间返回300。在某地进入夏令时的情况下，这个值会有所变化
    */




