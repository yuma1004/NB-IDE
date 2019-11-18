// accordion機能
// header
    // 縦方向に開く
    $('.btn-header-a').click(function() {
        $('.header-b').slideToggle(400);
        // $('.header-b').fadeToggle(3000);
    });
    $('.btn-header-b').click(function() {
        $('.header-a').slideToggle(400);
        // $('.header-b').fadeToggle(3000);
    });
    $(document).on("click",".memo-btn", function () {
        console.log($(this).parent().attr('class'))
        $(this).parent().find('.textarea-6').slideToggle(400);
    });
    // 横方向に開く
    $('.comment-btn').click( function() {
        $('comment').animate({ width: 'toggle' },'slow');
    } );

    // アコーディオン機能
//.accordionがクリックされたら
$(document).on('click', '.accordion', function() {

    console.log($(this).next().slideToggle(400))

    $(this).toggleClass('open');
});


// add-btn
// layer-a
$(document).on("click",".add-btn", function () {
    var html = `
        <div data-deep=1>
            <input type="text" class="mytextbox-1" placeholder="layer-1=title">
            <input class="add-btn-1" type="button" value="+" >
            <button class="remove1">-</button>
            <p class="accordion article-title"></p>
        </div>
        <ul class="layer-1-a"></ul>
    `;
    $('.layer-A').show();
    $('.layer-A').children("ul").append(html);
    $('.layer-A').css('padding','10px 10px');
    $('.layer-A').css('height','700px');
    $('.layer-A').css('overflow','scroll');

    // 動的にclassをつける
    // layer-aにa＋iクラスを付与する
    var i = 1;

    $('.layer-A').children("ul").children('div').each(function(){
        $(this).addClass('a'+i);
        i++;
    });

// layer-b
    var html = `
        <div data-deep=1></div>
        <ul class="layer-1-b"></ul>
    `;
    $('.layer-B').show();
    $('.layer-B').children("ul").append(html);
    $('.layer-B').css('padding','10px 10px');
    $('.layer-B').css('height','700px');
    $('.layer-B').css('overflow','scroll');

    // 動的にclassをつける
    // layer-1-bにe＋iクラスを付与する
    var i = 1;

    $('.layer-B').children("ul").children("div").each(function(){
        $(this).addClass('e'+i);
        i++;
    });

});


// Layer-A側
$(document).on("click",".add-btn-1", function () {

    var deep = $(this).parent().data("deep")

    if(deep === 1 || deep === 2){
        var html = `
            <div data-deep=${deep + 1}>
                <input class="check-1" type="checkbox">
                <input type="text" class="text" placeholder="layer-2=mission-1">
                <input class="add-btn-1" type="button" value="+" >
                <button class="remove${deep + 1}">-</button>
                <p class="accordion article-title"></p>
            </div>
            <ul class="layer-${deep + 1}-a"></ul>
        `;

    }else if(deep === 3){
        var html = `
            <div data-deep=${deep + 1}>
                <input class="check" type="checkbox" name="check">
                <!-- 入力連動 -->
                <input type="text" class="text text-4" placeholder="layer-4=target">
                <button class="remove${deep + 1}">-</button>
            </div>
        `;
    }
    $(this).parent().next("ul").append(html);
    // addclassNames($(this));


// 関数
      var i = 1;

      $(this).parent().next("ul").children("div").each(function(){

        // 1.親クラスを取得
        var classNames = $(this).parent().prev().attr("class")
        // console.log(classNames)

        // 2.アルファベットのみ取得
        var className = classNames.split(' ').slice(-1)[0]
        className = className.slice(0)[0]
        // console.log(className)

        // 3.取得したアルファベットを１つ下げる
        var nextClassName = className.charCodeAt(0) + 1
        nextClassName = String.fromCodePoint(nextClassName)
        // console.log(nextClassName)

        $(this).addClass(`${nextClassName}`+i);
        i++;

    });
});




// Layer-B側
$(document).on("click",".add-btn-1", function () {
    // console.log($(this).parents(".task-container").find(".layer-B").children("ul").children(".layer-1-b").attr("class"))
//
    var deep = $(this).parent().data("deep")

    // 関数
          var i = 1
          // $(this)からe+iのクラスを取得

          // 1.親クラスを取得
          var classNames = $(this).parent().attr('class')
          // console.log(classNames)

          // 2.a.アルファベットのみ取得
          var className = classNames.split(' ').slice(-1)[0]
          className = className.slice(0)[0]
          // console.log(className)

          // 2.b.数字のみ取得
          // console.log(classNames)
          var classNum = classNames.slice(1)
          console.log(classNum)

          // 3.a.取得したアルファベットを１つ下げる　(出力先指定用)
          var nextClassName = className.charCodeAt(0) + 4
          nextClassName = String.fromCodePoint(nextClassName)
          // console.log(nextClassName)

          // 3.c.取得したアルファベットを2つ下げる　（クラスに追加用）
          var NextClassName = className.charCodeAt(0) + 5
          NextClassName = String.fromCodePoint(NextClassName)
          // console.log(NextClassName)

          // 3.b.nextClassName + classNum
          var nextClassNames = nextClassName + classNum
          // console.log(nextClassNames)

          // 4.c.NextClassName + classNum
          // classVal = classNum + i
          // i++
          // console.log(classNum)
          // var classVal = classNum

          var NextClassNames = NextClassName + i
          i++;


          console.log(`${NextClassNames}`)
          // console.log($(this).parents(".task-container").find(`${NextClassNames}`).attr("class"))

          // $(`${NextClassNames}`).each(function(){
          //     (`${NextClassNames}`).addClass(`${NextClassNames}` + i)
          //     i++;
          // });

          // console.log(NextClassNames)
          // (`.${nextClassNames}`)これをthisとして使える？？？
          console.log((`.${nextClassNames}`))
          var parentClassNames = $(`.${nextClassNames}`).parent("ul").prev().attr('class')
          $(`.${parentClassNames}`).find(`.${nextClassNames}`).next("ul").append(html);



    if(deep === 1){
        var html = `
            <div class="${NextClassNames}" data-deep=${deep + 1}>
                <input class="check-1" type="checkbox">
                <input type="text" class="text" placeholder="layer-2=mission-1">
                <input class="add-btn-1" type="button" value="+" >
                <button class="remove${deep + 1}">-</button>
                <p class="accordion article-title"></p>
            </div>
            <ul class="layer-${deep + 1}-b"></ul>
        `;
        console.log(`${nextClassNames}`)
        console.log($(`.${nextClassNames}`).next("ul").attr('class'))
        $(`.${nextClassNames}`).next("ul").append(html);


        // console.log($(this).parents(".task-container").attr("class"))
        // console.log($(this).parents(".task-container").find(`.${nextClassNames}`).attr('class'))
        // $(this).parents(".task-container").find(`.${nextClassNames}`).next("ul").append(html);
        // $(this).parents(".task-container").find(".layer-B").children("ul").children(".layer-1-b").append(html);
    }else if(deep === 2){
        var html = `
            <div class="${NextClassNames}" data-deep=${deep + 1}>
                <input class="check-1" type="checkbox">
                <input type="text" class="text" placeholder="layer-2=mission-1">
                <input class="add-btn-1" type="button" value="+" >
                <button class="remove${deep + 1}">-</button>
                <p class="accordion article-title"></p>
            </div>
            <ul class="layer-${deep + 1}-b"></ul>
        `;
        // f1
        console.log($(`.${nextClassNames}`).attr('class'))
        // e1
        console.log($(`.${parentClassNames}`).attr('class'))

        console.log($(`.${parentClassNames}`).next("ul").find(`.${nextClassNames}`).attr('class'))
        $(`.${parentClassNames}`).next("ul").children(`.${nextClassNames}`).next("ul").append(html);

        // $(this).parents(".task-container").find(".layer-1-b").children("ul").append(html);
        // $(this).parents(".task-container").find(".layer-1-b").children(".layer-2-b").append(html);

    }else if(deep === 3){
        var html = `
            <div class="${NextClassNames}" data-deep=${deep + 1}>
                <input class="check" type="checkbox" name="check">
                <!-- 入力連動 -->
                <input type="text" class="text text-4" placeholder="layer-4=target">
                <button class="remove${deep + 1}">-</button>
            </div>
        `;
        // $(this).parents(".task-container").find(".layer-2-b").children("ul").append(html);
    }
    // console.log(`${nextClassNames}`)
    // console.log($(`.${nextClassNames}`).next("ul").attr('class'))
    // $(`.${nextClassNames}`).next("ul").append(html);





        //
        // $(`.${nextClassNames}`).next("ul").addClass(`${nextClassNames}`);
        // $(`.${nextClassNames}`).next("ul").append(html);

        // // 3.aをeに変える
        // var eclassName = "e"+aclassName.slice(1)
        // // console.log("e"+aclassName.slice(1))
        // // console.log(eclassName)
        //

        //
        // // 3.アルファベットのみ取得
        // var aclassName = classNames.split(' ').slice(-1)[0]
        // className = className.slice(0)[0]
        // // console.log(aclassName)



});



//
// // layer-2-a
// $(document).on("click",".add-btn-layer-2", function () {
//     var html = `
//         <div class="layer-2-a">
//             <div>
//                 <input class="check-1" type="checkbox">
//                 <input type="text" class="text text-2" placeholder="layer-2=mission-1">
//                 <input class="add-btn-layer-3" type="button" value="+" >
//                 <button class="remove2">-</button>
//                 <p class="accordion article-title"></p>
//             </div>
//             <ul></ul>
//         </div>
//     `;
//     $(this).parent().parent().children("ul").append(html);
//
//
//     // 動的にclassをつける
//     // layer-1のクラスを子layer-2に付与する
//     var classVal = ($(this).parent().parent().attr('class'))
//     var aclassName = classVal.split(' ')[1]
//     $(this).parent().parent().children("ul").children().addClass(`${aclassName}`);
//
//     // layer-2にｂ＋iクラスを付与する
//     var i = 1;
//
//     $(this).parent().parent().children("ul").children("div").each(function(){
//         $(this).addClass('b'+i);
//         i++;
//
//     });
//
//
//
// // layer-2-b
//     var html = `
//         <div class="layer-2-b">
//         <h2><!-- 入力連動(ココに出力されます) --></h2>
//         <ul class="layer-3-B"></ul>
//     `;
//
//     // --------------------超重要----------------------------------
//     // 動的なclass e に合わせて出力　append
//     // 動的な a1 を取得しaを消してeに変更
//     // layer1-b子要素ulのclass .layer-2-Bに .layer-2-bを出力
//
//     var classVal = ($(this).parent().parent().attr('class'))
//     console.log(classVal)
//
//     // a1をe1に変える
//     var aclassName = classVal.split(' ')[1]
//     console.log(aclassName)
//
//     var eclassName = "e"+aclassName.slice(1)
//     console.log("e"+aclassName.slice(1))
//
//
//     $(`.${eclassName}`).children(".layer-2-B").append(html);
//     // ------------------------------------------------------
//     $('.layer-b').css('padding','10px 10px');
//
//
//     // 動的なclass e に合わせてclassを付与
//     // layer-2-bにf＋iクラスを付与する
//
//     var i = 1;
//
//     $(`.${eclassName}`).children(".layer-2-B").children(".layer-2-b").each(function(){
//         $(this).addClass(`${eclassName}`);
//         $(this).addClass('f'+i);
//         i++;
//
//     });
//
// });
//
//
// // layer-3-a
// $(document).on("click",".add-btn-layer-3", function () {
//     var html = `
//         <div class="layer-3-a">
//             <div>
//                 <input class="check-1" type="checkbox">
//
//                 <!-- ↓↓↓　入力連動　↓↓↓ -->
//                 <input type="text" class="text text-3" placeholder="layer-3=mission-2">
//                 <!-- ↑↑↑　入力連動　↑↑↑ -->
//
//                 <input class="add-btn-layer-4" type="button" value="+" >
//                 <button class="remove3">-</button>
//                 <p class="accordion article-title"></p>
//             </div>
//             <ul></ul>
//         </div>
//     `;
//
//     $(this).parent().parent().children("ul").append(html);
//
//     // 動的にclassをつける
//     // layer-2のクラスを子layer-3に付与する
//     var classVal = ($(this).parent().parent().attr('class'))
//
//     var aclassName = classVal.split(' ')[1]
//     $(this).parent().parent().children("ul").children().addClass(`${aclassName}`);
//     console.log(aclassName)
//
//     var bclassName = classVal.split(' ')[2]
//     $(this).parent().parent().children("ul").children().addClass(`${bclassName}`);
//     console.log(bclassName)
//
//     // layer-3にc＋iクラスを付与する
//     var i = 1;
//
//     $(this).parent().parent().children("ul").children().each(function(){
//         $(this).addClass('c'+i);
//         i++;
//
//     });
//
//
//     // 入力連動
//     $(".layer-3-a .text-3").each(function(){
//
//         $(this).bind('keyup', hoge(this));
//
//     });
//
//     function hoge(elm){
//         var v, old = elm.value;
//         return function(){
//             if(old != (v=elm.value)){
//                 old = v;
//                 str = $(this).val();
//
//                 console.log($(this).parent().parent().attr('class'))
//                 var classVal = $(this).parent().parent().attr('class')
//                 var aclassName = classVal.split(' ').slice(-3)[0]
//                 var bclassName = classVal.split(' ').slice(-2)[0]
//                 var cclassName = classVal.split(' ').slice(-1)[0]
//
//                 var eclassName = "e"+aclassName.slice(1)
//                 var fclassName = "f"+bclassName.slice(1)
//                 var gclassName = "g"+cclassName.slice(1)
//                 console.log($(`.${eclassName} .${fclassName} .${gclassName}`).find('h2'))
//                 $(`.${eclassName} .${fclassName} .${gclassName}`).find('h2').text(str);
//
//             }
//         }
//     }
//
//
// //layer-3-b
//     var html = `
//         <div class="layer-3-b">
//         <h2><!-- 入力連動(ココに出力されます) --></h2>
//         <p class="accordion article-title"></p>
//         <ul class="layer-4-B"></ul>
//     `;
//
//     // --------------------超重要----------------------------------
//     // layer2-b子要素ulのclass .layer-3-Bに .layer-3-bを出力
//
//
//
//     var classVal = ($(this).parent().parent().attr('class'))
//     console.log(classVal)
//
//     // a1をe1に変える
//     var aclassName = classVal.split(' ')[1]
//     console.log(aclassName)
//
//     var eclassName = "e"+aclassName.slice(1)
//     console.log("e"+aclassName.slice(1))
//
//
//     // b1をf1に変える
//     var bclassName = classVal.split(' ')[2]
//     console.log(bclassName)
//
//     var fclassName = "f"+bclassName.slice(1)
//     console.log("f"+bclassName.slice(1))
//
//     console.log($(`.${eclassName} .${fclassName}`).children(".layer-3-B"))
//     $(`.${eclassName} .${fclassName}`).children(".layer-3-B").append(html);
//     // ------------------------------------------------------
//
//     // .layer-3-bに動的にg+iを付与
//     // 動的なclass e に合わせてclassを付与
//     // layer-2-bにf＋iクラスを付与する
//
//     var i = 1;
//
//     // $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").addClass(`${eclassname}`);
//     // $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").addClass(`${fclassname}`);
//     $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").each(function(){
//         $(this).addClass(`${eclassName}`);
//         $(this).addClass(`${fclassName}`);
//         $(this).addClass('g'+i);
//         i++;
//
//     });
//
// });
//
//
//
// // layer-4-a
// $(document).on("click",".add-btn-layer-4", function () {
//     var html = `
//         <div class="layer-4-a">
//             <div>
//                 <input class="check" type="checkbox" name="check">
//
//                 <!-- 入力連動 -->
//                 <input type="text" class="text text-4" placeholder="layer-4=target">
//
//                 <button class="remove4">-</button>
//
//             </div>
//         </div>
//     `;
//     $(this).parent().parent().children("ul").append(html);
//
//
//     // 動的にclassをつける
//     // layer-3のクラスを子layer-4に付与する
//     var classVal = ($(this).parent().parent().attr('class'))
//
//     var aclassName = classVal.split(' ')[1]
//     $(this).parent().parent().children("ul").children().addClass(`${aclassName}`);
//     console.log(aclassName)
//
//     var bclassName = classVal.split(' ')[2]
//     $(this).parent().parent().children("ul").children().addClass(`${bclassName}`);
//     console.log(bclassName)
//
//     var cclassName = classVal.split(' ')[3]
//     $(this).parent().parent().children("ul").children().addClass(`${cclassName}`);
//     console.log(cclassName)
//
//     // layer-4にd＋iクラスを付与する
//     var i = 1;
//
//     $(this).parent().parent().children("ul").children().each(function(){
//         $(this).addClass('d'+i);
//         i++;
//
//     });
//
//     // 入力連動
//     $(".layer-4-a .text-4").each(function(){
//
//         $(this).bind('keyup', hoge(this));
//
//     });
//
//     function hoge(elm){
//         var v, old = elm.value;
//         return function(){
//             if(old != (v=elm.value)){
//                 old = v;
//                 str = $(this).val();
//
//                 console.log($(this).parent().parent().attr('class'))
//                 var classVal = $(this).parent().parent().attr('class')
//                 var aclassName = classVal.split(' ').slice(-4)[0]
//                 var bclassName = classVal.split(' ').slice(-3)[0]
//                 var cclassName = classVal.split(' ').slice(-2)[0]
//                 var dclassName = classVal.split(' ').slice(-1)[0]
//
//                 console.log(classVal.split(' ').slice(-4)[0])
//                 console.log(classVal.split(' ').slice(-3)[0])
//                 console.log(classVal.split(' ').slice(-2)[0])
//                 console.log(classVal.split(' ').slice(-1)[0])
//
//
//                 var eclassName = "e"+aclassName.slice(1)
//                 var fclassName = "f"+bclassName.slice(1)
//                 var gclassName = "g"+cclassName.slice(1)
//                 var hclassName = "h"+dclassName.slice(1)
//
//
//
//
//                 $(`.${eclassName} .${fclassName} .${gclassName} .${hclassName}`).find('h3').text(str);
//
//             }
//         }
//     }
//
//
//
//
//
// //layer-4-b
//     var html = `
//     <div class="layer-4-b">
//         <h3><!-- 入力連動(ココに出力されます) --></h3>
//         <input class="add-btn-3" type="button" value="+" >
//         <p class="accordion article-title-4b"></p>
//         <ul class="layer-5-B"></ul>
//     </div>
//
//     `;
//
//     // --------------------超重要----------------------------------
//     // layer3-b子要素ulのclass .layer-4-Bに .layer-4-bを出力
//
//
//     // 親クラスを取得
//     var classVal = ($(this).parent().parent().attr('class'))
//     console.log(classVal)
//
//     // a1をe1に変える
//     var aclassName = classVal.split(' ')[1]
//     console.log(aclassName)
//
//     var eclassName = "e"+aclassName.slice(1)
//     // console.log("e"+aclassName.slice(1))
//
//     // b1をf1に変える
//     var bclassName = classVal.split(' ')[2]
//
//     var fclassName = "f"+bclassName.slice(1)
//     // console.log("f"+bclassName.slice(1))
//
//     // c1をg1に変える
//     var cclassName = classVal.split(' ')[3]
//
//     var gclassName = "g"+cclassName.slice(1)
//     // console.log("g"+cclassName.slice(1))
//
//     // var className = [eclassName,fclassName,gclassName];
//     // console.log(className)
//
//     $(`.${eclassName} .${fclassName} .${gclassName}`).children(".layer-4-B").append(html);
//     // ------------------------------------------------------
//     $('.add-btn-3').css('float','right');
//
//     // .layer-3-bに動的にg+iを付与
//     // 動的なclass e に合わせてclassを付与
//     // layer-2-bにf＋iクラスを付与する
//
//     var i = 1;
//
//     // $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").addClass(`${eclassname}`);
//
//     $(`.${eclassName} .${fclassName} .${gclassName}`).children(".layer-4-B").children(".layer-4-b").each(function(){
//         $(this).addClass(`${eclassName}`);
//         $(this).addClass(`${fclassName}`);
//         $(this).addClass(`${gclassName}`);
//         $(this).addClass('h'+i);
//         i++;
//
//     });
//
//
// });
//
//
// //layer-5-b
// $(document).on("click",".add-btn-3", function () {
//     var html = `
//         <div class="layer-5">
//             <input class="check-1" type="checkbox">
//             <input type="text" class="text text-5" placeholder="layer-5=function">
//             <input class="add-btn-4" type="button" value="+" >
//             <button class="remove5">-</button>
//             <input class="comment-btn" type="button" value="コメント" >
//             <p class="accordion article-title"></p>
//             <ul>
//
//             </ul>
//         </div>
//     `;
//     $(this).parent('.layer-4-b').children("ul").append(html);
//
// });
//
// //layer-6-b
// $(document).on("click",".add-btn-4", function () {
//     var html = `
//         <div class="layer-6">
//             <input class="check" type="checkbox" name="check">
//             <input type="text" class="text text-6" placeholder="layer-6=function">
//             <button class="remove6">-</button>
//             <input class="memo-btn" type="button" value="memo" >
//             <textarea class="text textarea-6" placeholder="memo" onblur="coloeSet(this)" onfocus="colorReset(this)" oninput="textAreaHeightSet(this)" onchange="textAreaHeightSet(this)"></textarea>
//
//
//         </div>
//     `;
//     $(this).parent('.layer-5').find("ul").append(html);
//
// });
//
//
//
//
// // remove機能連動
// // remove1
// $(document).on('click', '.remove1', function() {
//
//     p = $(this).parents(".layer-A")
//     // console.log(p)
//     x = $(this).parents(".task-container").find(".layer-b")
//     console.log(x)
//
//
//     //  layer-1-b e+iをremove
//     // console.log($(this).parent().attr('class'))
//     var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
//     // console.log(aclassName)
//
//     // 動的e+i 取得
//     var eclassName = "e"+aclassName.slice(1)
//     // console.log(eclassName)
//     console.log($(this).parents(".task-container").find(".layer-b").children(`.${eclassName}`))
//     $(this).parents(".task-container").find(".layer-b").children(`.${eclassName}`).remove();
//
//     // layer-1-a a+iをremove
//     $(this).parent().parent().remove();
//
//
//
//     // resetClass
//     resetClass(p)
//
//     function resetClass(object) {
//         // aを取得
//         console.log(object.attr('class'))
//         var classVal = object.attr('class')
//
//         // 末尾のクラスを取る
//         var className = classVal.split(' ').slice(0)[0][1]
//         console.log(className)
//
//         i = 1
//         console.log(object)
//         object.children('.layer-a').each(function () {
//
//             console.log($(this).attr('class'))
//             console.log($(this).attr('class').split(' ').slice(-1)[0])
//
//             $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])
//
//             console.log((className + i))
//
//             $(this).addClass(className + i)
//
//             i++
//
//         })
//     }
//
//     // eresetClass
//     eresetClass(x)
//
//     function eresetClass(object) {
//         console.log(object.parent().find(".layer-1-b").attr('class'))
//         console.log(object.find(".layer-1-b").attr('class'))
//
//         i = 1
//
//         object.find(".layer-1-b").each(function () {
//
//             console.log($(this).attr('class'))
//             console.log($(this).attr('class').split(' ').slice(-1)[0])
//
//             $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])
//
//             var eclassName = "e"
//             $(this).addClass(eclassName + i)
//
//             i++
//
//         })
//
//     }
//
//
// });



// // remove2
// $(document).on('click', '.remove2', function() {

//     p = $(this).parents(".layer-1-a").children("ul")

//     x = $(this).parents(".task-container").find(".layer-2-B")


//     //  layer-2-b e+i f+iをremove
//     // console.log($(this).parent().attr('class'))
//     var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-2)[0]
//     // console.log(aclassName)
//     var bclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
//     // console.log(bclassName)

//     // 動的e+i 取得
//     var eclassName = "e"+aclassName.slice(1)
//     // console.log(eclassName)

//     // 動的f+i 取得
//     var fclassName = "f"+bclassName.slice(1)
//     // console.log(fclassName)

//     // console.log($(this).parents(".task-container").find(`.${eclassName} .${fclassName}`).attr('class'))
//     $(this).parents(".task-container").find(`.${eclassName} .${fclassName}`).remove();


//     // layer-2-a をremove
//     // console.log($(this).parent().parent().attr('class'))
//     $(this).parent().parent().remove();

//     // resetClass
//     resetClass(p)

//     function resetClass(object) {

//         var classVal = object.parent().attr('class')

//         // 末尾のクラスを取る
//         var lastclassName = classVal.split(' ').slice(-1)[0][0]
//         console.log(aclassName)

//         // 末尾のクラスをbに変える
//         className = String.fromCharCode(lastclassName.charCodeAt(0) + 1)
//         console.log(className)

//         i = 1

//         console.log(object.attr('class'))
//         object.find('.layer-2-a').each(function () {
//             console.log($(this).attr('class'))
//             $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

//             console.log((className + i))

//             $(this).addClass(className + i)


//             i++
//         })

//     }


//     // fresetClass
//     fresetClass(x)

//     function fresetClass(object) {
//         console.log(object.parent().find(".layer-2-b").attr('class'))
//         console.log(object.find(".layer-2-b").attr('class'))

//         i = 1

//         object.find(".layer-2-b").each(function () {

//             console.log($(this).attr('class'))
//             console.log($(this).attr('class').split(' ').slice(-1)[0])

//             $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

//             var fclassName = "f"
//             $(this).addClass(fclassName + i)

//             i++

//         })

//     }


// });


// // remove3
// $(document).on('click', '.remove3', function() {

//     p = $(this).parents(".layer-2-a").children("ul")
//     console.log(p)

//     x = $(this).parents(".task-container").find(".layer-2-b").children(".layer-3-B")
//     console.log(x)

//     //  layer-3-b e+i f+i g+iをremove
//     // console.log($(this).parent().parent().attr('class').split(' ').slice(-3)[0])

//     var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-3)[0]
//     // console.log(aclassName)
//     var bclassName = $(this).parent().parent().attr('class').split(' ').slice(-2)[0]
//     // console.log(bclassName)
//     var cclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
//     // console.log(cclassName)


//     // 動的e+i 取得
//     var eclassName = "e"+aclassName.slice(1)
//     // console.log(eclassName)

//     // 動的f+i 取得
//     var fclassName = "f"+bclassName.slice(1)
//     // console.log(fclassName)

//     // 動的g+i 取得
//     var gclassName = "g"+cclassName.slice(1)
//     // console.log(gclassName)


//     // console.log($(this).parents(".task-container").find(".layer-3-B").children(`.${eclassName} .${fclassName} .${gclassName}`).attr('class'))
//     $(this).parents(".task-container").find(".layer-3-B").children(`.${eclassName} .${fclassName} .${gclassName}`).remove();


//     // layer-3-a をremove
//     console.log($(this).parent().parent())
//     $(this).parent().parent().remove();

//     resetClass(p)

//     function resetClass(object) {

//         // console.log(object)

//         var classVal = object.parent().attr('class')

//         // 末尾のクラスを取る
//         var lastclassName = classVal.split(' ').slice(-1)[0][0]
//         console.log(lastclassName)

//         // 末尾のクラスをcに変える
//         className = String.fromCharCode(lastclassName.charCodeAt(0) + 1)
//         console.log(className)

//         i = 1

//         console.log(object.find('.layer-3-a').attr('class'))
//         object.find('.layer-3-a').each(function () {
//             console.log($(this).attr('class'))

//             $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

//             console.log((className + i))

//             $(this).addClass(className + i)


//             i++
//         })

//     }


//     // gresetClass
//     gresetClass(x)

//     function gresetClass(object) {



//         // console.log(object.children(".layer-3-b").attr('class'))


//         i = 1

//         console.log(object.children(".layer-3-b").attr('class'))
//         object.children(`.${eclassName} .${fclassName}`).each(function () {

//             console.log($(this).attr('class'))
//             console.log($(this).attr('class').split(' ').slice(-1)[0])

//             $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

//             var gclassName = "g"
//             $(this).addClass(gclassName + i)

//             i++

//         })

//     }


// });


// // remove4
// $(document).on('click', '.remove4', function() {

//     p = $(this).parents(".layer-3-a").children("ul")

//     x = $(this).parents(".task-container").find(".layer-4-B")


//     //  layer-3-b e+i f+i g+i h+iをremove
//     console.log($(this).parent().parent().attr('class').split(' ').slice(-4)[0])

//     var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-4)[0]
//     // console.log(aclassName)
//     var bclassName = $(this).parent().parent().attr('class').split(' ').slice(-3)[0]
//     // console.log(bclassName)
//     var cclassName = $(this).parent().parent().attr('class').split(' ').slice(-2)[0]
//     // console.log(cclassName)
//     var dclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
//     // console.log(dclassName)


//     // 動的e+i 取得
//     var eclassName = "e"+aclassName.slice(1)
//     // console.log(eclassName)

//     // 動的f+i 取得
//     var fclassName = "f"+bclassName.slice(1)
//     // console.log(fclassName)

//     // 動的g+i 取得
//     var gclassName = "g"+cclassName.slice(1)
//     // console.log(gclassName)

//     // 動的h+i 取得
//     var hclassName = "h"+dclassName.slice(1)
//     // console.log(hclassName)


//     console.log($(this).parents(".task-container").find(`.${eclassName} .${fclassName} .${gclassName} .${hclassName}`).attr('class'))
//     $(this).parents(".task-container").find(`.${eclassName} .${fclassName} .${gclassName} .${hclassName}`).remove();


//     // layer-4-a をremove
//     $(this).parent().parent().remove();

//     resetClass(p)

//     function resetClass(object) {

//         var classVal = object.parent().attr('class')

//         // 末尾のクラスを取る
//         var lastclassName = classVal.split(' ').slice(-1)[0][0]
//         console.log(lastclassName)

//         // 末尾のクラスをcに変える
//         className = String.fromCharCode(lastclassName.charCodeAt(0) + 1)
//         console.log(className)

//         i = 1

//         console.log(object.attr('class'))
//         object.find('.layer-4-a').each(function () {
//             console.log($(this).attr('class'))
//             $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

//             console.log((className + i))

//             $(this).addClass(className + i)

//             i++
//         })

//     }
// });
