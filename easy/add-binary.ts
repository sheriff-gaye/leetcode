
//problem here is to add binary 

function addBinary(a: string, b: string): string {

    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

}
   

console.log(addBinary("11", "1")); 
