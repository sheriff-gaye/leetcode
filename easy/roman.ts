



function romanToInt(s: string) {

    const values:{[key:string]:number}={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    let result=0

    for (let i=0; i<s.length ;i++){
        const current=values[s[i]];
        const next=values[s[i+1]];

        if(current<next){
            result-=current
        }
        else{
            result+=current
            }
    }

    return result
    
    
};

console.log(romanToInt('III'));     // Output: 3
console.log(romanToInt('IV'));      // Output: 4
console.log(romanToInt('IX'));   