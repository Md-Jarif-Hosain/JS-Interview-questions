class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    };
};

 const heroPerson = new Person('Jarif', 'Hosain', 50000);// to creat an object from class
 console.log(heroPerson);

 const friendlyPerson = new Person('Mahdi', 'Hasan', 60000);
 console.log(friendlyPerson);