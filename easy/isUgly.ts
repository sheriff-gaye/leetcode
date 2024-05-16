
// an ugly number is a positive ingteger  whose prime factors are limited to [2,3,6]


function isUgly(n:number):boolean{

    if (n<0) return false;

    const factors=[2,3,6];

    for(const factor  of factors){
        while(n%factor==0){
            n/=factor
        }
    }

    return n ===1

}

// testing 
console.log(isUgly(6)) // true
console.log(isUgly(8)) // true