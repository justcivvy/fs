
$(document).ready(function (callMeIshmael) {

  jQuery.get("https://awesome-page-fullstory.glitch.me/sentences.txt",
  function(whiteWhale) {

    document.getElementById("demo").innerHTML = whiteWhale;

  

  });

});
