

function subtractProductAndSum(n:number):number{

    const num=n.toString().split('').map(Number);

    const product=num.reduce((a,b)=>a*b);
    const sum=num.reduce((a,b)=>a+b);
    return product-sum
}

console.log(subtractProductAndSum(423));

