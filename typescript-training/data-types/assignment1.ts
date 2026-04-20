//1.temperature of a city in degree celsius: 34.6

let temp:number = 34.6
console.log(`temperature of a city in degree celsius:${temp}`);

//2.Whether a customer has placed an order: true or false
let orderPlaced:boolean = true;
console.log(`Whether a customer has placed an order: ${orderPlaced}`);

//3. Person's phone number: "123-456-7890"

let phNumber:String = '"123-456-7890"';
console.log(`Person's phone number: ${phNumber}`);

//4.Amount of money in a customer's bank account: 1000.50 

let amount:number = 1000.50;
console.log(`Amount of money in a customer's bank account: ${amount} `);

//5. Person's email address: "john.doe@example.com"

let email:string = '"sai.charan@example.com"';
console.log(`Person's email address: ${email}`);
console.log('Person\'s email address: ' +email);
console.log("Person's email address: " +email);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194 

let location:number[]= [37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude):${location}`);

//7. Person's marital status: true or false 

let maritalStatus:boolean=false;
console.log(`Person's marital status: ${maritalStatus}`);

//8.Person's occupation: "Software Engineer"

let occupation:string = '"software Engineer"';
console.log(`Person's occupation: ${occupation}`);

//9.Person's favourite colour: "Blue" 

let favcolor:string = '"Blue"';
console.log(`Person's favourite colour: ${favcolor}`);

//10.. Current year: 2023

let date= new Date();
console.log(`Current year: ${date.getFullYear()-3}`);

//11. Number of followers on a social media platform: 1,000,000

let followers:number | string = '1,000,000'
console.log(`Number of followers on a social media platform: ${followers}`)

//12.. Rating of a movie: 7.5

let rating:number = 7.5
console.log(`Rating of a movie: ${rating}`);

//13. Person's blood type: 'A' 

let bloodGroup:string ="'A'";
console.log(`Person's blood type: ${bloodGroup}`);

//14.. Title of a book: "To Kill a Mockingbird"

let title:string = '"To Kill a Mockingbird"'
console.log(`Title of a book: ${title}`);

//15. Number of employees in a company: 500

let empCount:number = 560;
console.log(`Number of employees in a company: ${empCount}`);

//16. Time of an event: 2:30 PM

let time = new Date();
console.log(`time of an event:${time.toLocaleTimeString().substring(0,4)} ${time.toLocaleTimeString().substring(8,10)}`);

let ctime = date.setTime(230)
console.log(ctime);


//17. Name of a country: "United States"

let country:String = 'United States';
console.log(`Name of a country: "${country}"`);

//18. Person's eye color: "Brown"

let eyeColor:String = "Brown";
console.log(`Person's eye color: "${eyeColor}`);

// 19. Person's birthplace: "New York City"

let birthPlace:String = 'New York City';
console.log(`Person's birthplace: "${birthPlace}"`);

//20. Distance between two cities: 200.5

 let Distance:number = 200.5;
 console.log(`Distance between two cities: ${Distance}`);