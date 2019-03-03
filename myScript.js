
const fs = require('fs');

fs.readFile('sentences.txt', function(err, text) { //get the text or error
  if(err) throw err;
else
  console.log('There are ' + splitText(text) + ' lines that have at least seven' +
  ' words with greater than or equal to two vowels.');

  function splitText(text) {
    var lcount = 0;
    var lines = text.toString().split("\n");
      lines.forEach(function(line) {
        if (splitLines(line) >= 7) {
          lcount += 1;
        }
      });
    return lcount;
  }

  function splitLines(line) {
    var wcount = 0;
    var words = line.toString().split(" ");
    words.forEach(function(word) {
      if (countVowels(word) >= 2) {
        wcount++;
      }
    });
   return wcount;
  }

  function countVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vcount = 0;
    for (var x = 0; x < word.length ; x++) {
      if (vowels.includes(word[x].toLowerCase())) {
        vcount++;
      }
    }
    return vcount;
  }

});
