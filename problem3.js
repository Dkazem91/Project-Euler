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
