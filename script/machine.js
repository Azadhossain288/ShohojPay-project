
// Machine id-> input value

function getValueFromInput(id){

    const input=document.getElementById(id);
    const value=input.value; 
    console.log(id,value);

    return value;


}

// Machine -> balance (for given balance)

function getBalance(){

      const balanceElement=document.getElementById("balance");
      const balance=balanceElement.innerText;
      console.log("current balance",Number(balance));
      return Number(balance);
}

// Machine-> setBalance

function setBalance(value){
       const balanceElement=document.getElementById("balance");
       balanceElement.innerText=value;
}


//machine id>hide>show id

function showOnly(id){
      const addmoney=document.getElementById("add-money");
      const cashout=document.getElementById("cashout");
      const sendMoney=document.getElementById("transfer-money");
      const payMoney=document.getElementById("Pay-bill");
      const history=document.getElementById("history");
      console.log(`add Money- ${addmoney},Cashout-${cashout} ,History-${history},Transfer-${sendMoney},Payment-${payMoney}`);

      // All hide

      addmoney.classList.add("hidden");
      cashout.classList.add("hidden");
      sendMoney.classList.add("hidden");
      payMoney.classList.add("hidden");
      history.classList.add("hidden");

      // remove selected id of hide

      const selected=document.getElementById(id);
      selected.classList.remove("hidden");

}