let customerName: string = 'Sai charan';
let creditScore: number = 550;
let income:number = 74000.0
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 35.0;

if(creditScore>750)
{
    console.log(`Loan is approved as ${customerName} credit score is > ${creditScore}`);
}
else if(creditScore>=650 && creditScore<=750)
{
    if(income>=50000)
    {
        if(isEmployed)
        {
            if(debtToIncomeRatio<40)
            {
                console.log(`Load is approved as ${customerName} has less DTI ${debtToIncomeRatio}`);
            }
            else
            {
                console.log(`Loan is rejected/denied as ${customerName} DTI is more ${debtToIncomeRatio}`);
            }
        }
        else
        {
            console.log(`Loan is denied as ${customerName} is employed: ${isEmployed}`);
        }
    }
    else
    {
        console.log(`Loan is denied as ${customerName}'s income is less`);
    }
}
else
{
    console.log(`Loan is denied as ${customerName} credit score is very less ${creditScore}`);
}