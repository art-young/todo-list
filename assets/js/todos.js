// Check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
  // Must remove parent of this span, which is the entire li
  $(this).parent().fadeOut(500, function(){
    // New this below refers to li, not original span
    $(this).remove();
  })
  // Call stopPropagation to avoid bubbling up to parent elements
  event.stopPropagation();
});

// Add new event on "ENTER" keypress
$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    // Get new todo text from input and clear input
    var todoText = $(this).val();
    $(this).val("");
    // Create a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});