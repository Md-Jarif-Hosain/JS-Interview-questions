const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const part = nums.slice(2, 5); // index number of starting and ending point
console.log(part);
console.log(nums);



const remove = nums.splice(2, 3, 100); //First number is the index number of array, and the 2nd number is the delete count of element, and from 3rd number start injecting values for array.  
console.log(remove);
console.log(nums);




const together = nums.join(' ');
console.log(together);