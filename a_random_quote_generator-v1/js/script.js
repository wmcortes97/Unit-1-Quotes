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
  citation: "Dirty Dancing",
  year: 1987
 },
 {
  quote: "You talking to me?",
  source: "Travis Bickle",
  citation: "Taxi Driver",
  year: 1976
 },
 {
  quote: "E.T. phone home.",
  source: "E.T",
  citation: "E.T. The Extra-Terrestrial",
  year: 1982
 },
 {
  quote: "I see dead people.",
  source: "kid",
  citation: "The Sixth Sense",
  year: 1999

 },




];




/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  let randomNumber = quotes[Math.floor(Math.random() * quotes.length) + 1]; //use quote.length to be able to use this function while still adding more objects. 
  return randomNumber

}

getRandomQuote();
/***
 * `printQuote` function
***/

function printQuote () {

  let randomQuote = getRandomQuote();
  let HTML = `<p class="quote"> ${quotes.quote} </p><p class="source"> quote source`;

  if (quotes.includes('citation')) {
    HTML += `<span class="citation"> ${quotes.citation}</span>`;

  }

  if (quotes.includes('year')) {
    HTML += `<span class="year"> ${quotes.year}</span>`;

  }
    HTML += `</p>`;
}

console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);