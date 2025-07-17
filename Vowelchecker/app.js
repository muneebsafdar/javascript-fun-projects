const textInput=document.getElementById('textInput')
const checkButton=document.getElementById('submitButton')
const result=document.getElementById('result')

checkButton.addEventListener('click',function(e){
    if(textInput.value){
        const noOfVowels=checkVowel((textInput.value.trim()))
        result.innerHTML=`No of vowels are ${noOfVowels}`
    }
})

function checkVowel(value){

    let noOfVowels=0;
    for (const e of value) {
        console.log(e);
        
        if(e=='a'|| e=='e'|| e=='i'|| e=='o'|| e=='u' || e=='A'|| e=='E'|| e=='I'|| e=='O'|| e=='U'){
            noOfVowels++
        }
    }
    return noOfVowels
}