###  Math
-  Math.floor() 向下取整
 ```js
        Math.floor(16,9);// =>16
```

-  Math.ceil() 向上取整
```js
        Math.ceil(16,7)// =>7
    ``` 
-  Math.abs()  取绝对值
```js
      Math.abs(-20) // =>20
      Math.abs(0) // 0
```
-  Math.max()  取最大值
```js
    let ary =[1,2,3,4,5,6,7]
    Math.max(...ary)// =>7
```
-  Math.min()  取最小值
```js
    let ary =[1,2,3,4,5,6,7] 
    Math.min(...ary) // =>1
```
-  Math.round()  四舍五入
```js
    Math.round(12.5)// =>13  正数中5是入
    Math.round(-12.5)// =>12  负数中5是舍
```
-  Math.randow()  获取0~1之间的随机小数

-  Math.sqrt() 给一个数开平方
```js
   Math.sqrt(9)// =>3
   Math.sqrt(-9)// =>NaN
   // 符合 N*N = M  这样的M才能整开平方,负数开不了平方
```
-  Math.pow() 计算一个数的多少次幂
```js
    Math.pow(2,10)// =>1024
```