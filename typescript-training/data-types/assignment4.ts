let transactions:Map<number, number> = new Map();
transactions.set(1, 50000);
transactions.set(2, -2000);
transactions.set(3, 3000);
transactions.set(4, -15000);
transactions.set(5, -200);
transactions.set(6, -300);
transactions.set(7, 4000);
transactions.set(8, -3000);

console.log("Transcation", transactions);

console.log("total number of credit and debit transcations Completed:", transactions.size);

for(let i:number=1; i<=transactions.size; i++)
{
    console.log(transactions.get(i));

    
}

console.log(transactions.entries);

console.log("total amount credited:", );
console.log("total amount debited:",)
