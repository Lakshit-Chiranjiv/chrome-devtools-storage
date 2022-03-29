console.log("Local Storage");

localStorage.setItem('name','henry');
localStorage.setItem('score',72);
console.log(localStorage.getItem('name')+' scored '+localStorage.getItem('score'));
localStorage.removeItem('score');

const exampleObj = {
    name: 'Lakshit',
    age: 20,
    role: 'developer'
}

localStorage.setItem('exObj',JSON.stringify(exampleObj));
console.log(JSON.parse(localStorage.getItem('exObj')));