//cashTransfer
function cashTransfer(cashTransfer){
    if(cashTransfer.from.balance < cashTransfer.amount){
        console.log("Insufficient balance");
    }else{
        cashTransfer.from.balance -= cashTransfer.amount;
        cashTransfer.to.balance += cashTransfer.amount;
    }
}
//requestForProduce
//landRegistration
function landRegistration(landRegistration, newLand){
    landRegistration.newLand.LRnumber = newLand.landRegistrationNumber;
    landRegistration.newLand.owner = newLand.landOwner;
}
//landVerification
function landVerification(landVerification)
//registerFarmer
//registerGovernmentAgency
//registerBank
//registerLandRegistrar
//convertCoinsToCash
function convertCoinsToCash(coins){
    let cashValue = coins*100;
    return cashValue;    
}
//payout
function payout(){

}