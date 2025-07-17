document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("Start");
  const pauseButton = document.getElementById("Pause");
  const stopButton = document.getElementById("Stop");
  const resetButton = document.getElementById("Reset");
  const lapList = document.getElementById("lapList");

  const milliseondsSpan = document.getElementById("millioseconds");
  const secondsSpan = document.getElementById("seconds");
  const minutesSpan = document.getElementById("minutes");

  let milliseonds = 0;
  let seconds = 0;
  let minutes = 0;

  let timeRunner;


  startButton.addEventListener("click", function (e) {
        driverFunction()
  });

  stopButton.addEventListener('click',function(e){
    stopperFunction()
  })

  pauseButton.addEventListener('click',function(){
    pauseFunction()
  })
  resetButton.addEventListener('click',function(){
    resetFunction() 
  })
    
  

  function resetFunction(){
    if(timeRunner || (!timeRunner && milliseonds>0)){
        clearInterval(timeRunner)

        milliseonds = 0;
        seconds = 0;
        minutes = 0;

        milliseondsSpan.innerHTML = `00`
        secondsSpan.innerHTML = `00`
        minutesSpan.innerHTML = `00`

        timeRunner=undefined
    }
  }

  function pauseFunction(){
    if(timeRunner){
        clearInterval(timeRunner)
        timeRunner=undefined
    }
  }

  function driverFunction() {
   if (!timeRunner) {
        timeRunner = setInterval(function () {
        milliseonds++;
        
        if (seconds > 59) {
            seconds = 0;
            minutes++;
            seconds < 10?  secondsSpan.innerHTML = '0'+seconds : secondsSpan.innerHTML = seconds;
            minutes<10?  minutesSpan.innerHTML = '0'+minutes : minutesSpan.innerHTML = minutes;
        }

        if (milliseonds >= 99) {
            milliseonds = 0;
            seconds++;
            seconds < 10?  secondsSpan.innerHTML = '0'+seconds : secondsSpan.innerHTML = seconds;
        }

        milliseonds<10?  milliseondsSpan.innerHTML = '0'+milliseonds : milliseondsSpan.innerHTML = milliseonds;
        
        }, 10);
   }

  }

  function stopperFunction(){
    if(timeRunner || (!timeRunner && milliseonds>0)){
        clearInterval(timeRunner)

        let milli = 0;
        let secs = 0;
        let min = 0;

        milliseonds<10?  milli = '0'+milliseonds : milli = milliseonds;
        seconds<10?  secs = '0'+seconds : secs  = seconds;
        minutes<10?  min = '0'+minutes : min = minutes;
        
        const list=document.createElement('li')
        list.innerHTML=`${min}:${secs}:${milli}`
        lapList.appendChild(list)

        milliseondsSpan.innerHTML = `00`
        secondsSpan.innerHTML = `00`
        minutesSpan.innerHTML = `00`

        milliseonds = 0;
        seconds = 0;
        minutes = 0;

        timeRunner=undefined
    }
  }
});
