const select = document.querySelector('select');
const div = document.querySelector('div');
if(localStorage.getItem('divTheme')){
    div.classList.remove(div.className);
    div.classList.add(`${localStorage.getItem('divTheme')}bg`);
    select.value = localStorage.getItem('divTheme');
}


select.addEventListener('change',(e)=>{
    div.classList.remove(div.className);
    div.classList.add(`${e.target.value}bg`);
    localStorage.setItem('divTheme',e.target.value);
})

window.addEventListener('storage',(e)=>{
    if(e.key === 'divTheme'){
        div.classList.remove(div.className);
        div.classList.add(`${e.newValue}bg`);
        localStorage.setItem('divTheme',e.newValue);
        select.value = e.newValue;
    }
})