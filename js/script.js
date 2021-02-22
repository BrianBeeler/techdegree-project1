/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array - these are quotes that can be randomly selected for display
***/

let quotes = [
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    year: "~1776"
  }, {
    quote: "Whoever is happy will make others happy too.",
    source: "Anne Frank",
    citation: '"The Diary of a Young Girl"'
  }, {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source: "Abe Lincoln",
    personalFavorite: true
  }, {
    quote: "Only a life lived for others is a life worthwhile.",
    source: "Albert Einstein",
    personalFavorite: true
  }, {
    quote: "Asante sana squash banana",
    source: "Rafiki",
    year: 1994,
    citation: '"The Lion King"'
  }
]


/***
 * `getRandomQuote` function - returns a random quote from the quotes array
 *  author: Brian Beeler
***/

let getRandomQuote = () => {
  let index = Math.floor( Math.random() * quotes.length);
  return quotes[index];
}

/***
 * `printQuote` function - gets a random quote, assembles and displays it in html
 * auther: Brian Beeler
***/

let printQuote = () => {
  quote = getRandomQuote(quotes);

  // Add quote and source to the html tag
  html = `<p class="quote">${quote.quote}</p>`
  html +=`<p class="source">${quote.source}`
  
  // Add optional properties: citation, year, personal favorite
  if (quote.citation) {
    html += `<span class="year">${quote.citation}</span>`
  }
  
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`
  }

  if (quote.personalFavorite) {
    html += `<span class="pf"> (Personal Favorite)</p>`
  }

  // Closing tag
  html+="</p>"

  // Print finalized html template
  console.log(html)

  // Change the background color, then replace the quote html
  random_bg_color();
  document.getElementById('quote-box').innerHTML = html

}

/**
 * `random_bg_color` - chooses random rgb color, and changes the html background to it
 *  not original, source: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
 */
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  document.body.style.background = bgColor;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/**
 *  Automatically rotate quotes, every 5 seconds
 */

 setInterval(printQuote, 5000)