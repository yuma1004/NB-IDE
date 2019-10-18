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