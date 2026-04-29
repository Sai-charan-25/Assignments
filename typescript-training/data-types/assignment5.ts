type employe = {
    baseSalary: number;
    experience: number;
    yearEndRating: number;

 }
const empMap = new Map<string, employe>();
empMap.set("Alice Johnson", {baseSalary:75000.0, experience:5.1, yearEndRating:4.2});
empMap.set("Bob Smith", {baseSalary:68000.0, experience:3.2, yearEndRating:3.8});

console.log(empMap);