const myObj = {
    name: 'Jarif Hosain',
    getFullName: function () {
        console.log(this);
        return 'Md' + this.name;
    }
};
const anotherObj = {
    name: 'jarif hosain'
};

anotherObj.getFullName = myObj.getFullName;
// myObj.getFullName();
// anotherObj.getFullName();

function add(num, num2) {
    console.log(this);
    return num + num2;
};

add(12,13);

// example of "this" keyword 
anotherObj.sum = add;
anotherObj.sum();

setTimeout(function(){
    console.log(this);
},1000)