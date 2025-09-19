let juiceName = 'Energizer'
let timeToMixJuiceResult;
if (juiceName === 'Pure Strawberry Joy'){
    timeToMixJuiceResult = 0.5
  
}
else if (juiceName === 'Energizer'|| juiceName ==='Green Garden'){
    timeToMixJuiceResult =1.5
  
}

else if (juiceName === "Tropical Island"){
    timeToMixJuiceResult = 3
}
else if( juiceName ==="All or Nothing"){
    timeToMixJuiceResult = 5
}
else{
    timeToMixJuiceResult = 2.5
}
console.log(timeToMixJuiceResult)

 let wedgesNeeded = 100;
 let limes =["small", "large", "medium", "large", "small"]
 let wedgesCut=0
 let limesCut = 0
 i = 0
 while(wedgesCut < wedgesNeeded && i < limes.length){
    if (limes [i] =="small"){
        wedgesCut +=6
    }
    else if (limes [i] == "medium"){
        wedgesCut +=8
    }
    else if (limes [i] == "large"){
        wedgesCut +=10
    }
    limesCut++
    i++
 }
 console.log( wedgesCut)

 //Task 3
 let timeLeft = 4;
 let order = ["Energizer", "All or Nothing", "Green Garden", "Tropical Island"];
 let totalTime = 0
 let orderTrack = []
 let index =0
 for(let i =0; i < order.length; i++){
     let juice = order [i]
    if (juice === 'Pure Strawberry Joy'){
    timeToMixJuiceResult = 0.5
  
}
    else if (juice === 'Energizer'|| juiceName ==='Green Garden'){
        timeToMixJuiceResult =1.5
    
    }

    else if (juice === "Tropical Island"){
        timeToMixJuiceResult = 3
    }
    else if( juice ==="All or Nothing"){
        timeToMixJuiceResult = 5
    }
    else{
        timeToMixJuiceResult = 2.5
    }
    orderTrack.push(juice)
    totalTime += timeToMixJuiceResult
 }

 while (totalTime < timeleft && index < orderTrack){
    
 }