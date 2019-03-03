
var fs = require('fs');

fs.readFile('sentences.txt', function(err, text) { //get the text or error
  if(err) throw err;
else

getLines(text);

function getLines(text) {
  var lines = text.toString().split("\n");
    lines.forEach(function(line) {
      iterateWords(line);
    });
}

function getWords(line) {
  var words = line.toString().split(" ");
  words.forEach(function(word) {
    countVowels(word);
    //console.log(word);
  });
}

function getVowels(word) {
  var vowels = 'aeiouAEIOU';
  var vcount = 0;
  //console.log(word + word.length);
  for(var x = 0; x < word.length ; x++) {
    if (vowels.indexOf(word[x]) !== -1) {
      //console.log(word[x]);
      vcount += 1;
      console.log(vcount);
      //console.log(word + vcount);
    }
  }
}
});
