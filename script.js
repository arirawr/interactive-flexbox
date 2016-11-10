var numBoxes = 3;

$('#direction').change(function() {
  $('#flexbox').css('flex-direction', $(this).val());
});

$('#justifycontent').change(function() {
  $('#flexbox').css('justify-content', $(this).val());
});

$('#alignitems').change(function() {
  $('#flexbox').css('align-items', $(this).val());
});

$('#wrap').change(function() {
  $('#flexbox').css('flex-wrap', $(this).val());
});

$('#aligncontent').change(function() {
  $('#flexbox').css('align-content', $(this).val());
});

$('#flex1').change(function() {
  $('#box1').css('flex', $(this).val());
});

$('#addbox').click(function() {
  numBoxes++;
  $('#flexbox').append('<div class="box" id="box' + numBoxes + '">I am flexbox item ' + numBoxes + '.</div>');
});

$('#removebox').click(function() {
  $('#box' + numBoxes).remove();
    numBoxes--;
});