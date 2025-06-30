const currentDate = new Date();


const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);
function formatDateMMDDYYYY(dateObj) {
  const month = dateObj.getMonth() + 1; 
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}


function formatDateLong(dateObj) {
  const formatted = dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return `Formatted Date (Month Day, Year): ${formatted}`;
}


console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
