$(document).ready(function() {

  // Button event delegations
  $('#addItem').on('click', function(e) {
    e.preventDefault();
    var newItemAdded = $('#newItem').val();
    $('#mainList').append('<div>' + newItemAdded + '<button class="delete btn btn-primary" type="button">X</button></div>');
    $('#newItem').val('');
    $('.delete').off('click').on('click', function(e) {
      $(e.target).parent().remove();
    });
  });

  // Event delegation to cross-off completed tasks w/o deleting
  $('#mainList').on('click', function(e) {
    $(e.target).css('text-decoration', 'line-through');
  });
});
