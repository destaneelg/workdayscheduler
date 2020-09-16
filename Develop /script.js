var events = $("col-6");

//function to cycle through the array and change colors 
events.forEach(function(){
    if (currentDay < moment.js){
        this.style.color = ".past"
    }
   else if (currentDay > moment.js){
        this.style.color = ".future"
    }
    else {
        this.style.color = ".present"
    }
});

  document.getElementById$("currentDay").innerHTML = moment();
