document.getElementById("bonus-btn").addEventListener("click",function(){

    const findBonus=getValueFromInput("bonus-get");
    console.log(findBonus);

    if(findBonus==="93299"){
          
       const newBalance=getBalance()+100;
       console.log(newBalance);
       setBalance(newBalance);


    }



})