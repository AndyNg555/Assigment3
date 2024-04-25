/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let dayCounter = 0;
const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const dayElements = daysOfWeek.map(function(day) {
    return document.getElementById(day);
});
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function updateDayCounter(clickedDay) {
    if (!dayElements[clickedDay].classList.contains('clicked')) {
        dayCounter++;
    }
    dayElements[clickedDay].classList.add('clicked');
}

dayElements.forEach(function(day, index) {
    day.addEventListener('click', function() {
        updateDayCounter(index);
        calculateTotalCost();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', function() {
    dayCounter = 0;
    dayElements.forEach(function(day) {
        day.classList.remove('clicked');
    });
    calculatedCostElement.textContent = '0';
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

fullDayButton.addEventListener('click', function() {
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    dailyRate = 35;
    calculateTotalCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

halfDayButton.addEventListener('click', function() {
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    dailyRate = 20;
    calculateTotalCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    const totalCost = dayCounter * dailyRate;
    calculatedCostElement.textContent = totalCost;
}