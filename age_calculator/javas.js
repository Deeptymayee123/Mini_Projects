function ageCalculator() {
  var userinput = document.getElementById("DOB").value;
  var dob = new Date(userinput);
  if(userinput==null || userinput=='') {
    document.getElementById("message").innerHTML = "*Enter a date please!";  
    return false; 
  } else {
  
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();
  
  //convert the calculated difference in date format
  var age_dt = new Date(month_diff); 
  
  //extract year from date    
  var year = age_dt.getUTCFullYear();
  
  //now calculate the age of the user
  var age = Math.abs(year - 1970);
  
  //display the calculated agevar userinput = document.getElementById("DOB").value;  
    
        
   var btn = document.getElementById("curtainInput");

           if (btn.value == "Calculate") {
               btn.value = "Okay got it!";
               btn.innerHTML = "Okay got it!";
           }
           else {
               btn.value = "Calculate";
               btn.innerHTML = "Calculate";  
           } 
   return document.getElementById("result").innerHTML =  
           "Your age is"+" "+ age + " years. ";

  
  }
}