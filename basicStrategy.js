// process from <surrender> - <splitting> - <soft totals> - <hard totals>
//double after split allowed
//double always allowed

//surrender choices
const surrenderMatches = [
    //playerTotalCards are hard totals in this case
    { playerTotalCard: "15", dealerUpCard: "10", caseAction: "surrender" },
    { playerTotalCard: "16", dealerUpCard: "9", caseAction: "surrender" },
    { playerTotalCard: "16", dealerUpCard: "10", caseAction: "surrender" },
    { playerTotalCard: "16", dealerUpCard: "Ace", caseAction: "surrender" }
]

//splitting chices
const pairSplitting = [
    //player card 2
    { playerPairCard: "2", dealerUpCard: "2", caseAction: "split" },
    { playerPairCard: "2", dealerUpCard: "3", caseAction: "split" },
    { playerPairCard: "2", dealerUpCard: "4", caseAction: "split" },
    { playerPairCard: "2", dealerUpCard: "5", caseAction: "split" },
    { playerPairCard: "2", dealerUpCard: "6", caseAction: "split" },
    { playerPairCard: "2", dealerUpCard: "7", caseAction: "split" },
    { playerPairCard: "2", dealerUpCard: "8", caseAction: "don't split" },
    { playerPairCard: "2", dealerUpCard: "9", caseAction: "don't split" },
    { playerPairCard: "2", dealerUpCard: "10", caseAction: "don't split" },
    { playerPairCard: "2", dealerUpCard: "Ace", caseAction: "don't split" },

    //player card 3
    { playerPairCard: "3", dealerUpCard: "2", caseAction: "split" },
    { playerPairCard: "3", dealerUpCard: "3", caseAction: "split" },
    { playerPairCard: "3", dealerUpCard: "4", caseAction: "split" },
    { playerPairCard: "3", dealerUpCard: "5", caseAction: "split" },
    { playerPairCard: "3", dealerUpCard: "6", caseAction: "split" },
    { playerPairCard: "3", dealerUpCard: "7", caseAction: "split" },
    { playerPairCard: "3", dealerUpCard: "8", caseAction: "don't split" },
    { playerPairCard: "3", dealerUpCard: "9", caseAction: "don't split" },
    { playerPairCard: "3", dealerUpCard: "10", caseAction: "don't split" },
    { playerPairCard: "3", dealerUpCard: "Ace", caseAction: "don't split" },

    //player card 4
    { playerPairCard: "4", dealerUpCard: "2", caseAction: "don't split" },
    { playerPairCard: "4", dealerUpCard: "3", caseAction: "don't split" },
    { playerPairCard: "4", dealerUpCard: "4", caseAction: "don't split" },
    { playerPairCard: "4", dealerUpCard: "5", caseAction: "split" },
    { playerPairCard: "4", dealerUpCard: "6", caseAction: "split" },
    { playerPairCard: "4", dealerUpCard: "7", caseAction: "don't split" },
    { playerPairCard: "4", dealerUpCard: "8", caseAction: "don't split" },
    { playerPairCard: "4", dealerUpCard: "9", caseAction: "don't split" },
    { playerPairCard: "4", dealerUpCard: "10", caseAction: "don't split" },
    { playerPairCard: "4", dealerUpCard: "Ace", caseAction: "don't split" },

    //player card 5
    { playerPairCard: "5", dealerUpCard: "2", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "3", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "4", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "5", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "6", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "7", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "8", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "9", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "10", caseAction: "don't split" },
    { playerPairCard: "5", dealerUpCard: "Ace", caseAction: "don't split" },

    //player card 6
    { playerPairCard: "6", dealerUpCard: "2", caseAction: "split" },
    { playerPairCard: "6", dealerUpCard: "3", caseAction: "split" },
    { playerPairCard: "6", dealerUpCard: "4", caseAction: "split" },
    { playerPairCard: "6", dealerUpCard: "5", caseAction: "split" },
    { playerPairCard: "6", dealerUpCard: "6", caseAction: "split" },
    { playerPairCard: "6", dealerUpCard: "7", caseAction: "don't split" },
    { playerPairCard: "6", dealerUpCard: "8", caseAction: "don't split" },
    { playerPairCard: "6", dealerUpCard: "9", caseAction: "don't split" },
    { playerPairCard: "6", dealerUpCard: "10", caseAction: "don't split" },
    { playerPairCard: "6", dealerUpCard: "Ace", caseAction: "don't split" },

    //player card 7
    { playerPairCard: "7", dealerUpCard: "2", caseAction: "split" },
    { playerPairCard: "7", dealerUpCard: "3", caseAction: "split" },
    { playerPairCard: "7", dealerUpCard: "4", caseAction: "split" },
    { playerPairCard: "7", dealerUpCard: "5", caseAction: "split" },
    { playerPairCard: "7", dealerUpCard: "6", caseAction: "split" },
    { playerPairCard: "7", dealerUpCard: "7", caseAction: "split" },
    { playerPairCard: "7", dealerUpCard: "8", caseAction: "don't split" },
    { playerPairCard: "7", dealerUpCard: "9", caseAction: "don't split" },
    { playerPairCard: "7", dealerUpCard: "10", caseAction: "don't split" },
    { playerPairCard: "7", dealerUpCard: "Ace", caseAction: "don't split" },

    //player card 8
    { playerPairCard: "8", dealerUpCard: "2", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "3", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "4", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "5", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "6", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "7", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "8", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "9", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "10", caseAction: "split" },
    { playerPairCard: "8", dealerUpCard: "Ace", caseAction: "split" },

    //player card 9
    { playerPairCard: "9", dealerUpCard: "2", caseAction: "split" },
    { playerPairCard: "9", dealerUpCard: "3", caseAction: "split" },
    { playerPairCard: "9", dealerUpCard: "4", caseAction: "split" },
    { playerPairCard: "9", dealerUpCard: "5", caseAction: "split" },
    { playerPairCard: "9", dealerUpCard: "6", caseAction: "split" },
    { playerPairCard: "9", dealerUpCard: "7", caseAction: "don't split" },
    { playerPairCard: "9", dealerUpCard: "8", caseAction: "split" },
    { playerPairCard: "9", dealerUpCard: "9", caseAction: "split" },
    { playerPairCard: "9", dealerUpCard: "10", caseAction: "don't split" },
    { playerPairCard: "9", dealerUpCard: "Ace", caseAction: "dpn't split" },
    //player card 10
    //sort king queen jack to value of 10 also
    { playerPairCard: "10", dealerUpCard: "2", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "3", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "4", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "5", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "6", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "7", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "8", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "9", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "10", caseAction: "don't split" },
    { playerPairCard: "10", dealerUpCard: "Ace", caseAction: "don't split" },

    //player card ace
    { playerPairCard: "Ace", dealerUpCard: "2", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "3", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "4", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "5", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "6", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "7", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "8", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "9", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "10", caseAction: "split" },
    { playerPairCard: "Ace", dealerUpCard: "Ace", caseAction: "split" }
]


const softTotalActions = [
    //player card 3
    { playerSoftTotal: "3", dealerUpCard: "2", caseAction: "hit" },
    { playerSoftTotal: "3", dealerUpCard: "3", caseAction: "hit" },
    { playerSoftTotal: "3", dealerUpCard: "4", caseAction: "hit" },
    { playerSoftTotal: "3", dealerUpCard: "5", caseAction: "double" },
    { playerSoftTotal: "3", dealerUpCard: "6", caseAction: "double" },
    { playerSoftTotal: "3", dealerUpCard: "7", caseAction: "hit" },
    { playerSoftTotal: "3", dealerUpCard: "8", caseAction: "hit" },
    { playerSoftTotal: "3", dealerUpCard: "9", caseAction: "hit" },
    { playerSoftTotal: "3", dealerUpCard: "10", caseAction: "hit" },
    { playerSoftTotal: "3", dealerUpCard: "Ace", caseAction: "hit" },

    //player card 4
    { playerSoftTotal: "4", dealerUpCard: "2", caseAction: "hit" },
    { playerSoftTotal: "4", dealerUpCard: "3", caseAction: "hit" },
    { playerSoftTotal: "4", dealerUpCard: "4", caseAction: "hit" },
    { playerSoftTotal: "4", dealerUpCard: "5", caseAction: "double" },
    { playerSoftTotal: "4", dealerUpCard: "6", caseAction: "double" },
    { playerSoftTotal: "4", dealerUpCard: "7", caseAction: "hit" },
    { playerSoftTotal: "4", dealerUpCard: "8", caseAction: "hit" },
    { playerSoftTotal: "4", dealerUpCard: "9", caseAction: "hit" },
    { playerSoftTotal: "4", dealerUpCard: "10", caseAction: "hit" },
    { playerSoftTotal: "4", dealerUpCard: "Ace", caseAction: "hit" },

    //player card 5
    { playerSoftTotal: "5", dealerUpCard: "2", caseAction: "hit" },
    { playerSoftTotal: "5", dealerUpCard: "3", caseAction: "hit" },
    { playerSoftTotal: "5", dealerUpCard: "4", caseAction: "double" },
    { playerSoftTotal: "5", dealerUpCard: "5", caseAction: "double" },
    { playerSoftTotal: "5", dealerUpCard: "6", caseAction: "double" },
    { playerSoftTotal: "5", dealerUpCard: "7", caseAction: "hit" },
    { playerSoftTotal: "5", dealerUpCard: "8", caseAction: "hit" },
    { playerSoftTotal: "5", dealerUpCard: "9", caseAction: "hit" },
    { playerSoftTotal: "5", dealerUpCard: "10", caseAction: "hit" },
    { playerSoftTotal: "5", dealerUpCard: "Ace", caseAction: "hit" },

    //player card 6
    { playerSoftTotal: "6", dealerUpCard: "2", caseAction: "hit" },
    { playerSoftTotal: "6", dealerUpCard: "3", caseAction: "hit" },
    { playerSoftTotal: "6", dealerUpCard: "4", caseAction: "double" },
    { playerSoftTotal: "6", dealerUpCard: "5", caseAction: "double" },
    { playerSoftTotal: "6", dealerUpCard: "6", caseAction: "double" },
    { playerSoftTotal: "6", dealerUpCard: "7", caseAction: "hit" },
    { playerSoftTotal: "6", dealerUpCard: "8", caseAction: "hit" },
    { playerSoftTotal: "6", dealerUpCard: "9", caseAction: "hit" },
    { playerSoftTotal: "6", dealerUpCard: "10", caseAction: "hit" },
    { playerSoftTotal: "6", dealerUpCard: "Ace", caseAction: "hit" },

    //player card 7
    { playerSoftTotal: "7", dealerUpCard: "2", caseAction: "hit" },
    { playerSoftTotal: "7", dealerUpCard: "3", caseAction: "double" },
    { playerSoftTotal: "7", dealerUpCard: "4", caseAction: "double" },
    { playerSoftTotal: "7", dealerUpCard: "5", caseAction: "double" },
    { playerSoftTotal: "7", dealerUpCard: "6", caseAction: "double" },
    { playerSoftTotal: "7", dealerUpCard: "7", caseAction: "hit" },
    { playerSoftTotal: "7", dealerUpCard: "8", caseAction: "hit" },
    { playerSoftTotal: "7", dealerUpCard: "9", caseAction: "hit" },
    { playerSoftTotal: "7", dealerUpCard: "10", caseAction: "hit" },
    { playerSoftTotal: "7", dealerUpCard: "Ace", caseAction: "hit" },
    //player card 8
    { playerSoftTotal: "8", dealerUpCard: "2", caseAction: "double" },
    { playerSoftTotal: "8", dealerUpCard: "3", caseAction: "double" },
    { playerSoftTotal: "8", dealerUpCard: "4", caseAction: "double" },
    { playerSoftTotal: "8", dealerUpCard: "5", caseAction: "double" },
    { playerSoftTotal: "8", dealerUpCard: "6", caseAction: "double" },
    { playerSoftTotal: "8", dealerUpCard: "7", caseAction: "stand" },
    { playerSoftTotal: "8", dealerUpCard: "8", caseAction: "stand" },
    { playerSoftTotal: "8", dealerUpCard: "9", caseAction: "hit" },
    { playerSoftTotal: "8", dealerUpCard: "10", caseAction: "hit" },
    { playerSoftTotal: "8", dealerUpCard: "Ace", caseAction: "hit" },

    //player card 9
    { playerSoftTotal: "9", dealerUpCard: "2", caseAction: "stand" },
    { playerSoftTotal: "9", dealerUpCard: "3", caseAction: "stand" },
    { playerSoftTotal: "9", dealerUpCard: "4", caseAction: "stand" },
    { playerSoftTotal: "9", dealerUpCard: "5", caseAction: "stand" },
    { playerSoftTotal: "9", dealerUpCard: "6", caseAction: "double" },
    { playerSoftTotal: "9", dealerUpCard: "7", caseAction: "stand" },
    { playerSoftTotal: "9", dealerUpCard: "8", caseAction: "stand" },
    { playerSoftTotal: "9", dealerUpCard: "9", caseAction: "stand" },
    { playerSoftTotal: "9", dealerUpCard: "10", caseAction: "stand" },
    { playerSoftTotal: "9", dealerUpCard: "Ace", caseAction: "stand" },

    //player card 10
    { playerSoftTotal: "10", dealerUpCard: "2", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "3", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "4", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "5", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "6", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "7", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "8", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "9", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "10", caseAction: "stand" },
    { playerSoftTotal: "10", dealerUpCard: "Ace", caseAction: "stand" }
]

//hardTotalActions
//2-8
if (playerHardTotal < 9) {
    caseAction = "hit";
}
//9
if (playerHardTotal === 9 && 2 < dealerUpCard < 7) {
    caseAction = "double";
} else {
    caseAction = "hit";
}
//10
if (playerHardTotal === 10 && dealerUpCard < 10) {
    caseAction = "double";
} else {
    caseAction = "hit";
}
//11
if (playerHardTotal === 11) {
    caseAction = "double";
}
//12
if (playerHardTotal === 12 && 3 < dealerUpCard < 7) {
    caseAction = "stand";
} else {
    caseAction = "hit";
}
//13-16
if (12 < playerHardTotal < 17 && dealerUpCard < 7) {
    caseAction = "stand";
} else {
    caseAction = "hit";
}
//17-21
if (playerHardTotal > 16) {
    caseAction = "stand";
}