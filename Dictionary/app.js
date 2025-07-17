

let wordInput=document.getElementById('word-input')
let searchButton=document.getElementById('search-btn')
let definition=document.querySelector('.word-definition')
let wordTitle=document.querySelector('.word-title')
let voiceButton=document.querySelector('.voice-btn')

let wordToSpeak=''

searchButton.addEventListener('click',function(e){
    ApiCall((wordInput.value).trim())
})

function ApiCall(word){

    
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(function(data){
            console.log(data);
        return data.json()
        
    }).then(function(data){
        showData(data)
        
    })
    .catch(function(error){
        console.log(error);
    })

}

function showData(data){

    console.log(data);
    
    wordTitle.innerHTML= data[0].word
    definition.innerHTML=data[0].meanings[0].definitions[0].definition;
    wordToSpeak=(data[0].word)

    
}

function speak() {
const utterance = new SpeechSynthesisUtterance(wordToSpeak);
speechSynthesis.speak(utterance);
}

voiceButton.addEventListener('click',function(e){
    speak()
})