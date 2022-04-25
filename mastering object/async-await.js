
// *************************************** Await function example
(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
})();
function displayData(data) {
    const parentNode = document.getElementById('myList');
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const item = document.createElement('li');
        item.innerText = user.name;
        parentNode.appendChild(item);
    };
};


// ******************** async function example:
// async function greeting(name) {
//     return 'hello MD ' + name;
// };

// const greeting2 = greeting("jarif");
// console.log(greeting2);
// greeting2.then(res => console.log(res));




// Data load with async function
(async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;

})().then(data => {
    displayData(data);
});