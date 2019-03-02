
var fs = require('fs');
var vowels = 'aeiouAEIOU';
var x = 0;
var vcount = 0;
var y = 0;

fs.readFile('sentences.txt', function(err, text) { //get the text or error
  if(err) throw err;

  var lines = text.toString().split("\n"); //put the text into an array of lines
  lines.forEach(function(line) {

    var words = line.toString().split(" "); //put each line into an array of words

    words.forEach(function(word) {
      y += 1;
      function vowel_count(word) {
        var vcount = 0;
        for(var x = 0; x < word.length ; x++) {
          if (vowels.indexOf(word[x]) !== -1) {
            vcount += 1;
          }
        }
        return vcount;
      }
      if (vowel_count(word) > 2) {
        console.log(vowel_count(word) + word);
      }
    });
    //console.log(words);
  });

});
