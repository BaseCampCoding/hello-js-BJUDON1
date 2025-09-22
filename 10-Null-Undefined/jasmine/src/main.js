let visitorName = 'Braylen'
let visitorAge = 18
let visitorTicketId = 'B-1234'
let visitor ={
    name: "Braylen",
    age: 18,
    ticketId: "B-1234"


    
}
console.log(visitor)

//task 2
visitor.ticketId = null;
console.log(visitor)

//task 3 
let tickts = {
    'B-1234': null,
    "ticket49": 'Kaden'
}
 let ticketIdToCheck = "ticket49"
 let ticketStatusResult;
 if (!(ticketIdToCheck in tickts)){
    ticketStatusResult = 'unkown ticket id';
 }
 else if (tickts[ticketIdToCheck]=== null){
    ticketStatusResult = 'not sold';
 }
 else{
    ticketStatusResult = "sold to " + tickts[ticketIdToCheck]
 }
 console.log(ticketStatusResult)

 //Task4
 let simpleTicketStatusResult
 if(ticketIdToCheck in tickts && [ticketIdToCheck]){
    simpleTicketStatusResult = tickts[ticketIdToCheck]
 }
 else{
    simpleTicketStatusResult = "invalid ticket"
 }

//task 5
let visitorWithGtc = {
    name: "Kaden",
    gtc: {version: "v2.0"},
   
}

let gtcVersion;
if ( visitorWithGtc.gtc && visitorWithGtc.gtc.version){
    gtcVersion = visitorWithGtc.gtc.version
}
console.log(gtcVersion)