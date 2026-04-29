let nameOfStudents: string[] = ['Suresh', 'Mahesh', 'Ramesh'];
let stuMarks:number[] = [75, 80, 82];
let improvedmarks:number[] = [];
let total:number = 0;
console.log("Updated Marks:")
for(let i:number=0; i<stuMarks.length; i++)
{
    improvedmarks[i] = stuMarks[i]! + 10;
    total = total+improvedmarks[i]!;
    console.log(` ${nameOfStudents[i]}:  ${improvedmarks[i]}`);
}


let avgMarks: number = total/nameOfStudents.length;
console.log(`Average Marks: ${avgMarks}`);

