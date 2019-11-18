// function getNewNote() {
// 	return  '<div class="note">' + 
// 			'<textarea class="text"></textarea>' +
// 			'<input class="delete-button" type="button" value="削除">' +
// 			'<input data-color="#e00020" class="color-button" type="button" value="赤">' +
// 			'<input data-color="#e0ff20" class="color-button" type="button" value="黄">' +
//             '</div>';
// }

// function appendFunctions($note) {
// 	$note.draggable();
// 	$note.resizable();

// 	// $note.autosize('.expanding');

//     $note.children(".delete-button")
//     .on('click', function() {
//         $(this).parents('.note').remove();
// 	});
	
//     $note.children(".color-button")
//     .on('click', function() {
//         const color = $(this).data('color');
//         $(this).parents('.note').css('background-color', color);
//     });
// }


// ボタンクリックでリストを追加

// 1
$(function(){
    $('#tbody-1').sortable();
});

$('#add-button-1').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-1').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-1 tr').remove();
});

// 4
$(function(){
    $('#tbody-4').sortable();
});

$('#add-button-4').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-4').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-4 tr').remove();
});


// 3
$(function(){
    $('#tbody-3').sortable();
});

$('#add-button-3').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-3').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-3 tr').remove();
});


// 9
$(function(){
    $('#tbody-9').sortable();
});

$('#add-button-9').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-9').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-9 tr').remove();
});


// 2
$(function(){
    $('#tbody-2').sortable();
});

$('#add-button-2').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-2').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-2 tr').remove();
});


// 8
$(function(){
    $('#tbody-8').sortable();
});

$('#add-button-8').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-8').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-8 tr').remove();
});


// 5
$(function(){
    $('#tbody-5').sortable();
});

$('#add-button-5').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-5').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-5 tr').remove();
});


// 7
$(function(){
    $('#tbody-7').sortable();
});

$('#add-button-7').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-7').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-7 tr').remove();
});


// 6
$(function(){
    $('#tbody-6').sortable();
});

$('#add-button-6').click(function(){
    var html = '<tr><td><textarea name="name" rows="3" cols="30"></textarea></td><td><button class="remove">-</button></td></tr>';
    $('#tbody-6').append(html);
});

$(document).on('click', '.remove', function() {
    $(this).parents('.list-6 tr').remove();
});


// +を押してリストを追加
// $('#add-button-4').on('click', function(){
// 	var $note = $(getNewNote());
// 	appendFunctions($note);

//     $('#card-wrapper-4').append($note);
// });

// $('#add-button-3').on('click', function(){
// 	var $note = $(getNewNote());
// 	appendFunctions($note);

//     $('#card-wrapper-3').append($note);
// });

// $('#add-button-9').on('click', function(){
// 	var $note = $(getNewNote());
// 	appendFunctions($note);

//     $('#card-wrapper-9').append($note);
// });

// $('#add-button-2').on('click', function(){
// 	var $note = $(getNewNote());
// 	appendFunctions($note);

//     $('#card-wrapper-2').append($note);
// });

// $('#add-button-8').on('click', function(){
// 	var $note = $(getNewNote());
// 	appendFunctions($note);

//     $('#card-wrapper-8').append($note);
// });

// $('#add-button-5').on('click', function(){
// 	var $note = $(getNewNote());
// 	appendFunctions($note);

//     $('#card-wrapper-5').append($note);
// });

// $('#add-button-7').on('click', function(){
// 	var $note = $(getNewNote());
// 	appendFunctions($note);

//     $('#card-wrapper-7').append($note);
// });

// $('#add-button-6').on('click', function(){
// 	var $note = $(getNewNote());
// 	appendFunctions($note);

//     $('#card-wrapper-6').append($note);
// });


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