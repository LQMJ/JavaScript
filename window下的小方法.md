 
 - onscroll 当有滚动条的时候，滚轮即触发（滚轮事件）
 - onload 加载成功之后触发
 - onerror 加载失败触发
 DOM
  - 在DOM中获取可视的高度/宽度
    + document.documentElement.clientHeight
    + document.documentElement.clientWidth如果有滚动条，会减去滚动条的宽度
   - getBoundingClientRect()
     + 返回的是一个对象，这个对象下放的是元素的绝对位置

BOM
  - window.innerHeight 可视区的高度
  - window.innerWidth  可视区的宽度 如果有滚动条 ，不会减去滚动条的宽度
  - window。pageXOffset/window.pageYOffset 滚动条的距离

图片的延迟加载
  - 让图片显示：可视区的高度+滚动条的距离 >= 每张图片的绝对位置

Object.keys()
 - 可以把对象的key都拿出来，是个数组
Object.values()
 - 可以把对象的value都拿出来，是个数组
oninput
 - 当用户输出内容的时候触发事件