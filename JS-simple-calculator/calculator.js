//calculation() execution of calculation in console
function calculation(){
    //addition//
    let num1=Number(prompt("Enter the num1:"));
    let num2=Number(prompt("Enter the num2"));
    sum(num1,num2);
    difference(num1,num2);
    product(num1,num2);
    quotient(num1,num2);

    //addition//subtraction//multiplication//division//
    document.getElementById("results").innerHTML=` 
    
    <p>Sum = ${num1} + ${num2}= ${sum (num1,num2)}</p>
    <p>Difference = ${num1} - ${num2}= ${difference (num1,num2)}</p>
    <p>Product = ${num1} * ${num2}= ${product (num1,num2)}</p>
    <p>Quotient = ${num1} / ${num2}= ${quotient (num1,num2)}</p>  
`;}

function sum(a,b){
    return a+b;
}

function difference(a,b){
    return a-b;
}
function product(a,b){
    return a*b;
}
function quotient(a,b){
    return a/b;
}
///////////////////////////////////////////////////////////

