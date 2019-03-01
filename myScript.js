
$(document).ready(function (myFunction) {
  jQuery.get("https://awesome-page-fullstory.glitch.me/sentences.txt",
  function(data) {
    var myvar = data;
      document.getElementById("demo").innerHTML = data;
  });

});
