//Factorial Program using Named function.

function factorial(n){
    let num=n;
    let res=1;
    while(num>0){
    res=res*num;
    num=num-1;
    }
    console.log(`factorial of ${n} is:${res}`)
    }
    factorial(1);
    factorial(2);
    factorial(3);
    factorial(4);

  //  2. Program to print no.of digits of given number using named function

  function digits(n){
    let c=0;
    if(n==0){
    console.log("length is 0");
    }
    else{
    while(n>0){
    n=Math.floor(n/10);
    c=c+1;
    }
    console.log("Length of number is: "+c);
    }
    }
    digits(5);
    digits(57);
    digits(31);
    digits(2002);