Problem2=function(number){
a=0;
b=1;
c=0
sum=0;
numbers=[];
while(a<number){
    if(a%2===0){
     sum+=a;
    }
    var c=a+b;
    var a=b;
    var b=c;
    numbers.push(c);
}
return sum;
}
