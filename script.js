/*global $*/ 
$(document).ready(function(){
    
    function myFunction() {
        document.getElementById("input").value;
        // function for button to get input value
    }
    // var search = $(myFunction);
    console.log("myFunction");
});




// $(document).ready(function() {
//     //making sure that everything is working before starting jquery

// var search = $("#btn").onclick("#input".val());

//   $.getJSON(
//       //getting API
     
//       "https://api.giphy.com/v1/gifs/search?q=twin-peaks&api_key=dc6zaTOxFJmzC",
     
     
//       function(response) {
//         console.log(response);
//         $("#gif").append("<img src=" + response.data[24].images.fixed_width.url + ">");
//       });

//       console.log(search);
// });