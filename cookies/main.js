console.log("Cookies");

document.cookie = 'friend=Kevin; expires='+new Date(2025,8,17).toUTCString();
document.cookie = 'car=mercedes';
document.cookie = 'hello=bye all';
document.cookie = 'game=clash royale; expires='+new Date(2021,0,1).toUTCString();//we won't see this one as the expiry date has already crossed

console.log(document.cookie);