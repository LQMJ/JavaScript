###  常用浏览器
- webkit内核（V8引擎）
   + 谷歌 Chrome
   + safari
   + opera >=V14
   + 国产浏览器
   + 手机浏览器
   + ...
- Gecko
   + 火狐firefor
- presto  
   OPero >=V14
- Trident
   + IE
   + IE EDEC开始采用新内核（其中包括chrome迷你）

谷歌浏览器的控制台（f12）
- Elemenrs:查看结构样式，可以修改这些内容
- Console:查看输出结果和报错信息，是JS调试的利器
- Sources：查看项目源码
- Network：查看当前网站所有资源的请求信息（包括和服务器传输的HTTP报文信息），加载时间等（根据项目时间进行项目优化）
- APPlication：查看当前网络的数据存储和资源文件（可以盗图）

### JS做客户端语言
> 按照相关的JS语法，去操作页面中的元素，有时还要操作浏览器里面的一些功能
- ECMAScript3/5/6...:JS的语言规范（变量,数据类型，操作语句等等）
- DOM (document object model):文档对象模型，提供一些JS的属性和方法，用来操作页面中的DOM元素
- BOM (browser object model)：浏览器对象模型，提供一些JS的属性和方法，用来操作浏览器

### JS中的变量variable
```
//ES3
ver a = 12
a = 13
console.log(a)://=>输出的是a代表的值13

//ES6
let b = 100
b =200

const c = 1000
c = 2000 ;//=>报错:const创建的变量，储存的值不能被修改(可以理解为创建的常量)

// 创建函数也相当于创建变量
funtion fn(){}
// 创建类也相当于创建变量
class A{}
// ES6模块导入也可以创建变量
impor B form`.B.JS`;
// Symbol
Symbol:创建唯一值
```
### JS中的命名规范
- 严格区分大小写
- 使用数字，字母，下划线，$,数字不能作为开头
```
let $box; //=>一般用JQ获取的以$开头
let _box; //=>一般公共变量都以_开头
let 1box; //=>不可以但是可以写box1
```
- 使用驼峰命名法：首字母小写，其余每个有意义的单词首字母都要大写（命名尽量语义化明显，使用英文单词）
```
let studentInformation;
let studentInfo;
//常用的缩写：add/insert/create/new(新增)，updade(修改),delete/del/remove/rm(删除)，sel/select/query/get(查询)，info（信息）...
```
- 不能使用关键字和保留字
```
当下有特殊含义的是关键字，未来可能会成为关键字的叫做保留字（?）
var let conts function...

var var = 10;//=>肯定不行
```
//=>代码强迫症(代码洁癖)，良好的编辑习惯，极客精神

### JS常见的数据类型
- 基本数据类型
    + 数字number
      常规数字和NaN
    + 字符串string
      所有用单引号，双引号，反引号(撇)包起来的都是字符串
    + 布尔boolean
       true/false
    + 空对象指针null
    + 未定义undefined
- 引用数据类型
   + 对象数据类型 object
      + {}普通对象
      + []数组对象
      + /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/ 正则对象
      + Math 数学函数对象
      + 日期对象
      + ...
   + 函数数据类型 function
-  Symbol
   Symbol:创建唯一值
   

