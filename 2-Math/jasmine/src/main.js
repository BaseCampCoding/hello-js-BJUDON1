let ratePerHour = 60;
let dayRate = ratePerHour * 8;
let budget = 1000;
let workdays = Math.floor(budget/dayRate);
console.log(workdays);
let billable = 22;
let monthlyDiscount = 0.8;
let remainingDays = 35 - billable;
let fullMonths = Math.floor(35/billable);



console.log(fullMonths)
let discountedMonthlyRate = (billable * dayRate * monthlyDiscount);
let remainingCost = remainingDays * dayRate
let totalProjectCost = Math.floor(discountedMonthlyRate + remainingCost );
  