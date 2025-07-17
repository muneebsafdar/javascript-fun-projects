document.addEventListener("DOMContentLoaded", function () {
  let allColoredDivs = document.querySelector(".main-container").children;

  allColoredDivs = Array.from(allColoredDivs);

  let divToMove;
  let x = 0;
  let y = 0;

  allColoredDivs.forEach((div) => {
    div.addEventListener("dblclick", function (e) {
      divToMove = e.target;
    //   console.log(divToMove)
      movediv()
    });
  });

  allColoredDivs.forEach((div) =>{
    div.addEventListener('mouseup',function(e){
        divToMove=undefined
        console.log('hello');
        if(!divToMove){
            // removeMovement()
        }
       
    })
  })


  document.addEventListener("mousemove", (e) => {

    // console.log(divToMove)

    if(divToMove){
        x=e.clientX;
        y=e.clientY
        divToMove.style.left = (x-190)+ "px";
        divToMove.style.top = (y-80) + "px";
   }
   
  });

});
