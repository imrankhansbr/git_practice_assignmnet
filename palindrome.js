let str="kadak";
let var="";
for(let i=str.length-1;i>=0;i--){
var+=str[i];
}
if(var==str){
    console.log("Palindrome");
}else{
    console.log("Not Palindrom");
}
