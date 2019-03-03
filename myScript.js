
var fs = require('fs');

fs.readFile('sentences.txt', function(err, text) { //get the text or error
  if(err) throw err;
else

splitText(text);

function splitText(text) {
  var lcount = 0;
  var lines = text.toString().split("\n");
    lines.forEach(function(line) {
      if (splitLines(line) >= 7) {
        lcount++;
      }
      console.log('lcount' + lcount);
      return lcount;
    });
}

function splitLines(line) {
  var words = line.toString().split(" ");
  words.forEach(function(word) {
    var wcount = 0;
      if (countVowels(word) >= 2) {
        wcount++;
      }
   console.log('wcount' + wcount);
   return wcount;
 });
}

function countVowels(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vcount = 0;
  for (var x = 0; x < word.length ; x++) {
    if (vowels.includes(word[x].toLowerCase())) {
      vcount++;
    }
  }
  console.log(word + vcount);
  return vcount;
}
});
