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
/*
Ruby Version
def euler2(number)
    a=0
    b=1
    c=0
    sum=0
    numbers=[]
    while a<number do
        if a%2==0 
            sum+=a
        end
        c=a+b
        a=b
        b=c
        numbers.push(c)
    end
    return sum
end
euler2(4000000) 
*/
