console.log("Local Storage");

localStorage.setItem('name','henry');
localStorage.setItem('score',72);
console.log(localStorage.getItem('name')+' scored '+localStorage.getItem('score'));
localStorage.removeItem('score');
