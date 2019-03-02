
var fs = require('fs');
var vowels = 'aeiouAEIOU';
var i = 0;


fs.readFile('sentences.txt', function(err, text) {
  if(err) throw err;

  var lines = text.toString().split("\n"); //put the text into an array of lines
  lines.forEach(function(line) {

    var words = line.toString().split(" "); //put each line into an array of words

    words.forEach(function(word) {
      var vcount = 0;


        if (vowels.indexOf(word[i]) !== -1) {
          vcount += 1;

        }
        console.log(vcount);
    });

    console.log('Words' + '['+ i +']' + ', Length: ' + words.length + ' ' + words);
    i++;
  });
});




function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }

  }
  return vcount;
}
//console.log(vowel_count("The quick brown fox"));


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
