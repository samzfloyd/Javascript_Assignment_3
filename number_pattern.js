let num=0;
let str="";
for(let i=1;i<5;i++){
    for(let j=0;j<i;j++){
       num++
       str=str.concat(num) 
    }
    console.log(str)

    str=""
   
}