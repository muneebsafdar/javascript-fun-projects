let text=document.getElementById('text')
let chararcters=(text.innerHTML).split('')

text.innerHTML=''

console.log(chararcters);

console.log(text.innerHTML);
chararcters.forEach(ch=> {    
    text.innerHTML+=`
    <span>${ch}</span>
    `
    console.log(text);
    

});

let count=0
setInterval(settingClass,500)

function settingClass(){
    let spans=document.querySelectorAll('span')[count]
    console.log(spans);
    
    spans.classList.add('fade')
    count++
}


