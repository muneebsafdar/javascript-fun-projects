const display=document.getElementById('calc-display')

const Calculator_wapper=document.getElementById('calc-wrapper')

let equation=''

Calculator_wapper.addEventListener('click',(e)=>{
    if (e.target.tagName==='BUTTON' && e.target.innerHTML!=='AC' && e.target.innerHTML!=='DEL' && e.target.innerHTML!=='=') {
        equation+=e.target.innerHTML
        display.innerHTML=equation
    }else if (e.target.tagName==='BUTTON' && e.target.innerHTML==='='){
        const safeEquation = equation
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-');
        try {
            display.innerHTML=eval(safeEquation)
            equation=''
        } catch (error) {
            alert('eqauation is wrong')
        }
        
    }else if(e.target.tagName==='BUTTON' && e.target.innerHTML==='AC'){
        display.innerHTML=''
        equation=''
    }else if(e.target.tagName==='BUTTON' && e.target.innerHTML==='DEL'){

        equation=equation.slice(0,equation.length-1)
        display.innerHTML=equation
        console.log(equation.length);
        
    }
    
})

