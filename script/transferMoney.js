document.getElementById("sendMoney-btn").addEventListener("click",function(){

    console.log("sendmoney Successfull");

   
 // Get the User Account Number

      const userAccountNumber= getValueFromInput("sendMoney-number");
      console.log(userAccountNumber);
      if(userAccountNumber.length!=11){
           alert("Invalid account Number");
           return;
      }


    // Get the Amount

    const sendmoneyAmountNumber=getValueFromInput("sendMoney-amount");
    console.log(sendmoneyAmountNumber);

    // Get balance

    const currentBalance=getBalance();
    // calculate balance

   const newBalance= getBalance() - Number(sendmoneyAmountNumber);
   console.log(newBalance);

   if(newBalance<0){
       alert("Invalid Amount");
       return;
   }


    // Get the Pin number

    const pinNumber=getValueFromInput("sendMoney-pin");
    console.log(pinNumber);
    if(pinNumber==="1234"){
       alert("TransferMoney successfull");
       setBalance(newBalance);

         //...For transaction...//

      //1-history container id
      const history=document.getElementById("history-container");

      //2-new div create
      const newHistory=document.createElement("div");

      //3-add innerHTML within new div

      newHistory.innerHTML=`
      
        <div class="transaction-card p-5 bg-base-100">
              
          Send-money  ${sendmoneyAmountNumber} TAKA Success to ${userAccountNumber}, at ${new Date()}

      </div>
      
      `;

      //4- Append new div within history container

      history.append(newHistory);


    }else{

        alert("Invalid Pin");
        return;
    }


})


 