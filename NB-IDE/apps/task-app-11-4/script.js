$('.layer-a').sortable();



// layer-a layer-1-a
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
    // layer-1にa＋iクラスを付与する
    var i = 1;

    $('.layer-1-a').each(function(){
        $(this).addClass('a'+i);
        i++;

    });


// layer-b layer-1-b
    var html = `
        <div class="layer-1-b">
        <p class="accordion article-title"></p>
        <ul>

            <!-- (ココに layer-2-b が出力されます) -->

        </ul>
    `;
    // $('.layer-b').append(html);
    $(this).parents('.container').children(".layer-b").append(html);
    $('.layer-b').css('padding','10px 10px');
    $('.layer-b').css('height','auto');


// // 動的にclassをつける


//     console.log($(this).parent().attr('class').split(' '))
    
//     // layer-1のクラスを子layer-2-bに付与する
//     var classVal = ($(this).parent().attr('class'))
//     var className = classVal.split(' ')[2]

//     // var last = className.slice(0)

//     $(this).parents('.container').children(".layer-b").children("ul").children(".layer-2-b").addClass(`.${className}`);

    
//     // layer-2-bにｂ＋iクラスを付与する
//     var i = 1;
    
    

//     $(this).parents('.container').children(".layer-b").children(".layer-2-b").each(function(){

//         // $(this).parents('.container').children(".layer-b").children("ul").children(".layer-2-b").addClass(`.${className}`);

//         $(this).addClass('b'+i);
//         i++;
        
//     });



    var i = 1;

    $(this).parents('.container').children(".layer-b").children(".layer-1-b").each(function(){

        // $(this).parents('.container').children(".layer-b").children("ul").children(".layer-2-b").addClass(`.${className}`);

        $(this).addClass('a'+i);
        i++;
        
    });

    // $(this).parents('.container').children(".layer-b").children(".layer-1-b").children("ul").append(html);

});







// layer-a layer-2-a
$(document).on("click",".add-btn-layer-2", function () {
    var html = `
        <div class="layer-2-a">
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



// layer-b layer-2-b
    var html = `
        <div class="layer-2-b">
        
        <h2>
            <!-- 入力連動(ココに出力されます) -->
        </h2>
        <p class="accordion article-title"></p>
        <ul>

            <!-- (ココに layer-3-b が出力されます) -->

        </ul>
    `;
    // $('.layer-b').append(html);
    


    // var i = 1;

    // $(this).parents('.container').children(".layer-b").children(".layer-1-b").each(function(){

    //     // $(this).parents('.container').children(".layer-b").children("ul").children(".layer-2-b").addClass(`.${className}`);

    //     $(this).addClass('a'+i);
    //     i++;
        
    // });

    // $(this).parents('.container').children(".layer-b").children(".layer-1-b").children("ul").append(html);
    // // ↑ここに動的に変更されるClassレイヤにappend

    $('.layer-b').css('padding','10px 10px');
    $('.layer-b').css('height','auto');





// 動的にclassをつける


    console.log($(this).parent().attr('class').split(' '))
    
    // layer-1のクラスを子layer-2-bに付与する
    var classVal = ($(this).parent().attr('class'))
    var className = classVal.split(' ')[2]

    // var last = className.slice(0)

    $(this).parents('.container').children(".layer-b").children("ul").children(".layer-2-b").addClass(`.${className}`);

    
    // layer-2-bにｂ＋iクラスを付与する
    var i = 1;
    
    $(this).parents('.container').children(".layer-b").children(".layer-2-b").each(function(){

        // $(this).parents('.container').children(".layer-b").children("ul").children(".layer-2-b").addClass(`.${className}`);

        $(this).addClass('b'+i);
        i++;
        
    });
    

    $(this).parents('.container').children(".layer-b").children(".layer-1-b").children("ul").children(".a1").append(html);

    

    // if($(this).parents('.container').children(".layer-b").children(".layer-1-b").children("ul").hasClass('')){
    //     $(this).css('color','red');
    // }


    
});









// // layer-3-a
// $(document).on("click",".add-btn-layer-3", function () {
//     var html = `
//         <div class="layer-3-a">
//             <input class="check-1" type="checkbox">
            
//             <!-- 入力連動 -->
//             <input type="text" class="text text-3" placeholder="layer-3=mission-2">
            
//             <input class="add-btn-layer-4" type="button" value="add-btn-layer-4" >
//             <button class="remove3">-</button>
//             <p class="accordion article-title"></p>
//             <ul>

//             </ul>


//         </div>
//     <!-- ソート機能 -->
//         <script>
        
//             $('.layer-3 ul').sortable({
//                 placeholder: "ui-state-highlight"
//             });
           
        
//         </script>
//     `;
//     $(this).parent('.layer-2-a').children("ul").append(html);

    
//     console.log($(this).parent().attr('class').split(' '))

//     // 動的にclassをつける
//     // layer-2のクラスを子layer-3に付与する
//     var classname = ($(this).parent().attr('class'))
//     var last = classname.slice(0)
//     $(this).parent('.layer-2-a').children("ul").children(".layer-3-a").addClass(`.${last}`);

//     // layer-3にc＋iクラスを付与する
//     var i = 1;

//     $(this).parent('.layer-2-a').children("ul").children(".layer-3-a").each(function(){
//         $(this).addClass('c'+i);
//         i++;

//     });



// //layer-3-b
//     var html = `
//         <div class="layer-3-b">
//         <h2>
//             <!-- 入力連動(ココに出力されます) -->
//         </h2>
//         <button class="remove3">-</button>
//         <p class="accordion article-title"></p>
//         <ul>

//         </ul>
//         <script>$('.layer-3-b').sortable();</script>
//         <script>$('.layer-3-b ul').sortable();</script>
//     `;
//     // $('.layer-b').append(html);
//     $(this).parents('.container').children(".layer-b").find(".layer-2-b").children("ul").append(html);

//     $('.layer-b').css('padding','10px 10px');
//     $('.layer-b').css('height','auto');




// // 動的にclassをつける
//     // layer-2のクラスを子layer-3-bに付与する
//     var classname = ($(this).parent(".layer-2").attr('class'))
//     // console.log($(this).parent().attr('class'))
//     // var last = classname.slice(0)

//     $(this).parents('.container').children(".a-1").find(".layer-b").children(".layer-3-b").addClass(`.${classname}`);

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

// });












// // layer-3
// $(document).on("click",".add-btn-layer-3", function () {
//     var html = `
//         <div class="layer-3">
//             <input class="check-1" type="checkbox">
            
//             <!-- 入力連動 -->
//             <input type="text" class="text text-3" placeholder="layer-3=mission-2">
            
//             <input class="add-btn-layer-4" type="button" value="add-btn-layer-4" >
//             <button class="remove3">-</button>
//             <p class="accordion article-title"></p>
//             <ul>

//             </ul>


//         </div>
//     <!-- ソート機能 -->
//         <script>
        
//             $('.layer-3 ul').sortable({
//                 placeholder: "ui-state-highlight"
//             });
           
        
//         </script>
//     `;
//     $(this).parent('.layer-2').children("ul").append(html);

    
//     console.log($(this).parent().attr('class').split(' '))


// // layer-3に動的にclassをつける
//     var i = 1;

//     $('.layer-3').each(function(){
//         $(this).addClass('a'+i);
//         i++;

//     });

// // layer-3-b
//     var html = `
//             <div class="layer-3-b">
//             <h2>
//                 <!-- 入力連動(ココに出力されます) -->
//             </h2>
//             <button class="remove3">-</button>
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


// // 動的にclassをつける
//     var i = 1;

//     $('.layer-3-b').each(function(){
//         $(this).addClass('b'+i);
//         i++;

//     });


// // 入力連動
//     $(".layer-3 .text-3").each(function(){
    
//         $(this).bind('keyup', hoge(this));
        
//     });
        
//     function hoge(elm){
//         var v, old = elm.value;
//         return function(){
//             if(old != (v=elm.value)){
//                 old = v;
//                 str = $(this).val();
                
//                 var classname = ($(this).parents('.layer-3').attr('class').split(' '))
//                 var last = classname.slice(-1)[0]

//                 var bclassname = "b"+last.slice(1)
//                 console.log("b"+last.slice(1))
//                 $(`.${bclassname}`).find('h2').text(str);
//                 // $(".layer-3-b div").text(str);
//             }
//         }
//     }
