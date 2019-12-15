### jquery
  - 定义：jqery是一个小型且功能丰富的javascript类库，它简化了DOM操作，动画操作，兼容性，数据请求操作
  - jquery有多个版本
    + 源码版（学习版）：jquery.js
    + 压缩版：jquery.min.js
  - 引入jquery的方式：<script src="./node_modules/jquery/dist/jquery.min.js"></script>
### 下载jquery类库文件
  - (安装) npm init -y 生成一个package.json文件
  - npm install jquery -D
### jquery选择器
  - $是jquery对象，也是一个函数，获取到的结果就是一个jquery对象
   + jquery对象就可以使用jquery的内置方法 （select 选中并聚焦）
  - css如何选择，jquery就如何选则
   + $('#box') 获取id
   + $('li') 获取所有li元素
   + $('.active') 获取所有的.active元素
   + $('#ul li')
   + $('input[type="button"]') 属性选择器
   + $('input[type!="button"]') 元素不加事件之类的方式
   + 开头 $('input[class^="b"]')
   + $ 结尾 $('input[class$="b"]')
   + 伪类选择器
     - $('li:even').css(); even是偶数，但是js是从0开始计数（看上去是生活中的奇数
     - $('li:odd').css(); odd是奇数，但是js是从1开始计数（看上去是生活中的偶数）
     - $(':button') 获取type为button的元素
   + $('button').click(function(){ console.log($(':checked')); 获取选中的元素 })
   + $(':button:first') 获取第一个元素
   + $(':button:last') 获取最后一个元素
   + $(':button:eq(2)') 获取第2个button

###  jquery属性操作
  - attr -> getAttribute,setAttribute attr两个参数是设置属性，attr一个参数是获取属性值
  - removeAttr -> removeAttribute 
  - $(':checkbox').attr('checked',true) 选中
  - prop 获取表单的状态布尔值（表单元素用）
  - val() -> value
  - html() -> innerHTML
  - text() -> innerText
  - ide() -> display:none 隐藏
  - show() -> display:block 显示
  - find() -> getElementsByTagName
  - remove() -> removeChild 删除

### jquery样式操作
  - css()设置行内样式 -> style
  - $('#box').css('width')获取宽度
  - $('#box').css('width',200)设置宽度

### jquery对象转原生对象，原生对象转jQuery对象
  - 原生对象转jquery只需要包$()即可，原生对象就可以使用jquery内置方法
   + box -> $(box) 就变成了jquery对象
  - jquery对象转原生对象
    + $box -> $box.get(0)
    + $box -> $box[0]

### JQ_DOM
  - DOM文档对象模型
  - 增删改查
    + 添加元素：$('li')
    +  $('#ul').append($('li')) 将创建的li插入到ul中

### JQ事件
  - click
  - mouseover
  - mouseout
  - hover有两个参数，都是函数
    + 第一个参数是移入
    + 第二个参数是移出
    + hover是onmouseenter与onmouseleave的组合
  - delegate 事件监听 有三个参数
    + 第一个参数是元素
    + 第二个参数是不带on的事件名
    + 第三个参数是函数，函数中执行的事件是给第一个参数的元素用的
  - on 绑定事件 事件监听 有三个参数
    + 第一个参数是不带on的事件名
    + 第二个参数是元素（也可以放数据）
    + 第三个参数是函数，函数中执行的事件是给第二个参数的元素用的
  - off() 解除绑定事件
  - offset() 绝对位置（返回值是对象类型）
  - position() 基于父级的（返回值是对象类型）
  - hide()/show() 也是有动画的
  - toggle() 是显示隐藏的组合（缩小放大）
  - slideToggle() 显示隐藏（改变宽高）
  - fadeToggle() 渐隐渐现
  - stop() 在做jq动画的时候，点击多次需要加上stop()，阻止之前的动画执行
  - JQ中的所有事件，都是on来二次封装，JQ中的事件全部都是事件绑定
  - JQ的事件对象都是二次封装的，如果要拿到真正的原生js对象使用ev.originalEvent(原生对象事件)
  - 三大部分
   + 事件流
   + 有哪些事件，是干什么的
   + 事件对象
  - JQ中阻止冒泡和默认行为，直接return false即可
### 工具方法
  - $.
  - $.each(i,ele)
  - $.extend
    + 深浅拷贝
      - 可以有两个参数，也可以有三个是参数，两个参数是浅克隆，三个参数可以深克隆
      - 如果要深克隆，第一个参数要写true
    + 扩展方法
      - $.extend(扩展工具方法)扩展插件使用，extend里面写一个对象，对象的属性就是添加的方法名，值就是函数
      