
var fs = require('fs');

fs.readFile('sentences.txt', function(err, text) { //get the text or error
  if(err) throw err;
else

splitText(text);

function splitText(text) {
  //console.log('start lines');
  var lines = text.toString().split("\n");
    lines.forEach(function(line) {
      splitLines(line);
    });
}

function splitLines(line) {

  //console.log(typeof line);
  var words = line.toString().split(" ");
  words.forEach(function(word) {
    countVowels(word);

  });
}

function countVowels(word) {
  //console.log(word);
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vcount = 0;
  //console.log(word + word.length);
  //console.log(typeof word);
  for(var x = 0; x < word.length ; x++) {
    //console.log(word[x]);
    if (vowels.includes(word[x].toLowerCase())) {
      //console.log('enter');
      vcount++;
    }
  }
console.log(word + vcount);
}

});
