let transactions:Map<number, number> = new Map();
transactions.set(1, 50000);
transactions.set(2, -2000);
transactions.set(3, 3000);
transactions.set(4, -15000);
transactions.set(5, -200);
transactions.set(6, -300);
transactions.set(7, 4000);
transactions.set(8, -3000);
let creditCount:number=0;
let debitCount:number=0;
let totalAmountCredited:number=0;
let totalAmountDebited:number=0;
let balanceAmountAvailable:number=0;

console.log("Transcation", transactions);
console.log("total number of credit and debit transcations Completed:", transactions.size);
for(let i:number=1; i<=transactions.size; i++)
{
    console.log(transactions.get(i));
    if(transactions.get(i)!>0)
    {
        creditCount++;
        totalAmountCredited += transactions.get(i)!;
        if(transactions.get(i)!>10000)
        {
            console.log(`Suspicious transaction of amount ${transactions.get(i)}`)
        }
    }
    else
    {
        debitCount++
        totalAmountDebited +=transactions.get(i)!;
        if(transactions.get(i)!<-10000)
        {
            console.log(`Suspicious transaction of amount ${transactions.get(i)}`)
        }
    }

}

console.log(`total credited: ${creditCount}`);
console.log(`total debited: ${debitCount}`);
console.log(`total credited amount ${totalAmountCredited}`);
console.log(`total credited amount ${totalAmountDebited}`);
console.log(`Balance amount in the account ${totalAmountCredited-totalAmountDebited}`);




