let notesContainer=document.getElementById('notes-container')
let addButton=document.getElementById('add-note-btn')
let textNotes= JSON.parse(localStorage.getItem('Notes')) || []

loadToScreen()
console.log(textNotes);


addButton.addEventListener('click',function(e){
    const id=Date.now()
    const div=document.createElement('div')
    div.classList.add('note-card')
    div.innerHTML=`
    <div class="note-actions">
        <button class="copy-btn">Copy</button>
        <button class="delete-btn">Delete</button>
    </div>
    <textarea id="${id}" placeholder="Write your note here..."></textarea>
    
    `
    notesContainer.appendChild(div)

    const note={
        id:id,
        content:''
    }
    textNotes.push(note)

})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName==="BUTTON" && e.target.className==='delete-btn'){
        deleteNote(e.target.parentElement.parentElement.querySelector('textarea').id)  
    }
    else if(e.target.tagName==="BUTTON" && e.target.className==='copy-btn'){
        copyText(e.target.parentElement.parentElement.querySelector('textarea').value)  
    }
})

notesContainer.addEventListener('input',function(e){
    if (e.target.tagName==="TEXTAREA") {
        textNotes.forEach(note => {
            if(note.id===parseInt(e.target.getAttribute('id'))){
                note.content=e.target.value
            }
        });
    }
    addToLocal()
})


function addToLocal(){
    localStorage.setItem('Notes',JSON.stringify(textNotes))
}

function loadToScreen(){

    textNotes.forEach((notes,index) => {
        if (!notes.content) {
            textNotes.splice(index,1)
            if(!textNotes.length){
                addToLocal()
                return
            }
        }
        const div=document.createElement('div')
        div.classList.add('note-card')
        div.innerHTML=`
        <div class="note-actions">
            <button class="copy-btn">Copy</button>
            <button class="delete-btn">Delete</button>
        </div>
        <textarea id="${notes.id}" placeholder="Write your note here...">${notes.content}</textarea>
        `
        notesContainer.appendChild(div)
    });
}


function deleteNote(id){
    
    textNotes.forEach((note ,index) => {
        if(note.id===parseInt(id)){
            textNotes.splice(index ,1)            
        }
        
    });

    addToLocal()
    notesContainer.innerHTML=''
    loadToScreen()
    console.log(textNotes);
    
    
}



function copyText(text){
    navigator.clipboard.writeText(text)
    .then(function(){
        console.log('copied');
        
    }).catch(function(){
        console.log('Browser does no allow that');
        
    })
}