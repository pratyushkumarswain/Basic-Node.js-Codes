function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)){
            count ++;
        }
    }
    return count;
}

console.log(countVowels("javascript"))
// (/[aeiou/gi])?length || 0
//function countvowel(str){
//    return str.match(/[aeiou/gi])?length || 0

//}
//console.log(countvowel("NIT COLLLAGE"));