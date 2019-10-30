let i = 1;
let offoo = true;
let item = null;
 function fn(){
    item =  setInterval(()=>{
         box.innerHTML = `<img src=".img/9 (${i}).jpg">`
         if(i==67){
             i=1;
         }else{
             i++;
         }
     },100)
 }
 fn()
 body.onclick = function(){
     if(offoo){
         clearInterval(item)
     }else{
         fn()
     }
      offoo = !offoo;
 }