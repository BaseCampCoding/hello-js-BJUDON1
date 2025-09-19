let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

let canExecuteFastAttack = !knightIsAwake
//false

if (knightIsAwake == false){
    canExecuteFastAttack = true
}
else{
    canExecuteFastAttack = false
}
console.log('Fast Attack:'+ canExecuteFastAttack)

let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake
//true
console.log('Spy:' + canSpy)
let canSignalPrisoner = prisonerIsAwake && !archerIsAwake
//true
console.log('Signal Prisoner'+ canSignalPrisoner)
let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake)
//true
console.log('Free Prisoner:' + canFreePrisoner)
