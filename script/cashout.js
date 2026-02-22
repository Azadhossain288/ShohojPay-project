
//... Using function...//


document.getElementById("cashout-btn").addEventListener("click",function(){

   // 1- get the agent and validate

   const cashoutNumber=getValueFromInput("cashout-number");
   console.log(cashoutNumber);
   if(cashoutNumber.length!=11){
       alert("Invalid Number");
       return;
   }

   // 2-get the amount and validate

     const cashoutAmount=getValueFromInput("cashout-amount");
    console.log(cashoutAmount);

    
//3- get the current Balance,validate,convert to number

    const currentBalance=getBalance();

    // calculate balance

   const newBalance= getBalance() - Number(cashoutAmount);
   console.log(newBalance);

   if(newBalance<0){
       alert("Invalid Amount");
       return;
   }

   const pin=getValueFromInput("cashout-pin");
   if(pin==="1234"){
       alert("Cashout successfull");
       setBalance(newBalance);
       
           //...For transaction...//

      //1-history container id
      const history=document.getElementById("history-container");

      //2-new div create
      const newHistory=document.createElement("div");

      //3-add innerHTML within new div

      newHistory.innerHTML=`
      
        <div class="transaction-card p-5 bg-base-100">
              
          Cashout  ${cashoutAmount} TAKA Success to ${cashoutNumber}, at ${new Date()}

      </div>
      
      `;

      //4- Append new div within history container

      history.append(newHistory);




   }else{


        alert("Invalid pin");
        return;
   }




})
















// ...Inside Dont use function...//

// document.getElementById("cashout-btn").addEventListener("click",function(){

//     //1- get the agent number & validate

//     const cashoutNumberInput=document.getElementById("cashout-number");
//     const cashoutNumber=cashoutNumberInput.value; 
//     console.log(cashoutNumber);

//     if(cashoutNumber!=11){
//           alert("Invalid agent number");
//           return;
//     }


//     //2- get the amount,validate,convert to number

//      const cashoutAmountInput=document.getElementById("cashout-amount");
//     const cashoutAmount=cashoutAmountInput.value; 
//     console.log(cashoutAmount);


//     //3- get the current Balance,validate,convert to number

//      const balanceElement=document.getElementById("balance");
//      const balance=balanceElement.innerText;
//      console.log(balance);


//     //4- Calculate new balance

//      const newBalance= Number(balance) - Number(cashoutAmount);
     

//      if(newBalance<0){
//           alert("Invalid Amount");
//           return;
//      }

//      console.log("New balance ", newBalance);

//     //5- get the pin and verify

//       const cashoutPinInput=document.getElementById("cashout-pin");
//       const pin=cashoutPinInput.value; 
     
//       if(pin=== "1234"){
//           alert("cashout successfull")
//           console.log("new balance",newBalance);
//           balanceElement.innerText=newBalance;

//       }else{

//            alert("Invalid pin");
//            return;

//       }



//     //5-1 true:: show an alert->set balance
//     //5-2 true:: show an error alert->return


// })