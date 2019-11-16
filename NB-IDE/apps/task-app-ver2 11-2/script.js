$('.layer-a').sortable();

// add-btn
$(document).on("click",".add-btn-layer-1", function () {
    var html = `
        <div class="layer-1">
            <input type="text" class="text-1" placeholder="layer-1=title">
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



// layer-3
$(document).on("click",".add-btn-layer-3", function () {
    var html = `
        <div class="layer-3">
            <input class="check-1" type="checkbox">
            
            <!-- 入力連動 -->
            <input type="text" class="text text-3" placeholder="layer-3=mission-2">
            
            <input class="add-btn-layer-4" type="button" value="add-btn-layer-4" >
            <button class="remove3">-</button>
            <p class="accordion article-title"></p>
            <ul>

            </ul>


        </div>
    <!-- ソート機能 -->
        <script>
        
            $('.layer-3 ul').sortable({
                placeholder: "ui-state-highlight"
            });
           
        
        </script>
    `;
    $(this).parent('.layer-2').children("ul").append(html);

    
    console.log($(this).parent().attr('class').split(' '))


// layer-3に動的にclassをつける
    var i = 1;

    $('.layer-3').each(function(){
        $(this).addClass('a'+i);
        i++;

    });

    var html = `
            <div class="layer-3-b">
            <h2>
                <!-- 入力連動(ココに出力されます) -->
            </h2>
            <button class="remove3">-</button>
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


// 動的にclassをつける
    var i = 1;

    $('.layer-3-b').each(function(){
        $(this).addClass('b'+i);
        i++;

    });


// 入力連動
    $(".layer-3 .text-3").each(function(){
    
        $(this).bind('keyup', hoge(this));
        
    });
        
    function hoge(elm){
        var v, old = elm.value;
        return function(){
            if(old != (v=elm.value)){
                old = v;
                str = $(this).val();
                
                var classname = ($(this).parents('.layer-3').attr('class').split(' '))
                var last = classname.slice(-1)[0]

                var bclassname = "b"+last.slice(1)
                console.log("b"+last.slice(1))
                $(`.${bclassname}`).find('h2').text(str);
                // $(".layer-3-b div").text(str);
            }
        }
    }

});






// layer-4
$(document).on("click",".add-btn-layer-4", function () {
    var html = `
        <div class="layer-4">
            <input class="check" type="checkbox" name="check">

            <!-- 入力連動 -->
            <input type="text" class="text text-4" placeholder="layer-4=target">

            <tr>
                <td><button class="remove4">-</button></td>
            </tr>
        </div>
    `;
    $(this).parent('.layer-3').find("ul").append(html);
    


// 動的にclassをつける
var i = 1;

$('.layer-4').each(function(){
    $(this).addClass('c'+i);
    i++;

});



    var html = `
        <div class="layer-4-b">
            <h3>
                <!-- 入力連動(ココに出力されます) -->
            </h3>
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


    // console.log($(this).parents('.container').children('.a-1').children('.layer-b').children('.layer-3-b').children('ul').append(html))

    var classname = ($(this).parents('.layer-3').attr('class').split(' '))
    var last = classname.slice(-1)[0]
    var bclassname = "b"+last.slice(1)
    
    // console.log($(`.${bclassname}`).append(html))

    $(`.${bclassname}`).append(html);




// 動的にclassをつける
    var i = 1;

    $('.layer-4-b').each(function(){
        $(this).addClass('c'+i);
        i++;

    });

    var i = 1;

    $('.layer-4-b').each(function(){
        $(this).addClass('d'+i);
        i++;

    });

// 入力連動
$(".layer-3 .text-4").each(function(){
    
    $(this).bind('keyup', hoge(this));
    
});

    function hoge(elm){
        var v, old = elm.value;
        return function(){
            if(old != (v=elm.value)){
                old = v;
                str = $(this).val();
                
                var classname = ($(this).parents('.layer-4').attr('class').split(' '))
                var last = classname.slice(-1)[0]


                var dclassname = "d"+last.slice(1)

                console.log("d"+last.slice(1))
                $(`.${dclassname}`).find('h3').text(str);
            }
        }
    }




});

$(document).on("click",".add-btn-3", function () {
    var html = `
        <div class="layer-5">
            <input class="check-1" type="checkbox">
            <input type="text" class="text-5" placeholder="layer-5=function">
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
            <textarea class="text-6"
                placeholder="layer-6=element"
                onblur="coloeSet(this)"
                onfocus="colorReset(this)"
                oninput="textAreaHeightSet(this)"
                onchange="textAreaHeightSet(this)">
            
            </textarea>
            <tr>
                <td><button class="remove6">-</button></td>
            </tr>
        </div>
    `;
    $(this).parent('.layer-5').find("ul").append(html);
    
});


function coloeSet(argObj){
    // ==============================================
    //	入力済み時の背景色設定
    // ==============================================
       if(argObj.value==""){
           argObj.style.backgroundColor = "";
       }else{
           argObj.style.backgroundColor = "rgba(30, 107, 185, 0.20)";
       }
   }
   
   function colorReset(argObj){
    // ==============================================
    //	フォーカス時の背景色リセット
    // ==============================================
       argObj.style.backgroundColor = "";
   }
   
   function textAreaHeightSet(argObj){
    // ==============================================
    //	フォーカス時の背景色リセット
    // ==============================================
     // 一旦テキストエリアを小さくしてスクロールバー（縦の長さを取得）
     argObj.style.height = "10px";
     var wSclollHeight = parseInt(argObj.scrollHeight);
     // 1行の長さを取得する
     var wLineH = parseInt(argObj.style.lineHeight.replace(/px/, ''));
     // 最低2行の表示エリアにする
     if(wSclollHeight < (wLineH * 2)){wSclollHeight=(wLineH * 2);}
     // テキストエリアの高さを設定する
     argObj.style.height = wSclollHeight + "px";
   }









// remove機能
$(document).on('click', '.remove1', function() {
    $(this).parents('.layer-1').remove();
});

$(document).on('click', '.remove2', function() {
    $(this).parents('.layer-2').remove();
});

$(document).on('click', '.remove3', function() {
    console.log($(this).parent().attr('class').split(' '))
    
    var classname = ($(this).parent().attr('class').split(' '))
    var last = classname.slice(-1)[0]
    $(`.${last}`).remove();
});

$(document).on('click', '.remove4', function() {
    console.log($(this).parent().attr('class').split(' '))
    
    var classname = ($(this).parent().attr('class').split(' '))
    var last = classname.slice(-1)[0]
    $(`.${last}`).remove();
});


// アコーディオン機能
//.accordionがクリックされたら
$(document).on('click', '.accordion', function() {
 
    // $(this).next().slideToggle(200);
    console.log($(this).next().slideToggle(200))
    // $(this).next('layer-4-b').slideToggle(200);
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
// $(document).on("click",".add-btn-1", function () {
//     var html = `
//             <div class="layer-3-b">
//             <div>

//             </div>
//             <input type="text" class="text" placeholder="layer-3=mission-2">
//             <input class="add-btn-2" type="button" value="add-btn-2" >
//             <button class="remove3-b">-</button>
//             <p class="accordion article-title"></p>
//             <ul>

//             </ul>
//         </div>
//         <script>$('.layer-3-b').sortable();</script>
//         <script>$('.layer-3-b ul').sortable();</script>
//     `;
//     $('.layer-b').append(html);
//     $('.layer-b').css('padding','10px 10px');
//     $('.layer-b').css('height','auto');
    
// });


// $(document).on("click",".add-btn-2", function () {
//     var html = `
//         <div class="layer-4-b">
//             <input class="check-1" type="checkbox">
//             <input type="text" class="text" placeholder="layer-4=target">
//             <input class="add-btn-3" type="button" value="add-btn-3" >
//             <button class="remove4-b">-</button>
//             <p class="accordion article-title"></p>
//             <ul>

//             </ul>
//         </div>
//         <script>
//             $('.layer-4-b ul').sortable();
//         </script>
//     `;
//     $(this).parent('.layer-3-b').children("ul").append(html);
// });





// remove機能


$(document).on('click', '.remove4-b', function() {
    $(this).parents('.layer-4-b').remove();
});

$(document).on('click', '.remove5', function() {
    $(this).parents('.layer-5').remove();
});

$(document).on('click', '.remove6', function() {
    $(this).parents('.layer-6').remove();
});





// $(document).on('click', '.add-layer-c', function() {

//         var i = 1;

//     $('li').each(function(){
//         $(this).addClass('style-li'+i);
//         i++;
//     });

//     $(this).parent('.layer-c').append(html);

// });


// $(document).on('click', '.add-btn-c', function() {

//     var html = `
//             <div class="layer-3-b">
//             <div>
//                 <!-- 入力連動(ココに入力されます) -->
//             </div>
//             <input type="text" class="text" placeholder="layer-3=mission-2">
//             <input class="add-btn-2" type="button" value="add-btn-2" >
//             <button class="remove3">-</button>
//             <p class="accordion article-title"></p>
//             <ul>

//             </ul>
            
//         </div>
//         <script>$('.layer-3-b').sortable();</script>
//         <script>$('.layer-3-b ul').sortable();</script>
//     `;
//     $(this).parent('.layer-c').append(html);

//     var i = 1;

//     $('div').each(function(){
//         $(this).addClass('1'+i);
//         i++;

//     });

// });