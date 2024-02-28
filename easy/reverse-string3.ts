function reverseWords(s: string) {
    const words=s.split(' ');

    const reverseWords=words.map(word=>word.split('').reverse().join(''));

    return reverseWords.join(' ');
    
};


console.log(reverseWords("Let's take LeetCode contest"));