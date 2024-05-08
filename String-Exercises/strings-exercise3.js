/* Some programming languages (like Python) include a "title" method to
 return a string with Every Word Capitalized (e.g. 'title case'.title() 
 returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string
 methods you know to print 'Title Case' from 'title case'. */

 let string="JavaScript";
let string1=console.log(string.slice(0,1)+string.slice(4,5));
console.log(`The abbreviation for ${string} is ${string.slice(0,1)+string.slice(4,5)}.`);


let notTitle = 'title case';

console.log(`${notTitle.slice(0,1).toUpperCase()}${notTitle.slice(1,6)}${notTitle.slice(6,7).toUpperCase()}${notTitle.slice(7,10)}`);
