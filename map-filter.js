const numbers = [3, 4, 5, 6, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// };


const output1 = numbers.map(function(element, index, array ){
    return element * element;
    // console.log(element, index, array);
});// map filter with traditional function
console.log(output1);

const output2 = numbers.map(x => x * x);// map filter with arrow function

console.log(output2);




const output3 = numbers.filter(x => x > 5);// filter method returns array of actual values
console.log(output3);



 const output4 = numbers.find(x => x > 3);//find method returns actual value
console.log(output4);