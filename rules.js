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
  