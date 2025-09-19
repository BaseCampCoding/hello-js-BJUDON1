let scoreBoard = {
    "The Best Ever":10000,
    'Steph':0,
    'kobe': 81,
    'jordan': 63
    
}
//console.log(scoreBoard)

//task 2 

let newPlayerName = "Lebron"
let newPlayerScore = 20
scoreBoard[newPlayerName] = newPlayerScore;
console.log(scoreBoard);

//task 3 
let playerToRemove = 'Lebron'
delete scoreBoard [playerToRemove]
console.log(scoreBoard)

//task 4 

let playerNameToUpdate = "Steph"
let scoreToAdd = 60
scoreBoard[playerNameToUpdate] +=scoreToAdd
console.log(scoreBoard)

//task 5
mondayBonus = 100
for (let player in scoreBoard){
    scoreBoard [player] += mondayBonus
}
console.log(scoreBoard)