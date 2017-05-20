//Get the Rules button element
var rules = $("#rules");
var overlay = $(".overlay");
var closeOverlay = $("#close-rules");

//When the user clicks on the rules button
$(rules).on("click", function() {
  //The overlay will appear
  overlay.css("display", "block");
});

//When the user clicks on the cross-icon
$(closeOverlay).on("click", function() {
  //The overlay will disappear
  overlay.css("display", "none");
});
