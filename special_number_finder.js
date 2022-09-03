let number="185";
let arr_num=[];
let num2=1;
let total=0;
arr_num=number.split("")
// console.log(arr_num.length)

for(let i=0;i<arr_num.length;i++){
    let num=arr_num[i]
    for(let j=1;j<num;j++){
        num2=num2+j*num2;
        
    }
    // console.log(num2)
    
    total=total+num2;
    
    num2=1;
}
if(total==number){
    console.log(`${number} is a Special Number`)
}else{
    console.log(`${number} is not a Special Number`)

}