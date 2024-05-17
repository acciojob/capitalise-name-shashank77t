//your JS code here. If required.
const element=document.querySelector('#fname');

let str="";
element.addEventListener("input",()=>{
   if(element.value!=' '){
       str=element.value;
   }
   
})
window.addEventListener("click",()=>{
    element.value=str.toUpperCase();
})