document.addEventListener('DOMContentLoaded',function(){

    let colorGrid=document.getElementById('colorGrid')
    let hexString='0123456789abcdef'


    for (let i = 0; i < 50; i++) {

        let color=hexColorGen()

        let div=document.createElement('div')
        div.style.backgroundColor=color
        div.classList.add("color-box")
        div.innerHTML=`
        ${color}
        <button>Copy</button>
        `

        colorGrid.appendChild(div)

        
    }

    function hexColorGen(){
        let hex=''
        for (let i = 0; i < 6; i++) {
            let randomHex=hexString[Math.floor((Math.random()*100)%16)]
            hex+=randomHex
        }
        return (`#${hex}`);
        
    }

    colorGrid.addEventListener('click',function(e){
        if(e.target.tagName==="BUTTON"){
            // console.log((e.target.parentElement.innerText).slice(0,7));
            navigator.clipboard.writeText(e.target.parentElement.innerText.slice(0,7))
            .then(function(){
                console.log("text coppied");
                
            }).catch(function(){
                console.log("error occured");
                
            })
        }
    })
})