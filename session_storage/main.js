console.log("Session Storage");

sessionStorage.setItem('name','naruto');
sessionStorage.setItem('score',85);
console.log(sessionStorage.getItem('name')+' scored '+sessionStorage.getItem('score'));
sessionStorage.removeItem('score');