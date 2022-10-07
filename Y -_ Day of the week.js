// Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
// Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"



const dayOfTheWeek = date => new Date(date.split('/').reverse().join('-')).toLocaleString('en-us', {weekday: 'long'});