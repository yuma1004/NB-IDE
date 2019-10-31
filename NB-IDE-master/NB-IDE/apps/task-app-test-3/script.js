$('.layer-a').sortable();

// add-btn
$(document).on("click",".add-btn-layer-1", function () {
    var html = `
        <div class="layer-1">
            <input type="text" class="text" placeholder="layer-1=title">
            <input class="add-btn-layer-2" type="button" value="add-btn-layer-2" >
            <button class="remove1">-</button>
            <p class="accordion article-title"></p>
            
            <ul>

            </ul>
        </div>
        <script>$('.layer-1').sortable();</script>
        <script>$('.layer-1 ul').sortable();</script>
    `;
    $('.layer-a').append(html);
    $('.layer-a').css('padding','10px 10px');
    $('.layer-a').css('height','auto');
    
});


$(document).on("click",".add-btn-layer-2", function () {
    var html = `
        <div class="layer-2">
            <input class="check-1" type="checkbox">
            <input type="text" class="text" placeholder="layer-2=mission-1">
            <input class="add-btn-layer-3" type="button" value="add-btn-layer-3" >
            <button class="remove2">-</button>
            <p class="accordion article-title"></p>
            <ul>

            </ul>
        </div>
        <script>
            $('.layer-2 ul').sortable();
        </script>
    `;
    $(this).parent('.layer-1').children("ul").append(html);
});


$(document).on("click",".add-btn-layer-3", function () {
    var html = `
        <div class="layer-3">
            <input class="check-1" type="checkbox">
            <input type="text" class="text" placeholder="layer-3=mission-2">
            <input class="add-btn-layer-4" type="button" value="add-btn-layer-4" >
            <button class="remove3">-</button>
            <p class="accordion article-title"></p>
            <ul>

            </ul>
        </div>
        <script>
            $('.layer-3 ul').sortable();
        </script>
    `;
    $(this).parent('.layer-2').children("ul").append(html);
});


$(document).on("click",".add-btn-layer-4", function () {
    var html = `
        <div class="layer-4">
            <input class="check" type="checkbox" name="check">
            <input type="text" class="text" placeholder="layer-4=target">
            <tr>
                <td><button class="remove4">-</button></td>
            </tr>
        </div>
    `;
    $(this).parent('.layer-3').find("ul").append(html);
    
});


// remove機能
$(document).on('click', '.remove1', function() {
    $(this).parents('.layer-1').remove();
});

$(document).on('click', '.remove2', function() {
    $(this).parents('.layer-2').remove();
});

$(document).on('click', '.remove3', function() {
    $(this).parents('.layer-3').remove();
});

$(document).on('click', '.remove4', function() {
    $(this).parents('.layer-4').remove();
});


// アコーディオン機能
//.accordionがクリックされたら
$(document).on('click', '.accordion', function() {
 
    $(this).next('ul').slideToggle(200);
    $(this).toggleClass('open');
});


$('.article-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open');
  });



// チェックボックス機能
$(document).on('click', '.check-1', function() {

    $(this).parent().find('ul input').prop('checked',this.checked);

});


// キーボードで操作
$(document).on('keydown', 'input', function(e) {

// 上矢印キー

    if(e.keyCode==38){
        $(this).parent().prev().prev().find(".text").focus();
    }    
    if(e.keyCode==38){
        $(this).parent().prev().find(".text").focus();
    }
    
    
// 下矢印キー
    if(e.keyCode==40){
        $(this).parent().next().next().find(".text").focus();
    }
    if(e.keyCode==40){
        $(this).parent().next().find(".text").focus();
    }

// 左矢印キー
    if(e.keyCode==37){
        $(this).parent().parent().parent().find(".text")[0].focus();
    }
    
// 右矢印キー
    if(e.keyCode==39){
        $(this).find(".add-btn-3").focus();
    }
// 右矢印キー
    if(e.keyCode==39){
        $(this).parent().find("ul").next().focus();
    }

    if(e.keyCode==13){
        var html = `
        <div class="d">
            <input class="check" type="checkbox" name="check">
            <input type="text" class="text">
            <tr>
                <td><button class="remove1">-</button></td>
            </tr>
        </div>
    `;
    
    $(this).parent().parent().parent('.layer-3').find("ul").append(html);

        $(this).parent().next().find(".text").focus();
    }
    console.log(e.keyCode)
});








// layer-b-------------------------------------------
$('.layer-b').sortable();

// add-btn
$(document).on("click",".add-btn-1", function () {
    var html = `
            <div class="layer-3-b">
            <input type="text" class="text" placeholder="layer-3=mission-2">
            <input class="add-btn-2" type="button" value="add-btn-2" >
            <button class="remove3-b">-</button>
            <p class="accordion article-title"></p>
            <ul>

            </ul>
        </div>
        <script>$('.layer-3-b').sortable();</script>
        <script>$('.layer-3-b ul').sortable();</script>
    `;
    $('.layer-b').append(html);
    $('.layer-b').css('padding','10px 10px');
    $('.layer-b').css('height','auto');
    
});


$(document).on("click",".add-btn-2", function () {
    var html = `
        <div class="layer-4-b">
            <input class="check-1" type="checkbox">
            <input type="text" class="text" placeholder="layer-4=target">
            <input class="add-btn-3" type="button" value="add-btn-3" >
            <button class="remove4-b">-</button>
            <p class="accordion article-title"></p>
            <ul>

            </ul>
        </div>
        <script>
            $('.layer-4-b ul').sortable();
        </script>
    `;
    $(this).parent('.layer-3-b').children("ul").append(html);
});


$(document).on("click",".add-btn-3", function () {
    var html = `
        <div class="layer-5">
            <input class="check-1" type="checkbox">
            <input type="text" class="text" placeholder="layer-5=function">
            <input class="add-btn-4" type="button" value="add-btn-4" >
            <button class="remove5">-</button>
            <p class="accordion article-title"></p>
            <ul>

            </ul>
        </div>
        <script>
            $('.layer-5 ul').sortable();
        </script>
    `;
    $(this).parent('.layer-4-b').children("ul").append(html);
});


$(document).on("click",".add-btn-4", function () {
    var html = `
        <div class="layer-6">
            <input class="check" type="checkbox" name="check">
            <input type="text" class="text"  placeholder="layer-6=element">
            <tr>
                <td><button class="remove6">-</button></td>
            </tr>
        </div>
    `;
    $(this).parent('.layer-5').find("ul").append(html);
    
});


// remove機能
$(document).on('click', '.remove3-b', function() {
    $(this).parents('.layer-3-b').remove();
});

$(document).on('click', '.remove4-b', function() {
    $(this).parents('.layer-4-b').remove();
});

$(document).on('click', '.remove5', function() {
    $(this).parents('.layer-5').remove();
});

$(document).on('click', '.remove6', function() {
    $(this).parents('.layer-6').remove();
});










