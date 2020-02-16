//
$("ul").on("click","li", function() {
  $(this).toggleClass("completed");
});

// clickig on Trash Icon to delete todo from List
// selct Trash Icon and add event listner
$('ul').on('click','span',function(event) {
  // delete selected list from ul
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// add new todo input
// add event listner to input to add new todo to list when press "Enter"
$("input[type = 'text']").on('keypress',function(e){

  if(e.which === 13){
    // get the value inside the input box
    var todoText = $(this).val();
    // make this value as a list
    var newList = "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>";
    // add this new list to ul
    $('ul').append(newList);
    //delete the old value
    $(this).val("");
  }
});

$('#toggle-form').on('click',function(){
  $('input').fadeToggle(400);
});
