let sentence:string = "Java programming is fun and challenging";
let words:String[]=sentence.split(' ');
let count:number=0;

//assignment7 Number of words in a sentence
for(let word of words)
{
    console.log(word);
    count++;
}
console.log(`Number of words in a sentence: ${count}`);

// reverse of words in a sentence
let rev:string= '';
for(let i:number=words.length-1; i>=0; i--)
{
    rev+=words[i]+ " ";
}
console.log(`rev of words in a sentence: ${rev}`);

//First chara of each word in a sentence as upper case
let firstUpperCaseWord:string="";
for(let word of words)
{
    firstUpperCaseWord+= word.replace(word.charAt(0), word.charAt(0).toUpperCase())+ " ";
}
console.log(firstUpperCaseWord);