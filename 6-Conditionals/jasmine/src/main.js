//task1
let kind = "car"

let needsLicenseResilt;

if(kind === 'car' || kind === 'truck'){
    needsLicenseResilt = true
}
else{
    needsLicenseResilt = false
}


//task2
let option1 = 'Acura';
let option2 = "acura";

let chooseVehicleResult;
if (option1 > option2){
    chooseVehicleResult = option2 + " is clearly the better choice"
}
else{
    chooseVehicleResult = option1 + " is clearly the better choice"
}
console.log(chooseVehicleResult)

//task 3

let originalPrice = 10000
let age = 12
let calculateResellPriceResult

if (age < 3){
   calculateResellPriceResult = originalPrice * 0.8;
}
else if(age > 10){
    calculateResellPriceResult = originalPrice * 0.5;

}
else{
    calculateResellPriceResult = originalPrice * 0.7;
}
console.log(calculateResellPriceResult)
