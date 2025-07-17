document.addEventListener("DOMContentLoaded", function (e) {
  let optionDiv = document.getElementById("options");
  let submitBtn = document.getElementById("submit-btn");
  let pythonProgress=document.getElementById('python')
  let JavaScriptProgress=document.getElementById('js')
  let cppProgress=document.getElementById('cpp')
  let JavaProgress=document.getElementById('java')

  let pythonResult=document.getElementById('pythonResult')
  let JavaScriptResult=document.getElementById('JavaScriptResult')
  let cppResult=document.getElementById('cppResult')
  let javaResult=document.getElementById('javaResult')

  let selectedOption;

  let languages = {
    Python: 0,
    JavaScript: 0,
    "C++": 0,
    Java: 0,
  };

  optionDiv.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      let optionText = e.target.innerHTML;
      selectedOption = optionText;
    }
  });

  submitBtn.addEventListener("click", function (e) {
    increasingValue();
  });

  function increasingValue() {
    if (selectedOption === "Python") {
      languages["Python"] = languages["Python"] + 1;
    } 
    else if (selectedOption === "JavaScript") {
      languages["JavaScript"] = languages["JavaScript"] + 1;
    } 
    else if (selectedOption === "C++") {
      languages["C++"] = languages["C++"] + 1;
    } 
    else if (selectedOption === "Java") {
      languages["Java"] = languages["Java"] + 1;
    }
    showingProgress();
  }

  function showingProgress() {
    let totalVotes = 0;
    for (const [key, value] of Object.entries(languages)) {
      totalVotes = totalVotes + value;
    }

    let PythonPercent = (languages["Python"] / totalVotes) * 100;
    let JavaScriptPercent = (languages["JavaScript"] / totalVotes) * 100;
    let cppPercent = (languages["C++"] / totalVotes) * 100;
    let JavaPercent = (languages["Java"] / totalVotes) * 100;

    console.log(PythonPercent);
    console.log(JavaScriptPercent);
    console.log(cppPercent);
    console.log(JavaPercent);

    pythonProgress.setAttribute('value',PythonPercent)
    JavaScriptProgress.setAttribute('value',JavaScriptPercent)
    cppProgress.setAttribute('value',cppPercent)
    JavaProgress.setAttribute('value',JavaPercent)

    pythonResult.innerHTML=PythonPercent.toFixed(2)+'%'
    JavaScriptResult.innerHTML=JavaScriptPercent.toFixed(2)+'%'
    cppResult.innerHTML=cppPercent.toFixed(2)+'%'
    javaResult.innerHTML=JavaPercent.toFixed(2)+'%'
  }
});
