

function lengthOfLastWord(s: string){

    const wordf=s.trim().split(" ").pop()?.length;
    return wordf
    
};


console.log(lengthOfLastWord("Sheriff Gaye"));