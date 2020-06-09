$(document).ready(function() {
  
  let counter =0;
  let flavors = ["chocolate", 'vanilla', 'rocky-road'];
  
  $("button#stop").click(function() {
    if(counter < 5) {
      ...
    } else if (counter < 4) {
      ...
    } else if (counter < 3) {
      ...
    } else {
      ...
    }
    if(counter >= flavors.length) {
      noMoreFlavors();
    } else if (counter < flavors.length) {
      $("ul#output").append("<li>" + flavors[counter] + "</li>");
      counter++;
    } else {
      console.log("Please contact your ice cream admin.");
    }
    console.log("I will always fire when button is clicked");
  });
});

function noMoreFlavors() {
  alert("There are no more flavors.");
}