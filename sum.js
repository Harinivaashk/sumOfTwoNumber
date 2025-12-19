const readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question('Enter first number:',(a)=>{
    r1.question('Enter second number:',(b)=>{
        const sum=Number(a)+Number(b);
        console.log(`the sum :`+sum);
        
;    })
})