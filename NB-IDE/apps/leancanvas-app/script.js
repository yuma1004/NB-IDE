function getNewNote() {
	return  '<div class="note">' + 
			'<textarea class="text"></textarea>' +
			'<input class="delete-button" type="button" value="削除">' +
			'<input data-color="#e00020" class="color-button" type="button" value="赤">' +
			'<input data-color="#e0ff20" class="color-button" type="button" value="黄">' +
            '</div>';
}

function appendFunctions($note) {
	$note.draggable();
	$note.resizable();

	// $note.autosize('.expanding');

    $note.children(".delete-button")
    .on('click', function() {
        $(this).parents('.note').remove();
	});
	
    $note.children(".color-button")
    .on('click', function() {
        const color = $(this).data('color');
        $(this).parents('.note').css('background-color', color);
    });
}



$(function(){
    $('tbody').sortable();
});

$('#addRow').click(function(){
    var html = '<tr><td><input type="text" name="name"></td><td><button class="remove">-</button></td></tr>';
    $('tbody').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('tr').remove();
});




$('#add-button-4').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#card-wrapper-4').append($note);
});

$('#add-button-3').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#card-wrapper-3').append($note);
});

$('#add-button-9').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#card-wrapper-9').append($note);
});

$('#add-button-2').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#card-wrapper-2').append($note);
});

$('#add-button-8').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#card-wrapper-8').append($note);
});

$('#add-button-5').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#card-wrapper-5').append($note);
});

$('#add-button-7').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#card-wrapper-7').append($note);
});

$('#add-button-6').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#card-wrapper-6').append($note);
});


// card-add hover
$('.card-wrapper').hover(
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
      $(this).find('.add-card').addClass('text-active');
      
    },
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
      $(this).find('.add-card').removeClass('text-active');
      
    }
  );