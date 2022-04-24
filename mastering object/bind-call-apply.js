const normalPerson = {
    firstName : 'Jarif',
    lastName  : 'Hosain',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount, tax = 0, tips = 0){
        console.log(this); // to log the targeted obj.
        this.salary = this.salary - (amount + tax + tips);
        return this.salary;// It's called method
    }
};

// normalPerson.chargeBill(10000);
// normalPerson.chargeBill(2000);
// console.log(normalPerson.salary);


const heroPerson = {
    firstName : 'Hero',
    lastName  : 'Matha',
    salary : 50000
};
const friendlyPerson = {
    firstName : 'Hero',
    lastName  : 'Mota',
    salary : 60000
};




// *******************'bind' method
const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(3000);
console.log(heroPerson.salary);

const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
friendlyBillCharge(3000);
console.log(friendlyPerson.salary);



//  *******************'call' method 
normalPerson.chargeBill.call(heroPerson, 10000, 1000, 500);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 10000, 1000, 500);
console.log(friendlyPerson.salary);




//  *******************'apply' method 
normalPerson.chargeBill.apply(heroPerson, [10000, 1000, 500]);
console.log(heroPerson.salary);
normalPerson.chargeBill.apply(friendlyPerson, [10000, 1000, 500]);
console.log(friendlyPerson.salary);