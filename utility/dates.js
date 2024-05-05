const currentDate = new Date();
  
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

export const formattedDate = currentDate.toLocaleDateString('en-IN', optionsDate);
export const formattedTime = currentDate.toLocaleTimeString('en-US', optionsTime);
export const formattedDateNTime = formattedDate + ", " + formattedTime;
