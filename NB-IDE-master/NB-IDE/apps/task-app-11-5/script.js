// accordion機能
// header
    $('.btn-header-a').click(function() {
        $('.header-b').slideToggle(500);
        // $('.header-b').fadeToggle(3000);
    });
    $('.btn-header-b').click(function() {
        $('.header-a').slideToggle(500);
        // $('.header-b').fadeToggle(3000);
    });

// task-app
    $('.accordion').each(function() {
        $(this).prepend('<i class="fas fa-chevron-down"></i> ');
    });


    $('.accordion').on('click', function () {
        let menu = $(this).next('ul');

        let icon = $(this).children('.fas');

        if(menu.is(':hidden')) {
            icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else {
            icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }

        menu.stop().slideToggle();
    });

    $('.accordion').trigger('click');






    
// layer-1-a
$('.layer-a').sortable();

$(document).on("click",".add-btn-layer-1", function () {
    var html = `
        <div class="layer-1-a">
            <input type="text" class="text-1" placeholder="layer-1=title">
            <input class="add-btn-layer-2" type="button" value="add-btn-layer-2" >
            <button class="remove1">-</button>
            <p class="accordion article-title"></p>
            <ul>

            </ul>
        </div>
        <script>$('.layer-1-a').sortable();</script>
        <script>$('.layer-1-a ul').sortable();</script>
    `;
    $('.layer-a').append(html);
    $('.layer-a').css('padding','10px 10px');
    $('.layer-a').css('height','auto');
    
    
    // 動的にclassをつける
    // layer-aにa＋iクラスを付与する
    var i = 1;

    $('.layer-1-a').each(function(){
        $(this).addClass('a'+i);
        i++;

    });


// layer-1-b
    var html = `
        <div class="layer-1-b">
        <p class="accordion article-title"></p>
            <!-- (ココに layer-2-b が出力されます) -->
        <ul class="layer-2-B">

        </ul>
          
    `;
    $('.layer-b').append(html);
    // $(this).parents('.task-container').children(".layer-b").append(html);
    $('.layer-b').css('padding','10px 10px');
    $('.layer-b').css('height','auto');

    // 動的にclassをつける
    // layer-1-bにe＋iクラスを付与する
    var i = 1;

    $('.layer-1-b').each(function(){
        $(this).addClass('e'+i);
        i++;

    });

});




// layer-2-a
$(document).on("click",".add-btn-layer-2", function () {
    var html = `
        <div class="layer-2-a">
        layer-2-a
            <input class="check-1" type="checkbox">
            <input type="text" class="text-2" placeholder="layer-2=mission-1">
            <input class="add-btn-layer-3" type="button" value="add-btn-layer-3" >
            <button class="remove2">-</button>
            <p class="accordion article-title"></p>
            <ul>

                <!-- (ココに layer-3 が出力されます) -->

            </ul>
        </div>
        <script>
            $('.layer-2 ul').sortable();
        </script>
    `;
    $(this).parent('.layer-1-a').children("ul").append(html);


    // 動的にclassをつける

    // layer-1のクラスを子layer-2に付与する
    var classname = ($(this).parent().attr('class'))
    var last = classname.slice(0)
    $(this).parent('.layer-1-a').children("ul").children(".layer-2-a").addClass(`.${last}`);

    // layer-2にｂ＋iクラスを付与する
    var i = 1;

    $(this).parent('.layer-1-a').children("ul").children(".layer-2-a").each(function(){
        $(this).addClass('b'+i);
        i++;

    });



// layer-2-b
    var html = `
        <div class="layer-2-b">
        layer-2-b
        
        <h2>
            <!-- 入力連動(ココに出力されます) -->
        </h2>
        <p class="accordion article-title"></p>
    `;

    // --------------------超重要----------------------------------
    // 動的なclass e に合わせて出力　append
    // 動的な a1 を取得しaを消してeに変更
    // layer1-b子要素ulのclass .layer-2-Bに .layer-2-bを出力 

    var classVal = ($(this).parent().attr('class'))
    // console.log(classVal)

    $(this).parent().attr('class').split(' ')
    
    var aclassName = classVal.split(' ')[2]
    // console.log(aclassName)

    var eclassname = "e"+aclassName.slice(1)
    // console.log("e"+aclassName.slice(1))
    $(`.${eclassname}`).children(".layer-2-B").append(html);
    // ------------------------------------------------------

    // .layer-2-bに動的にf+iを付与
    // ココから
    $(".layer-1-b").attr('class').split(' ')[0]
    console.log($(".layer-1-b").attr('class').split(' ')[0])

    var layer1b = $(".layer-1-b").attr('class').split(' ')[0]

    var className = layer1b + eclassname
    console.log(className)
    
    $(`.${className}`).append(html);
    
    $('.layer-b').css('padding','10px 10px');
    $('.layer-b').css('height','auto');



    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する
    
    var i = 1;
    
    $(`.${eclassname}`).children(".layer-2-b").each(function(){
        $(this).addClass(`${eclassname}`);
        $(this).addClass('f'+i);
        i++;

    });
    
});









// layer-3-a
$(document).on("click",".add-btn-layer-3", function () {
    var html = `
        <div class="layer-3-a">
        layer-3-a
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

    $(this).parent('.layer-2-a').children("ul").append(html);

    // 動的にclassをつける
    // layer-2のクラスを子layer-3に付与する
    var classname = ($(this).parent().attr('class'))
    var last = classname.slice(0)
    $(this).parent('.layer-2-a').children("ul").children(".layer-3-a").addClass(`.${last}`);

    // layer-3にc＋iクラスを付与する
    var i = 1;

    $(this).parent('.layer-2-a').children("ul").children(".layer-3-a").each(function(){
        $(this).addClass('c'+i);
        i++;

    });



// //layer-3-b
//     var html = `
//         <div class="layer-3-b">
//         layer-3-b
//         <h2>
//             <!-- 入力連動(ココに出力されます) -->
//         </h2>
//         <button class="remove3">-</button>
//         <p class="accordion article-title"></p>

//         <script>$('.layer-3-b').sortable();</script>
//         <script>$('.layer-3-b ul').sortable();</script>
//     `;
//     // $('.layer-b').append(html);

//     // --------------------超重要----------------------------------
//     // 動的なclass e に合わせて出力　append
//     // 動的な a1 を取得しaを消してeに変更
//     // layer-3-bにf＋iクラスを付与する
    
//     var classVal = ($(".layer-2-b").attr('class'))
//     // console.log(classVal)

//     $(this).parent().attr('class').split(' ')
    
//     var aclassName = classVal.split(' ')[2]
//     // console.log(aclassName)

//     var fclassname = "f"+aclassName.slice(1)
//     // console.log("f"+aclassName.slice(1))


//     $(`.${fclassname}`).append(html);
//     console.log(fclassname)
//     // ------------------------------------------------------
//     $('.layer-b').css('padding','10px 10px');
//     $('.layer-b').css('height','auto');



//     // 動的なclass e に合わせてclassを付与
//     // layer-2-bにf＋iクラスを付与する
    
//     var i = 1;
    
//     $(`.${eclassname}`).children(".layer-3-b").each(function(){
//         $(this).addClass(`${eclassname}`);
//         $(this).addClass('f'+i);
//         i++;

//     });
    
});






//     // --------------------超重要----------------------------------
//     // layer-2-aの動的クラスを子layer-3-aに付与する
//     var classVal = ($(this).parent().attr('class'))
//     $(this).parent().attr('class').split(' ')

//     // 動的なa1 b1を取得
//     var aclassName = classVal.split(' ')[3]
//     // console.log(aclassName)

//     var bclassName = classVal.split(' ')[4]
//     // console.log(bclassName)

//     var className = aclassName + bclassName
//     console.log(className)




//     $(`.${className}`).append(html);
//     // $(this).parents('.task-container').children(".layer-b").find(".layer-2-b").children("ul").append(html);

//     $('.layer-b').css('padding','10px 10px');
//     $('.layer-b').css('height','auto');
//     // ------------------------------------------------------




//     // 動的にclassをつける
//     // layer-2のクラスを子layer-3-bに付与する
//     var classname = ($(this).parent(".layer-2").attr('class'))
//     // console.log($(this).parent().attr('class'))
//     // var last = classname.slice(0)

//     $(this).parents('.task-container').children(".a-1").find(".layer-b").children(".layer-3-b").addClass(`.${classname}`);

//     // layer-3-bにc＋iクラスを付与する
//     // var i = 1;

//     // $(this).parents('.container').children(".a-1").find(".layer-3-b").each(function(){
//     //     $(this).addClass('c'+i);
//     //     i++;
//     // });

    
//     // 入力連動
//     $(".layer-3-a .text-3").each(function(){
    
//         $(this).bind('keyup', hoge(this));
        
//     });
        
//     function hoge(elm){
//         var v, old = elm.value;
//         return function(){
//             if(old != (v=elm.value)){
//                 old = v;
//                 str = $(this).val();
                
//                 var classname = ($(this).parents('.layer-3-a').attr('class').split(' '))
//                 var last = classname.slice(-1)[0]

//                 var bclassname = "b"+last.slice(1)
//                 console.log("b"+last.slice(1))
//                 $(`.${bclassname}`).find('h2').text(str);
//                 // $(".layer-3-b div").text(str);
//             }
//         }
//     }

// });






// layer-4-a
$(document).on("click",".add-btn-layer-4", function () {
    var html = `
        <div class="layer-4-a">
            <input class="check" type="checkbox" name="check">

            <!-- 入力連動 -->
            <input type="text" class="text text-4" placeholder="layer-4=target">

            <tr>
                <td><button class="remove4">-</button></td>
            </tr>
        </div>
    `;
    $(this).parent('.layer-3-a').children("ul").append(html);

    
    

    // 動的にclassをつける
    // layer-3のクラスを子layer-4に付与する
    var classname = ($(this).parent().attr('class'))
    var last = classname.slice(0)
    $(this).parent('.layer-3-a').children("ul").children(".layer-4-a").addClass(`.${last}`);

    // layer-4にd＋iクラスを付与する
    var i = 1;

    $(this).parent('.layer-3-a').children("ul").children(".layer-4-a").each(function(){
        $(this).addClass('d'+i);
        i++;

    });



// //layer-4-b
//     var html = `
//     <div class="layer-4-b">
//         <h3>
//             <!-- 入力連動(ココに出力されます) -->
//         </h3>
//         <input class="add-btn-3" type="button" value="add-btn-3" >
//         <button class="remove4-b">-</button>
//         <p class="accordion article-title"></p>
//         <ul>

//         </ul>
//     </div>
//     <script>
//         $('.layer-4-b ul').sortable();
        
//     </script>
//     `;


// // --------------------超重要----------------------------------
// // layer-3-aの動的クラスを子layer-4-bに付与する
//     var classVal = ($(this).parent().attr('class'))
//     $(this).parent().attr('class').split(' ')
    
//     // 動的なa1 b1を取得
//     var aclassName = classVal.split(' ')[3]
//     // console.log(aclassName)

//     var bclassName = classVal.split(' ')[4]
//     // console.log(bclassName)
    
//     var className = aclassName + bclassName
//     console.log(className)
    
    


//     $(`.${className}`).append(html);
//     // $(this).parents('.task-container').children(".layer-b").find(".layer-2-b").children("ul").append(html);

//     $('.layer-b').css('padding','10px 10px');
//     $('.layer-b').css('height','auto');
// // ------------------------------------------------------


// // 動的にclassをつける
//     // layer-2のクラスを子layer-3-bに付与する
//     var classname = ($(this).parent(".layer-2").attr('class'))
//     // console.log($(this).parent().attr('class'))
//     // var last = classname.slice(0)

//     $(this).parents('.task-container').children(".a-1").find(".layer-b").children(".layer-3-b").addClass(`.${classname}`);

//     // layer-3-bにc＋iクラスを付与する
//     // var i = 1;

//     // $(this).parents('.container').children(".a-1").find(".layer-3-b").each(function(){
//     //     $(this).addClass('c'+i);
//     //     i++;
//     // });

    
// // 入力連動
//     $(".layer-3-a .text-3").each(function(){
    
//         $(this).bind('keyup', hoge(this));
        
//     });
        
//     function hoge(elm){
//         var v, old = elm.value;
//         return function(){
//             if(old != (v=elm.value)){
//                 old = v;
//                 str = $(this).val();
                
//                 var classname = ($(this).parents('.layer-3-a').attr('class').split(' '))
//                 var last = classname.slice(-1)[0]

//                 var bclassname = "b"+last.slice(1)
//                 console.log("b"+last.slice(1))
//                 $(`.${bclassname}`).find('h2').text(str);
//                 // $(".layer-3-b div").text(str);
//             }
//         }
//     }

});




