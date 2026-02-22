

document.getElementById("add-money-btn").addEventListener("click",function(){

    // 1- bank account get

    const bankAccount=getValueFromInput("add-money-bank");
    if(bankAccount== "Select a Bank"){
          alert("please select a bank");
          return;
    }

    // 2- get bank account number

    const accno=("add-money-number");
    console.log(accno);

    // 3-get balance

    const amount=getValueFromInput("add-money-amount");
    const newBalance=getBalance()+Number(amount);
    console.log(newBalance);

    // 4-get pin and calculation balance
    const pin=getValueFromInput("add-money-pin");
    if(pin==="1234"){
        alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

    }else{

        alert("Invalid Pin");
        return;
    }


})