function getNewNote() {
    return  '<div class="note">' +
                '<input class="text-form" type="text">' +
                '<input class="text-form" type="text">' +
                '<input class="text-form" type="text">' +
                '<br>' +
                '<input class="delete-button" type="button" value="削除">' +
                '<input data-color="#e00020" class="color-button" type="button" value="赤">' +
                '<input data-color="#e0ff20" class="color-button" type="button" value="黄">' +
            '</div>';
}

// createしたnoteの動きをつける。（ドラッグ・リサイズなど）
function appendFunctions($note) {
    $note.draggable();
    // $note.resizable();　ノートの大きさ調整

    // $note.children(".delete-button").on('click', function() {
    //     $(this).parents('.note').remove();
	// });
	
    // $note.children(".color-button").on('click', function() {
    //     const color = $(this).data('color');
    //     $(this).parents('.note').css('background-color', color);
    // });
}

// createボタンをクリックしてnoteをcreateするための式。
$('.create').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

// 式を実行してcreateボタンをクリックしてnoteをcreateする。
$('.btn').append($note);
});