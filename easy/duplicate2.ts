function isPalindrome(s: string) {


    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');

};


console.log(isPalindrome("race a car"))