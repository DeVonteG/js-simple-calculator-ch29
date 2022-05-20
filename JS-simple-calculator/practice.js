let myArray=[1,2,10, true, "DeVonte"];

console.log(myArray [3]);


let practice=["What is the meaning of life?", 42, true];

console.log(practice);
//array declarations
const numbers=[10,20,30,40,50];
const months=["Jan", "Feb", "Mar", "Apr", "May"];
// If you want to edit directly in the array with out accessing array //months[3]="changed";

//methods for arrays
numbers.push(60,70,80); // add elements to end of array
numbers.unshift(-30,-20,-10,0);/// add elements to beginning of array

//months.pop(); // removes last element of array
//months.shift(); // removes first element of array
months.splice(1,1);// removes specific array and moves next array to that position
//displaying the values
console.table(months);
console.table(numbers);

//access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//Array dimension
console.log(numbers.length);

