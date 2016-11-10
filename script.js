$('#direction').change(function() {
  $('#flexbox').css('flex-direction', $(this).val());
});

$('#justifycontent').change(function() {
  $('#flexbox').css('justify-content', $(this).val());
});

$('#alignitems').change(function() {
  $('#flexbox').css('align-items', $(this).val());
});

$('#margin').change(function() {
  $('#box').css('margin', $(this).val());
});

$('#border').change(function() {
  $('#box').css('border-width', $(this).val());
});