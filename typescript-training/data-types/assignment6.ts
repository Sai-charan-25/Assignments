let n:number = 1;
let isPrime:boolean = true;

if(n<=2)
{
    isPrime = false;
}
if(n>=2)
{
    for(let i:number=2; i<n ; i++)
    {
        if(n%i==0)
        {
            isPrime = false;
        }
    }
    
}
console.log(`Output: ${isPrime}`);
if(isPrime == true)
{
    console.log(`Given number ${n} is prime number`);
}
else{
    console.log(`Given number ${n} is not a prime number`);
}

