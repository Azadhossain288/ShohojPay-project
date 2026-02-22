document.getElementById("login-btn").addEventListener("click", function(){

    // console.log("login button clicked");
    
    // get a mobile number
    const selectMobileNumber=document.getElementById("number");
    const getNumber=selectMobileNumber.value;
    console.log(getNumber);
    // get the pin number

    const selectPinNumber=document.getElementById("pinNum");
    const getPin=selectPinNumber.value;
    console.log(getPin);

    // match mobile and pin number

    if(getNumber=="01628893299" && getPin=="1234"){
         alert("Login succesfully");
   
         // no scope for back
        //  window.location.replace("/homepage.html")

        //  has scope for back

         window.location.assign("/homepage.html");


    }else{

        alert("Login failed");
        return;
    }



});
