/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
 {
  quote: "I'll get you, my pretty, and your little dog, too!",
  source: "Wicked Witch of the West",
  citation: 'The Wizard of Oz',
  year: 1939
 },
 {
  quote: "Nobody puts Baby in a corner.",
  source: "Patrick Swayze",
 // citation: "Dirty Dancing",
  year: 1987
 },
 {
  quote: "You talking to me?",
  source: "Travis Bickle",
  //citation: "Taxi Driver",
  year: 1976
 },
 {
  quote: "E.T. phone home.",
  source: "E.T",
  citation: "E.T. The Extra-Terrestrial",
  //year: 1982
 },
 {
  quote: "I see dead people.",
  source: "kid",
  citation: "The Sixth Sense",
  //year: 1999

 },




];




/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  let randomNumber = quotes[Math.floor(Math.random() * quotes.length)]; //use quote.length to be able to use this function while still adding more objects. 
  return randomNumber

}

getRandomQuote(); //returns one random entire object

/***
 * `printQuote` function
***/

; //new variable name for single object containing values. 


function printQuote () {
  let html='';
  let randomQuote = getRandomQuote();


  html += `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}`;   //returning html

  if (randomQuote.citation) {
       html += `<span class="citation"> ${randomQuote.citation}</span>`;
    
       }
    
   if (randomQuote.year) {
         html += `<span class="year"> ${randomQuote.year}</span>`;
    
       }
  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;  
   }

   printQuote();
   








// function printQuote () {

//   randomQuote = getRandomQuote(); //quotes[i], returns one object that is the same?
//   let HTML = `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}`;

//   if (randomQuote.includes('citation')) {
//     HTML += `<span class="citation"> ${randomQuote.citation}</span>`;

//   }

//   if (randomQuote.includes('year')) {
//     HTML += `<span class="year"> ${randomQuote.year}</span>`;

//   }
//     HTML += `</p>`;
// }

// console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);