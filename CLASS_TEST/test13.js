const name = "pratyush"
const vowels = "aeiouAEIOU";
const consonants = []
for (let i=0; i<name.length;i++){
    if (!vowels.includes(name[i])){
        consonants.push(name[i])
    }
}
console.log("Consonants",consonants);

    
