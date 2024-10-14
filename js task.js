//Check given string is palindrome or not?
function palin(x){

    let sum="";
    let y="";
    for(let i=x.length-1;i>=0;i--){
    sum=sum+x[i];
    }
    y=sum;
    if(x==y){
    console.log("It is palindrome");
    }
    else{
    console.log("Not a palindrome");
    }
    }
    palin("OhhO");
    palin("hello");
    palin("ahha");

// //For a given string if the character is in uppercase convert it to lowercase
// and vice verse for all of the characters in the string?

function convert(n){
    let final="";
    for(i of n){
    if(i==i.toLowerCase()){
    final=final+i.toUpperCase();
    
    }
    else{
    final=final+i.toLowerCase();
    }
    }
    console.log(final);
    
    }
    convert("somEThinG");
    convert('NaVeEn')