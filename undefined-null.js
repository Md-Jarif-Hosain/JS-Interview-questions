let name;
console.log(name); //undefined variable.





function add(num1, num2) {
    console.log(num1 + num2); //without returning value.
};
const result = add(13, 12);
console.log(result);// try to store value from a function to variable without return.





function add2(num1, num2) {
    console.log(num1, num2);
};
const result2 = add2(13);
console.log(result2); //Do not pass enough parameters.




const exm = {
    name: "smart dude",
    phone : 12345678910,
};
console.log(exm.address); //try to get from an obj's unset property.






let ages = [2, 5, 7];
console.log(ages[11]);//try to get unset value from an array





let fun = undefined;
console.log(fun); //set value "undefined"

