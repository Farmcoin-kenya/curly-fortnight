
/**
 * A cash transfer has been initiated 
 * @param {org.example.biznet.cashTransfer} cashTransfer - the cash transfer transaction
 * @transaction
 */
function cashTransfer(cashTransfer) {
    if (cashTransfer.from.cashBalance < cashTransfer.transferAmount) {
        console.log("Insufficient balance");
    } else {
        cashTransfer.from.cashBalance -= cashTransfer.transferAmount;
        cashTransfer.to.cashBalance += cashTransfer.transferAmount;
    }
}

/**
 * A coin transfer has been initiated 
 * @param {org.example.biznet.farmCoinTransfer} farmCoinTransfer - the coin transfer transaction
 * @transaction
 */
function farmCoinTransfer(farmCoinTransfer) {
    if (farmCoinTransfer.from.farmCoinBalance < farmCoinTransfer.transferAmount) {
        console.log("Insufficient balance");
    } else {
        farmCoinTransfer.from.farmCoinBalance -= farmCoinTransfer.transferAmount;
        farmCoinTransfer.to.farmCoinBalance += farmCoinTransfer.transferAmount;
    }
}

/**
 * the govt initiates farmer payout
 * @param {org.example.biznet.payout} payout - the coins are converted to cash in account
 * @transaction
 */
function payout(payout) {
    amountToBePaid = payout.to.farmCoinBalance * 1000;
    if (payout.from.cashBalance < amountToBePaid) {
        console.log("Insufficient balance");
    } else {
        payout.from.cashBalance -= amountToBePaid;
        payout.to.cashBalance += amountToBePaid;
        payout.to.farmCoinBalance = 0;
        console.log("Payment Successful");
    }
}

/**
 * the govt buys produce
 * @param {org.example.biznet.buyProduce} buyProduce - the coins are converted to cash in account
 * @transaction
 */
function buyProduce(buyProduce) {
}