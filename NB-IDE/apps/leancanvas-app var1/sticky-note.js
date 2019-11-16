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

$('#add-button').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#sticky-note-container').append($note);
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

