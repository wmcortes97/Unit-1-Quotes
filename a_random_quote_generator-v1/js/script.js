/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * I created the value quotes that contain 5 objects, each with up to 4 values: quote, source, citation, and year.  
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
  source: "Cole Sear",
  citation: "The Sixth Sense",
  //year: 1999
  tags: "Horror/ Thriller"

 },




];




/***
 * `getRandomQuote` function
 * The getRandomQuote function will generate a random object within the quotes array. 
***/

function getRandomQuote () {
  let randomNumber = quotes[Math.floor(Math.random() * quotes.length)]; 
  return randomNumber

}

getRandomQuote(); 

/***
 * `printQuote` function
 * The printQuote function will print a random quote, its source, along with its citation and year if provided within the random object. 
 * When called, this function will display the object values with styling due to the embedded HTML. 
***/




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

  if (randomQuote.tags) {
        html += `<span class="tags"> ${randomQuote.tags}</span>`;
   
      }
  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;  
   }

   printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);