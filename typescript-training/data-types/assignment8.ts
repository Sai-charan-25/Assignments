let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let count:number=0;
let words:string[] = paragraph.split(" ");
let inxjava:number;

for(let i:number=0; i<words.length; i++)
{
    if(words[i]?.match("Java"))
    {
        count++;
        console.log(` Count: ${count} and index of the word "Java": ${i}`);
    }
}
console.log(`Occurance of word 'Java' is ${count} times`);
