$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var chosenGender = $("#gender").val();
    var chosenPersonality = $("#personality").val();
    $(".card").hide();
      if (chosenGender === "Women" && chosenPersonality === "Smart")  {
      $("#portman").show();
    } else if (chosenGender === "Women" && chosenPersonality === "Funny") {
      $("#wiig").show();
    } else if (chosenGender === "Women" && chosenPersonality === "Sporty") {
      $("#williams").show();
    } else if (chosenGender === "Men" && chosenPersonality === "Smart") {
      $("#goldblum").show();
    } else if (chosenGender === "Men" && chosenPersonality === "Funny") {
      $("#carrey").show();
    } else if (chosenGender === "Men" && chosenPersonality === "Sporty") {
      $("#beckham").show();
    } else if (chosenGender === "Both" && chosenPersonality === "Smart") {
      $("#portman").show();
      $("#goldblum").show();
    } else if (chosenGender === "Both" && chosenPersonality === "Funny") {
      $("#wiig").show();
      $("#carrey").show();
   } else {
     $("#williams").show();
     $("#beckham").show();
   }

    event.preventDefault();
  });
});
