let done = document.querySelector('.done');
let inProcess = document.querySelector('.in-process');
let hide = document.querySelector('.hide')
let hide2 = document.querySelector('.hide-2');
let hide22 = document.querySelector('.hide-2-2');
let projects = document.querySelector('.projects');
let projects2 = document.querySelector('.projects-2')

inProcess.addEventListener('click' , ()=>{
    hide2.style.display = 'none';
    // hide22.style.display = 'none';
    hide.style.display = 'flex';
    // projects.style.height = '700px';
    // projects2.style.height = '700px';
})
done.addEventListener('click' , ()=>{
    hide.style.display = 'none';
    hide2.style.display = 'flex';
    // hide22.style.display = 'flex';
    // projects.style.height = '1050px';
    // projects2.style.height = '1050px';
})