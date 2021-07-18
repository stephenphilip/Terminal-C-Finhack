// I've added annotations to make this easier to follow along at home. Good luck learning and check out my other pens if you found this useful


// First let's set the colors of our sliders
const settings={
    fill: '#1abc9c',
    background: '#d7dcdf'
  }
  
  // First find all our sliders
  const sliders = document.querySelectorAll('.range-slider');
  
  // Iterate through that list of sliders
  // ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
  Array.prototype.forEach.call(sliders,(slider)=>{
    // Look inside our slider for our input add an event listener
  //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
    slider.querySelector('input').addEventListener('input', (event)=>{
      // 1. apply our value to the span
      slider.querySelector('span').innerHTML = event.target.value;
      // 2. apply our fill to the input
      applyFill(event.target);
    });
    // Don't wait for the listener, apply it now!
    applyFill(slider.querySelector('input'));
  });
  
  // This function applies the fill to our sliders by using a linear gradient background
  function applyFill(slider) {
    // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
    const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
    slider.style.background = bg;
  }
  

  
  function getData()
  {   
    //gettting the values
    var rent = document.getElementById("slider1").value; 
    var utls = document.getElementById("slider2").value;
    var education = document.getElementById("slider3").value; 
    var health = document.getElementById("slider4").value; 

    var dining = document.getElementById("slider5").value; 
    var entertainment = document.getElementById("slider6").value;
    var apparals = document.getElementById("slider7").value; 
    var shopping = document.getElementById("slider8").value;

    //Adding values
    // var prevrent = localStorage.getItem("Rent"); 
    // var prevutls = localStorage.getItem("Utilities");
    // var preveducation = localStorage.getItem("Education"); 
    // var prevhealth = localStorage.getItem("Health");

    // var prevdining = localStorage.getItem("Dining"); 
    // var preventertainment = localStorage.getItem("Entertainment");
    // var prevapparals = localStorage.getItem("Apparals"); 
    // var prevshopping = localStorage.getItem("Shopping");


    //saving the values in local storage
    localStorage.setItem("Rent", rent);
    localStorage.setItem("Utilities",utls);
    localStorage.setItem("Education", education);   
    localStorage.setItem("Health", health); 
    
    localStorage.setItem("Dining", dining);
    localStorage.setItem("Entertainment", entertainment);
    localStorage.setItem("Apparals", apparals);   
    localStorage.setItem("Shopping", shopping); 
    
  }  

    
  

  // Option Choice JS
  window.document.getElementById("noOptions").style.display = "block";
  window.document.getElementById("allOptions").style.display = "none";
  function changeOptions() {
      var form = window.document.getElementById("form");
      var icOptions = window.document.getElementById("icOptions");
      var ocOptions = window.document.getElementById("ocOptions");
  
      window.document.getElementById("noOptions").style.display = "none";
  
      if (form.radioButton1.checked) {
          ocOptions.style.display = "none";
          icOptions.style.display = "block";
          icOptions.selectedIndex = 0;
      } else if (form.radioButton2.checked) {
          icOptions.style.display = "none";
          ocOptions.style.display = "block";
          ocOptions.selectedIndex = 0;
      }
  
  }
  window.document.getElementById("radioButton1").onclick = changeOptions;
  window.document.getElementById("radioButton2").onclick = changeOptions;
