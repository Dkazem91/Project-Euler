var Problem3=function(prime){
    var a=2;
    primefactors=[]
while(a<prime){
    if(prime%a===0){
        prime=(prime/a)
        primefactors.push(a);
        a=2;
        
    }else{
        a++;
    }
    
}
return prime
}
/*
Ruby Version
def euler3(number)
    a=2
    primefactors=[]
    while a<number do
        if number%a==0 then
            number=(number/a)
            primefactors.push(a)
            a=2
        else
            a+=1
        end
        
    end
    
    primefactors.push(number)
    return primefactors
end
euler3(600851475143)
*/
