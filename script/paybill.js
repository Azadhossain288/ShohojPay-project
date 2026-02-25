document.getElementById("payMoney-btn").addEventListener("click",function(){


   // 1- bank account get

    const bankAccount=getValueFromInput("select-payment");
    if(bankAccount== "Select a payment method"){
          alert("please select a payment method");
          return;
    }

    // 2- get bank account number

    const findAccount=getValueFromInput("PayMoney-number");
    console.log(findAccount);

    if(findAccount.length!=11){
        alert("Invalid account number");
        return;
    }


    // Get the payment

    const findPayment=getValueFromInput("PayMoney-amount");
    console.log(findPayment);

    //Calculate balance

    console.log(getBalance);

     const newBalance=getBalance()-Number(findPayment);
//     console.log(newBalance);
//     setBalance(newBalance);



    // Get the pin number
    const findPin=getValueFromInput("PayMoney-pin");
    console.log(findPin);
    if(findPin==="1234"){
         alert("Pay succesfull");

        
      console.log(newBalance);
      setBalance(newBalance);


         //...For transaction...//

      //1-history container id
      const history=document.getElementById("history-container");

      //2-new div create
      const newHistory=document.createElement("div");

      //3-add innerHTML within new div

      newHistory.innerHTML=`
      
        <div class="transaction-card p-5 bg-base-100">
              
          Payment-money  ${findPayment} TAKA Success to ${findAccount}, at ${new Date()}

      </div>
      
      `;

      //4- Append new div within history container

      history.append(newHistory);
        


    }else{

         alert("Invalid pin");
         return;
    }

    

    

   

    





})