

let lengthRange = document.getElementById('lengthRange')
let generateBtn=document.querySelector('.generate-btn')
let checkboxGroup=document.querySelector('.checkbox-group')
let output=document.querySelector('.output')
let lengthValue= document.getElementById('lengthValue')

let checkSmallCh=document.getElementById('a')
let checkLargeCh=document.getElementById('A')
let checkNumberCh=document.getElementById('0')
let checkSpecialCh=document.getElementById('@')


checkboxGroup.addEventListener('click',function (e){
    if(e.target.tagName==="INPUT"){
        if(e.target.hasAttribute('checked')){
            e.target.removeAttribute('checked')
        }else{
             e.target.setAttribute('checked','')
        }
    }
})

lengthRange.addEventListener('input',function(e){
    lengthValue.innerHTML=lengthRange.value
    
    let password=PassowrdGenerator()  
    if(password){
        output.textContent= password
    }
//    console.log(parseInt(lengthRange.value));
    
    
    
})

generateBtn.addEventListener('click',function(e){
    
    let password=PassowrdGenerator()  
    if(password){
        output.textContent= password
    }
    // console.log(parseInt(lengthRange.value));
})

function PassowrdGenerator(){
   
    let range=parseInt(lengthRange.value)
    if (checkSmallCh.hasAttribute('checked') || checkLargeCh.hasAttribute('checked') || checkNumberCh.hasAttribute('checked')
    || checkSpecialCh.hasAttribute('checked')) 
    {
        let password=''
        for (let i = 0; i < parseInt(lengthRange.value) ;i++) {
        
            if(checkSmallCh.hasAttribute('checked')){
                password+=genSmallCh()
                if (password.length>=range) break
            }
            if(checkLargeCh.hasAttribute('checked')){
                password+=genLargeCh()
                 if (password.length>=range) break
            }
            if(checkNumberCh.hasAttribute('checked')){
                password+=genNumberCh()
                 if (password.length>=range) break
            }
            if(checkSpecialCh.hasAttribute('checked')){
                password+=genSpecialCh()
                 if (password.length>=range) break
            }
        }
        console.log(password.length);
        
     return password
    }  
}

function genSmallCh(){
    let randomSmallCharacter=Math.floor(Math.random() * (122 - 97 + 1)) + 97
    return String.fromCharCode(randomSmallCharacter)
}
function genLargeCh(){
    let randomLargeCharacter=Math.floor(Math.random() * (90 - 65 + 1)) + 65
    return String.fromCharCode(randomLargeCharacter)
}
function genNumberCh(){
 let randomNumberCharacter=Math.floor(Math.random() * (57 - 48 + 1)) + 48
    return String.fromCharCode(randomNumberCharacter)
}
function genSpecialCh(){
 let randomSpecialCharacter=Math.floor(Math.random() * (64 - 58 + 1)) + 58
    return String.fromCharCode(randomSpecialCharacter)
}