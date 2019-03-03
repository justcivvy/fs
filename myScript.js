
/* script that reads the text of a file and counts the number of lines of
text that have at least 7 words containing 2 or more vowels.
Returns the number of lines matching the criteria
*/

const fs = require('fs');

fs.readFile('sentences.txt', function(err, text) { //get the text or error
  if(err) throw err;
  else
  //starts the process, displays the results
  console.log('There are ' + splitText(text) + ' lines that have at least seven' +
  ' words with greater than or equal to two vowels.');


  function splitText(text) {
    var lcount = 0;
    var lines = text.toString().split("\n"); //creates element for each line
      lines.forEach(function(line) { //iterates through each element
        if (splitLines(line) >= 7) { //checks >= 7 words in line
          lcount += 1;
        }
      });
    return lcount;
  }

  function splitLines(line) {
    var wcount = 0;
    var words = line.toString().split(" "); //creates element for each word in line
    words.forEach(function(word) { //iterates through each element
      if (countVowels(word) >= 2) { //checks >= 2 vowels in word
        wcount++;
      }
    });
   return wcount;
  }

  function countVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vcount = 0;
    var wl = word.length;
    var x;
    for (x = 0; x < wl ; x++) {
      if (vowels.includes(word[x].toLowerCase())) { //checks if each letter is a vowel
        vcount++;
      }
    }
    return vcount;
  }

});
