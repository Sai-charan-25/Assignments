let prices:number[] = [7,6,2,5,8,9,3,7,9];
let min:number = prices[0]!;
let pmn:number=0;
for(let i:number=0;i<prices.length; i++)
{
    
    if(min>prices[i]!)
    {
        min=prices[i]!;
        pmn=i;  
    }
    
}
 console.log(`lowest price ${min}`);
 console.log(`position of lowest price:${pmn}`);

 let max:number=prices[pmn]!;
 let pmx:number=pmn;

 for(let j:number = pmn; j<prices.length; j++)
 {
    if(max<prices[j]!)
    {
        max=prices[j]!;
        pmx=j;
    }
 }
console.log(`highest price ${max}`);
console.log(`position of highest price:${pmx}`);

let profit:number=(max-min);

if(profit>0)
{
    console.log(`buy on day${pmn}(price=${min}) and sell on day${pmx}(price=${max}), profit is ${max-min}`)

}
else{
    console.log(`No transaction is done and profit is "0"`)

}

