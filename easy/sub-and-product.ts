function subtractProductAndSum(n: number) {
    const nums=n.toString().split('').map(Number);

    const product=nums.reduce((a,b)=>a*b);
    const sum=nums.reduce((a,b)=>a+b);
    return product-sum

    
};

console.log(subtractProductAndSum(423));