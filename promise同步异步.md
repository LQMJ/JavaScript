### 同步异步
  - JS按理来说是从上往下解读代码，它是单线程的（同一时间只能做一件事情）
  - 事件调用：把任务交给了事件引擎（所有的js事件全部都是异步的）
  - 同步：代码从上往下依次执行，如果一个地方卡住了，下面的代码就不执行了
  - 异步：虽然代码是丛上往下依次执行，如果一个地方卡住了，不会阻止代码向下执行
    + 定时器
    + 所有事件
    + promise
    + 异步队列分为宏任务（定时器）和微任务（promise），先执行微任务，再执行宏任务
  - js代码执行过程：先执行主线程的代码，如果主线程有异步代码，会把异步代码放到异步队列中存储,当异步条件成立的时候，会把异步队列的代码压入到主线程内执行，压入的方式是如果有微任务，先执行微任务，执行完微任务再执行宏任务，当主线程有空间执行压入的代码，执行完之后再从异步队列中压入异步代码到主线程中，这个过程叫事件循环
  > 注意的是执行完微任务是第一层的，如果在宏任务中开个微任务，先执行宏任务，再执行宏任务中的微任务
 - 异步的操作是不容易进行维护开发的，同步操作才利于维护开发（上面的代码执行完才会执行下面的，有序执行）
 - promise是解决异步编程顺序问题的（也就是说让异步的代码同步执行）
 - 进程与线程的关系：一个进程会有多个线程

### promise
  - promise 承诺
  - promise执行代码
```
   let p = new Promise(function(resolve,reject){
    resolve(5);
})
p.then(data=>{console.log(data)})


new Promise(function(resolve,reject){
    代码是主线程

    //当异步代码执行完，通过异步代码的结果去调用resolve或者reject
    //异步代码有可能报错或者错误，如果报错或者错误就执行reject
    //一般都是resolve(放异步的结果)
})
它有一个返回值，返回值是promise对象，这个对象有then方法
then(成功函数,失败函数)（then的第二个参数为失败函数，也可以不用写，直接在then函数之后.catch(函数)就可以了）
第一个then（异步队列代码  微任务）
    成功函数里面的参数就是异步的结果
第二个then（异步队列代码  微任务）
    第一个then的返回值
```
  - promise虽然解决了异步编程的问题，但是在then外面还是异步的
  - promise 状态凝固，第一个状态固定，以下的都不会执行
  - promise.resolve 直接返回成功状态的promise对象
  - promise中的值只要不在then里面就是主线程，在then里面是微任务
  - then中包含2个函数，第一个函数是成功之后的回调，第二个函数是失败之后的回调函数
  - promise多个then链式调用，上一个then没有返回值，下一个then接收参数就是undefined
  - promise多个then链式调用，如果then中都不是函数，那么会穿透，知道then是函数为止
  - then或catch不能返回promise本身，否则会报错
  - finally不管成功还是失败都会进回调函数
  - 如果代码有可能会报错，下面的代码是不会执行的，如果使用try、catch，那么try中的代码报错会进catch，报错是不会影响后面代码执行的
  - fetch().then(d=>d.json()).then()
    + 当进第一个then的时候，d就是返回的数据，但是这个数据被promise包了一层
    + json数据是字符串，把json转成对象使用JSON.parse()
    + then里面才是微任务（异步代码）
    + then里面必须传函数，then里面如果不是函数，就会穿透，直到then是函数为止
    ```
       //第一个then的返回值是第二个then的参数
    fetch().then(function(d){
        return d.json();
    }).then(function(d){
        console.log(d);
    })
    ```
  - JSON 长得像对象和数组的字符串，本质是字符串
    + JSON取值是不方便的，可以使用JSON.parse(),把json转成对象
    + parse必须标椎的JSON格式才能成功转换
     - 标椎格式：'{"name":"zf"}'
  - 对象转JSON -> JSON.stringify()
    + JSON.stringify()的副作用是函数和undefined会被过滤掉

### promise.all()
  - 可以放多个promise实例，包装成一个新的promise实例
  - 在数组中的异步操作都要成功才返回结果，只要有一个不成功，就走reject
### promise.race
  - 在数组中只要有一个异步成功就返回这次成功的结果