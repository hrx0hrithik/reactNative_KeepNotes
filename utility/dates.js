const optionsDate = {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
};

const optionsTime = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
};

let formattedDate = '';
let formattedTime = '';
let formattedDateNTime = '';

function updateDateTime() {
  const currentDate = new Date();
  
  formattedDate = currentDate.toLocaleDateString('en-IN', optionsDate);
  formattedTime = currentDate.toLocaleTimeString('en-US', optionsTime);
  formattedDateNTime = formattedDate + ", " + formattedTime;
  
  return { formattedDate, formattedTime, formattedDateNTime };
}

// Set interval to update the date every 30 seconds
setInterval(() => {
  updateDateTime(); // Call the function to update the variables
}, 30000);

// console.log(formattedDate)
// console.log(formattedTime)
// console.log(formattedDateNTime)

// Export the variables directly
export { formattedDate, formattedTime, formattedDateNTime };
