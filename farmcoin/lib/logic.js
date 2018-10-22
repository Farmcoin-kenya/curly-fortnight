/**
*@param {org.example.biznet.cashTransfer} cashTransfer
*@param {org.example.biznet.coinTransfer} coinTransfer
*@param {org.example.biznet.landRegistration} landRegistration
*@param {org.example.biznet.landVerification} landVerification
*@param {org.example.biznet.registerFarmer} registerFarmer
*@param {org.example.biznet.registerBank} registerBank
*@param {org.example.biznet.registerLandRegistrar} registerLandRegistrar
*@param {org.example.biznet.registerGovernmentAgency} registerGovernmentAgency
*@param {org.example.biznet.payOut} payOut
*@param {org.example.biznet.confirmSale} confirmSale
**/

//cashTransfer
function cashTransfer(cashTransfer){
    if(cashTransfer.from.balance < cashTransfer.amount){
        console.log("Insufficient balance");
    }else{
        cashTransfer.from.balance -= cashTransfer.amount;
        cashTransfer.to.balance += cashTransfer.amount;
    }
}

//coinTransfer
function coinTransfer(coinTransfer){
    if(coinTransfer.from.farmCoinBalance < coinTransfer.amount){
        console.log("Insufficient coins balance");
    }else{
        coinTransfer.from.farmCoinBalance -= cashTransfer.amount;
        coinTransfer.to.farmCoinBalance += cashTransfer.amount;
    }
}

//landRegistration
function landRegistration(landRegistration, newLand){
    landRegistration.newLand.LRnumber = newLand.landRegistrationNumber;
    landRegistration.newLand.owner = newLand.landOwner;
}
//landVerification
function landVerification(landVerification){
}
//registerFarmer
function registerFarmer(registerFarmer, newFarmer){    
}
//registerGovernmentAgency

function registerGovernmentAgency(registerGovernmentAgency, newGovAgency){
    
}
//registerBank
function registerBank(registerBank, newBank){

}
//registerLandRegistrar
function registerLandRegistrar(registerLandRegistrar, newRegistrar){

}
//payout
function payout(payOut){
    let payOutAmount = payOut.payee.farmCoinBalance * 1000;
    payOut.payee.balance += payOutAmount;
    console.log("Account ",confirmSale.payee.accountID, "has been debited Kshs: ", payOutAmount);
}

//convertCoinsToCash
function convertCoinsToCash(coins){
    let cashValue = coins*1000;
    return cashValue;    
}

//confirmSale
function confirmSale(confirmSale){
    coinValue = confirmSale.saleAmount;
    confirmSale.payee.farmCoinBalance += coinValue;
    console.log("Account ",confirmSale.payee.accountID, "has been debited: ", coinValue, "farm coins");
}