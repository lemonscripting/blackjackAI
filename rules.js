//cards 2-10 face value
//jack, king, queen = 10
//ace = 1 or 11

//dealer must draw on 16 and stand on soft 17
//https://www.youtube.com/watch?v=PljDuynF-j0


//objective:
//calculate win rate for every decision possible 
//in a selected number of cards first implimenting basic strategy then using card counting

const pokerCards = [
  ['ace', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
  ['ten', 10],
  ['jack', 10],
  ['queen', 10],
  ['king', 10],
  ['ace', 11]
];

//Hi-Lo card counting
//https://www.youtube.com/watch?v=SHK2C-QQR-k
//2-6 low cards 
//value +1
//10-ace high cards
//value -1
//7-9 neutral
//value 0
//always ends at 0
//>negative value > low cards
//>positive value > high cards

//running count = realtime value
//true count = running count / number of decks left

//always round down

//higher values are better for players





//checkbox Double Afer Split offered


//for das allowed

//surrender choices
const surrenderMatches = [
  { playerCard: "15", dealerUpCard: "10", caseAction: "surrender" },
  { playerCard: "16", dealerUpCard: "9", caseAction: "surrender" },
  { playerCard: "16", dealerUpCard: "10", caseAction: "surrender" },
  { playerCard: "16", dealerUpCard: "Ace", caseAction: "surrender" }
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

]






//total cards - card dealt / card of type





