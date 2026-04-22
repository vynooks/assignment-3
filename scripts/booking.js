/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let pricePerDay = 35;
let dayCount = 0;

const dayButtons = document.querySelectorAll(".booking-page li");
const costText = document.querySelector(".cost-text");
const clearDaysButton = document.querySelector(".clear-days");
const fullDayButton = document.querySelector(".full");
const halfDayButton = document.querySelector(".half");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach(day => {
    day.onclick = () => {
        if (day.classList.contains("clicked")) {
            day.classList.remove("clicked");
            dayCount--;
        } else {
            day.classList.add("clicked");
            dayCount++;
        }
        updateCost();
    };
})



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDaysButton.onclick = () => {
    dayButtons.forEach(day => day.classList.remove("clicked"));
    dayCount = 0;
    costText.textContent = "My weekly cost will be $0.";
};


/********* change rate *********/// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.onclick = () => {
    pricePerDay = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    updateCost();
};
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.onclick = () => {
    pricePerDay = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    updateCost();
};


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updateCost() {
    costText.textContent =
        "My weekly cost will be $" + (dayCount * pricePerDay) + ".";
}
