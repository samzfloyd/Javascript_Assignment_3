let num = "370";
let array_num=[];

array_num=num.split("")
let total=0;
console.log(array_num)
let arre;
for(let i=0;i<array_num.length;i++){
    arre=array_num[i];
    arre=+arre*arre*arre;
    total =total+arre
}

if(total==num){
    console.log(`${num} is a Armstrong Number`)
}else{
    console.log(`${num} is not an Armstrong Number`)
}