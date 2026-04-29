let rows:number = 5;

for(let i:number=0; i<=rows; i++)
{
    let line:string="";
    for(let j:number=i+1; j<=rows; j++)
    {
        line+=" ";

    }
    for (let k: number = 1; k <= i; k++) {
        line += "*";
    }
    console.log(line);
    
}