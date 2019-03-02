
var fs = require('fs');
var vowel_list = 'aeiouAEIOU';
var i=0;


fs.readFile('sentences.txt', function(err, text) { //get the text or error
  if(err) throw err;

  var lines = text.toString().split("\n"); //put the text into an array of lines
  lines.forEach(function(line) {

    var words = line.toString().split(" "); //put each line into an array of words

    words.forEach(function(word) {
      function vowel_count(word) {
        var vcount = 0;
        for(var x = 0; x < word.length ; x++) {
          if (vowel_list.indexOf(word[x]) !== -1) {
            vcount += 1;
          }
        }
        return vcount;
      }
      console.log(vowel_count(word));

    });

    console.log('Words' + '['+ i +']' + ', Length: ' + words.length + ' ' + words);
    i++;

  });

});







  //    for(i in lines) {
//        var words = lines[i].toString().split("\n");
//        console.log(words[i])
  //  }




//var array1 = ['a', 'b', 'c'];

//array1.forEach(function(element) {
  //console.log(element);
//});

// expected output: "a"
// expected output: "b"
// expected output: "c"
