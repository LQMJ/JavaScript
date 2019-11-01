### DOM
DOM (document object model) 文档对象模型

作用：通过document提供的API(接口文档)，赋予开发者操作页面的能力；
        
如果要操作某个元素，肯定要先获取出来
         document的API:
              document.getElementById;
              document.getElementsByTagName;
              document.getElementsClassName;
              document.querySelectorAll;
              document.querySelector;

 获取的元素是个对象，在js中，标签和对象是**相映射的关系，修改对象的属性有可能会改变标签，修改标签会修改到对象身上。

 难点：DOM树  把页面中所有的节点组织在一个树形结构中，方便我们通过关系去操作页面


       页面中的所有内容都由不同节点组成

        元素节点 -> 标签    1   
        注释节点 -> 注释    8
        属性节点 -> 标签上的属性    2    
        文本节点 -> 文字、回车换行  3
        文档节点 -> document  9

        nodeType  查看节点的类型
        nodeValue  操作节点的内容 
        nodeName   读取节点的名字
        attributes  属性节点(包括标椎属性和自定义属性集合)  

       element.setAttribute('key','value')设置行间属性
 
       element.getAttribute('key')  获取行间属性

       element.removeAttribute('key')   删除行间属性
           
    树状结构（关系）
             childNodes   获取元素中所有**子节点**

             children     获取所有的**子元素节点**

             firstEelmentChild   第一个子元素

             lastElementChild     最后一个子元素

             previousElementSibling   上一个兄弟元素

             nextElementSibling   下一个兄弟元素
```js

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
     <ul id="ul">
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
         <li>6</li>
         <li>7</li>
     </ul>

    <script>
        /* 
         第一个子元素: firstEelmentChild   

          最后一个子元素: lastElementChild     

          下一个兄弟元素节点: nextElementSibling

          上一个兄弟元素节点: previousElementSibling
        
         */
     console.log(ul.firstElementChild)// =><li>1</li>
     console.log(ul.lastElementChild) // =><li>7</li>
     console.log(ul.firstElementChild.nextElementSibling);// => <li>2</li>
     console.log(ul.firstElementChild.previousElementSibling)// => null
    
    
    
    </script>
</body>
</html>
```

 元素的增删改插

        增  document.createElement(标签名)  创建元素

        删  prent.removeChild(要删除的元素)

        改  prent.replaceChild(新元素，旧元素)    新元素替换旧元素

        插入  prent.insertBefore(新元素，旧元素)  往旧元素的前面插入新元素
             parent.appendChild(子元素)          往元素的最后一位插入

        克隆   element.cloneNode(布尔值)

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body id="body">
    <input type="text" id="txt"><button id="btn">发送</button>
    <ul id="ul"></ul>
    <script>

    let div = document.createElement('div'); // 创建div
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.background = 'red';
    div.innerHTML = '<div>中国红</div>';
    body.appendChild(div) // 插到body的末尾

     let div2 = div.cloneNode(true) // 克隆元素
     body.appendChild(div2)
     div2.innerHTML = '<div>中国龙</div>';
     body.replaceChild(div2,div) // 改  新标签替换旧标签
     
    btn.onclick = function(){
        let val = txt.value;// 创建变量储存input框的内容
        let li = document.createElement('li')//创建元素 
        // li.onclick = function(){
        //     ul.removeChild(this); // 删除元素
        // }
        li.innerText = val;
        ul.appendChild(li); //  插入元素
       // txt.value = ''; // 清空input框的内容
    }
    </script>
</body>
</html>
```