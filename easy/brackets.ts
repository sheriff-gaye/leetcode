function isValid(s: string):boolean{

    const dick={
        '(':')',
        '{':'}',
        '[':']'
    }

   const stack:string[]=[]

   for(const char of s){

    if (char in dick){
        stack.push(char)
        
    }

    else{

        if(stack.length===0){
            return false
        }

        

        const lastOpening=stack.pop()!

        if(dick[lastOpening]!==char){
            return false
        }
    }
   }

   return stack.length===0


    
};


console.log(isValid("()[]{}"))