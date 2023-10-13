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