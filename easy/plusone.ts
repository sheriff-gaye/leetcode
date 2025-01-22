function plusOne(digits: number[]) {

    const len = digits.length - 1

    const last = digits[len]

    const num = last + 1
    digits.pop()

    if (last < 9) {
        digits.push(num)  
    }
    else {

        digits.push(0)

        if(len==0){
            digits.unshift(1)
        }
        else {
            digits[len - 1] = digits[len - 1] + 1;
        }
        
       


    }
    return digits




};

console.log(plusOne([9,9]))