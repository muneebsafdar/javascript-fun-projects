

const right_button=document.querySelector('.right')
const left_button=document.querySelector('.left')


const container=document.querySelector('.container')


let images_array=image_returning();
let bullet_array=Bullets_returning()

let array_length=images_array.length

let no_of_image=0

let total_images=0




container.addEventListener('click',function(e){
    if(e.target.tagName==="I"){
        if(e.target.classList[1]==='right' && no_of_image < array_length - 1){
           no_of_image++
           setting_up_images_class()
           Bullets_returning()
           
        }else if(e.target.classList[1]==='left' && no_of_image > 0){
            no_of_image--
            setting_up_images_class()
        }     
    }


})


function image_returning(){
    const images=document.querySelectorAll('img')
    return Array.from(images)
}

function Bullets_returning(){
   const bulllets= document.querySelector('.no-slider').querySelectorAll('i')
    return Array.from(bulllets)
}

function setting_up_images_class(){
    images_array.forEach((image,index)=>{
            image.className='hidden animate'
            bullet_array[index].className='ri-circle-line'
    })
    images_array[no_of_image].classList.remove('hidden')
    bullet_array[no_of_image].className='ri-circle-fill'

}