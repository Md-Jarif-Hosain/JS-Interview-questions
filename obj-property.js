const students = [
    { id: 21, name: "Jarif" },
    { id: 22, name: "Rony" },
    { id: 23, name: "Sifat" },
    { id: 24, name: "Akram" },
];

const names1 = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const elmName = element.name;
    names1.push(elmName);
};
console.log(names1);//traditional way


const names2 = students.map(n => n.name); //output with Array map method
console.log(names2);



const names3 = students.filter(n => n.id > 20); //use filter method for fulfill a special condition.
console.log(names3);


const names4 = students.find(n => n.id > 20); //use find method for getting first element which fulfill a special condition.
console.log(names4);