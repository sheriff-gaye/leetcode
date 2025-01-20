// function reverseWords(s: string) {
//     const words=s.split(' ');

//     const reverseWords=words.map(word=>word.split('').reverse().join(''));

//     return reverseWords.join(' ');
    
// };


// console.log(reverseWords("Let's take LeetCode contest"));




function reverseWords(s:string){


    return s.split(' ').reverse().join(' ').toString()




}

console.log(reverseWords("Let's take LeetCode contest"))