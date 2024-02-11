function initializeRecords(friends) {
    let giftGiven = {};
    let giftReceived = {};
    friends.forEach(friend => {
        giftGiven[friend] = {};
        giftReceived[friend] = {};
        friends.forEach(other => {
            if (friend !== other) {
                giftGiven[friend][other] = 0;
                giftReceived[friend][other] = 0;
            }
        });
    });
    console.log(giftGiven,giftReceived)
    return { giftGiven, giftReceived };
}

function updateGiftRecords(gifts, giftGiven, giftReceived) {
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(' ');
        giftGiven[giver][receiver]++;
        giftReceived[receiver][giver]++;
    });

}

function calculateGiftBalance(friends, giftGiven, giftReceived) {
    let giftBalance = {};
    friends.forEach(friend => {
        giftBalance[friend] = Object.values(giftReceived[friend]).reduce((a, b) => a + b, 0) - 
                              Object.values(giftGiven[friend]).reduce((a, b) => a + b, 0);
    });
    console.log(giftBalance)
    return giftBalance;
}

function predictNextMonthGifts(friends, giftGiven, giftReceived, giftBalance) {
    let nextMonthGifts = {};
    friends.forEach(friend => nextMonthGifts[friend] = 0);

    friends.forEach(giver => {
        friends.forEach(receiver => {
            if (giver !== receiver) {
                if (giftGiven[giver][receiver] > giftReceived[giver][receiver]) {
                    nextMonthGifts[giver]++;
                } else if (giftGiven[giver][receiver] === giftReceived[giver][receiver]) {
                    let giverGiftBalance = Object.values(giftGiven[giver]).reduce((a, b) => a + b, 0) - 
                                           Object.values(giftReceived[giver]).reduce((a, b) => a + b, 0);
                    let receiverGiftBalance = Object.values(giftGiven[receiver]).reduce((a, b) => a + b, 0) - 
                                              Object.values(giftReceived[receiver]).reduce((a, b) => a + b, 0);
                    if (giverGiftBalance > receiverGiftBalance) {
                        nextMonthGifts[giver]++;
                    }
                }
            }
        });
    });
    return nextMonthGifts;
}

function solution(friends, gifts) {
    let { giftGiven, giftReceived } = initializeRecords(friends);
    updateGiftRecords(gifts, giftGiven, giftReceived);
    console.log(giftGiven)
    let giftBalance = calculateGiftBalance(friends, giftGiven, giftReceived);

    let nextMonthGifts = predictNextMonthGifts(friends, giftGiven, giftReceived, giftBalance);
    return Math.max(...Object.values(nextMonthGifts));
}