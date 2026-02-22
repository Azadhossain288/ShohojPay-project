

document.getElementById("add-money-btn").addEventListener("click",function(){

    // 1- bank account get

    const bankAccount=getValueFromInput("add-money-bank");
    if(bankAccount== "Select a Bank"){
          alert("please select a bank");
          return;
    }

    // 2- get bank account number

    const accno=document.getElementById("add-money-number");
    const accountValue=accno.value; 
    console.log(accountValue);

    // 3-get balance

    const amount=getValueFromInput("add-money-amount");
    const newBalance=getBalance()+Number(amount);
    console.log(newBalance);

    // 4-get pin and calculation balance
    const pin=getValueFromInput("add-money-pin");
    if(pin==="1234"){
        alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

      //...For transaction...//

      //1-history container id
      const history=document.getElementById("history-container");

      //2-new div create
      const newHistory=document.createElement("div");

      //3-add innerHTML within new div

      newHistory.innerHTML=`
      
        <div class="transaction-card p-5 bg-base-100">
              
          Add Money Success from ${bankAccount}, acc-no ${accountValue} at ${new Date()}

      </div>
      
      `;

      //4- Append new div within history container

      history.append(newHistory);
     

    }else{

        alert("Invalid Pin");
        return;
    }


})