/**
 * 5.4 RegExp 类型
 */
/**
 * var expression = / pattern / flags ;
 * 其中的模式（pattern）部分可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用
 * 每个正则表达式都可带有一或多个标志（flags），用以标明正则表达式的行为。
正则表达式的匹配模式支持下列3 个标志。
 g：表示全局（global）模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止；
 i：表示不区分大小写（case-insensitive）模式，即在确定匹配项时忽略模式与字符串的大小写；
 m：表示多行（multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。
 */

//匹配字符串中所有"at"的实例
var pattern1 = /at/g;
//匹配第一个"bat"或"cat"，不区分大小写
var pattern2 = /[bc]at/i;
//匹配所有以"at"结尾的3 个字符的组合，不区分大小写
var pattern3 = /.at/gi;
/**
 * 模式中使用的所有元字符都必须转义。
 * 正则表达式中的元字符包括：( [ { \ ^ $ | ) ? * + .]}
 */
//匹配第一个" [bc]at"，不区分大小写
var pattern4 = /\[bc\]at/i;
//匹配所有".at"，不区分大小写
var pattern5 = /\.at/gi;

/**
 * 使用RegExp 构造函数
 * 它接收两个参数：一个是要匹配的字符串模式，另一个是可选的标志字符串
 */
var pattern6 = new RegExp("[bc]at",'i');
//所有元字符都必须双重转义
var pattern7 = new RegExp("\\[bc\\]at",'i'); ///\[bc\]at/i
var pattern8 = new RegExp('\\.at','gi');//\.at/gi

/**
 * 5.4.1 RegExp实例属性
 */
/**
 * RegExp 的每个实例都具有下列属性，通过这些属性可以取得有关模式的各种信息。
 global：布尔值，表示是否设置了g 标志。
 ignoreCase：布尔值，表示是否设置了i 标志。
 lastIndex：整数，表示开始搜索下一个匹配项的字符位置，从0 算起。
 multiline：布尔值，表示是否设置了m 标志。
 source：正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回。
 */
//---eg01----begin----
var pattern11 = /\[bc\]at/i;
console.log(pattern11.global);//false
console.log(pattern11.ignoreCase);//true
console.log(pattern11.multiline);//false
console.log(pattern11.lastIndex);//0
console.log(pattern11.source);//\[bc\]at

var pattern12 = new RegExp("\\[bc\\]at","i");
console.log(pattern12.global);//false
console.log(pattern12.ignoreCase);//true
console.log(pattern12.multiline);//false
console.log(pattern12.lastIndex);//0
console.log(pattern12.source);//\[bc\]at
//----eg01-----end-----
/**
 * 5.4.2 RegExp实例方法
 */
/**
 * RegExp 对象的主要方法是exec()，该方法是专门为捕获组而设计的。
 * exec()接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组；或者在没有匹配项的情况下返回null。
 * 返回的数组虽然是Array 的实例，但包含两个额外的属性：index 和input。其中，index 表示匹配项在字符串中的位置，而input 表示应用正则表达式的字符串
 */
//---eg01----begin----
var text = "mom and dad and baby";
var pattern21 = /mom( and dad( and baby)?)?/gi;
var matches = pattern21.exec(text);
console.log("matches.index:"+matches.index);//0
console.log("matches.input:"+matches.input);//mom and dad and baby
console.log("matches[0]:"+matches[0]);//mom and dad and baby
console.log("matches[1]:"+matches[1]);//and dad and baby
console.log("matches[2]:"+matches[2]);//and baby
//----eg01-----end-----

/**
 * 对于exec()方法而言，即使在模式中设置了全局标志（g），它每次也只会返回一个匹配项。在不设置全局标志的情况下，在同一个字符串上多次调用exec()将始终返回第一个匹配项的信息。而在设置全局标志的情况下，每次调用exec()则都会在字符串中继续查找新匹配项
 */
//---eg02----begin----
var text = "cat,bat,sat,fat";
var pattern22 = /.at/;
var matches22 = pattern22.exec(text);
console.log("matches22.index:"+matches22.index);
console.log("matches22[0]:"+matches22[0]);//cat
console.log("matches22.lastIndex:"+matches22.lastIndex);

matches22 = pattern22.exec(text);
console.log("matches22.index:"+matches22.index);//0
console.log("matches22[0]:"+matches22[0]);//cat
console.log("matches22.lastIndex:"+matches22.lastIndex);

var pattern221 = /.at/g;
var matches221 = pattern221.exec(text);
console.log("matches221.index:"+matches221.index);//0
console.log("matches221[0]:"+matches221[0]);//cat
console.log("matches221.lastIndex:"+matches221.lastIndex);

matches221 = pattern221.exec(text);
console.log("matches221.index:"+matches221.index);//4
console.log("matches221[0]:"+matches221[0]);//bat
console.log("matches221.lastIndex:"+matches221.lastIndex);
//----eg02-----end-----

/**
 * 正则表达式的第二个方法是test()，它接受一个字符串参数。在模式与该参数匹配的情况下返回true；否则，返回false。test()方法经常被用在if 语句中
 */
//----eg03-----begin-----
var text = "000-00-0000";
var pattern23 = /\d{3}-\d{2}-\d{4}/;
if(pattern23.test(text)){
    console.log('the pattern was matched.');
}
//----eg03-----end-----
/**
 * RegExp 实例继承的toLocaleString()和toString()方法都会返回正则表达式的字面量，与创建正则表达式的方式无关
 */
//----eg04-----begin-----
var pattern24 = new RegExp("\\[bc\\]at",'gi');
console.log(pattern24.toString());///\[bc\]at/gi
console.log(pattern24.toLocaleString());///\[bc\]at/gi
//----eg04-----end-----
/**
 * 5.4.3 RegExp构造函数属性
 */
/**
    input $_ 最近一次要匹配的字符串。Opera未实现此属性
    lastMatch $& 最近一次的匹配项。Opera未实现此属性
    lastParen $+ 最近一次匹配的捕获组。Opera未实现此属性
    leftContext $` input字符串中lastMatch之前的文本
    multiline $* 布尔值，表示是否所有表达式都使用多行模式。IE和Opera未实现此属性
    rightContext $' Input字符串中lastMatch之后的文本
 */
//----eg01-----begin-----
var text = "this has been a short summer";
var pattern31 = /(.)hort/g;
// if(pattern31.test(text)){
//     //this has been a short summer
//     console.log('RegExp.input:'+RegExp.input);
//     //this has been a 
//     console.log('RegExp.leftContext:'+RegExp.leftContext);
//     //summer
//     console.log('RegExp.rightContext:'+RegExp.rightContext);
//     //short
//     console.log('RegExp.lastMatch:'+RegExp.lastMatch);
//     //s
//     console.log('RegExp.lastParen:'+RegExp.lastParen);
//     console.log('RegExp.multiline:'+RegExp.multiline);
// }
if(pattern31.test(text)){
    //this has been a short summer
    console.log('RegExp.$_:'+RegExp.$_);
    //summer
    console.log('RegExp.$\':'+RegExp["$'"]);
    //short
    console.log('RegExp.$&:'+RegExp["$&"]);
    //s
    console.log('RegExp.$+:'+RegExp["$+"]);
    console.log('RegExp.$*:'+RegExp["$*"]);
}
//----eg01-----end-----

//----eg01-----begin-----
//----eg01-----end-----

//----eg01-----begin-----
//----eg01-----end-----