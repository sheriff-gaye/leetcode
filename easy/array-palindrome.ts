function firstPalindrome(words: string[]): string {
    for (let word of words){
        if(word===word.split('').reverse().join('')){
            return word;
        }
    }
    return "";
  
    
};

console.log(firstPalindrome(["racecar", "apple"]));