var problem1=function(number){
    var sum=0
    for(i=1;i<number;i++){
        if(i%3===0||i%5===0){
            sum+=i;
        }
       
    }
    return sum;
}
/*
Ruby version:
def euler1(number)
    sum=0
    for i in 0..number-1
    if i%3==0||i%5==0
        sum+=i
    end
end
    return sum
end
euler1(1000)
*/
