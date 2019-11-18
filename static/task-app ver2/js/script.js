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
            <input class="add-btn-1 , add-btn-layer-2" type="button" value="+" >
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
        <div class="layer-1-b" data-deep=1>
          <ul class="layer-1-B"></ul>
        </div>
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
                <input class="add-btn-1 , add-btn-layer-${deep + 2}" type="button" value="+" >
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



// -----------------------------------------------------------------------------



// // Layer-B側
// $(document).on("click",".add-btn-1", function () {
//
// // 関数
//     // $(this)からe+iのクラスを取得
//     // 1.親クラスを取得
//     var aclassName = $(this).parent().attr('class')
//     console.log(aclassName)
//     // a1をe1に変える
//
//     var eclassName = "e"+aclassName.slice(1)
//
//     var i = 1;
//
//       $(`.${eclassName}`).children(".layer-1-B").children(".layer-2-b").each(function(){
//           $(this).addClass(`${eclassName}`);
//           $(this).addClass('f'+i);
//           i++;
//
//       });
//
//
//     var deep = $(this).parent().data("deep")
//
//
//     if(deep === 1){
//         var html = `
//             <div class="layer-2-b" data-deep=${deep + 1}>
//                 <input class="check-1" type="checkbox">
//                 <input type="text" class="text" placeholder="layer-2=mission-1">
//                 <input class="add-btn-1" type="button" value="+" >
//                 <button class="remove${deep + 1}">-</button>
//                 <p class="accordion article-title"></p>
//                 <ul class="layer-${deep + 1}-B"></ul>
//             </div>
//
//         `;
//         console.log(`${eclassName}`)
//         console.log($(`.${eclassName}`).children("ul").attr('class'))
//         $(`.${eclassName}`).children("ul").append(html);
//
//
//         // console.log($(this).parents(".task-container").attr("class"))
//         // console.log($(this).parents(".task-container").find(`.${nextClassNames}`).attr('class'))
//         // $(this).parents(".task-container").find(`.${nextClassNames}`).next("ul").append(html);
//         // $(this).parents(".task-container").find(".layer-B").children("ul").children(".layer-1-b").append(html);
//     }else if(deep === 2){
//         var html = `
//             <div class="layer-3-b" data-deep=${deep + 1}>
//                 <input class="check-1" type="checkbox">
//                 <input type="text" class="text" placeholder="layer-2=mission-1">
//                 <input class="add-btn-1" type="button" value="+" >
//                 <button class="remove${deep + 1}">-</button>
//                 <p class="accordion article-title"></p>
//             </div>
//             <ul class="layer-${deep + 1}-B"></ul>
//         `;
//         // f1
//         console.log($(`.${nextClassNames}`).attr('class'))
//         // e1
//         console.log($(`.${parentClassNames}`).attr('class'))
//
//         console.log($(`.${parentClassNames}`).next("ul").find(`.${nextClassNames}`).attr('class'))
//         $(`.${parentClassNames}`).next("ul").children(`.${nextClassNames}`).next("ul").append(html);
//
//         // $(this).parents(".task-container").find(".layer-1-b").children("ul").append(html);
//         // $(this).parents(".task-container").find(".layer-1-b").children(".layer-2-b").append(html);
//
//     }else if(deep === 3){
//         var html = `
//             <div class="layer-4-b data-deep=${deep + 1}>
//                 <input class="check" type="checkbox" name="check">
//                 <!-- 入力連動 -->
//                 <input type="text" class="text text-4" placeholder="layer-4=target">
//                 <button class="remove${deep + 1}">-</button>
//             </div>
//         `;
//         // $(this).parents(".task-container").find(".layer-2-b").children("ul").append(html);
//     }
//     // console.log(`${nextClassNames}`)
//     // console.log($(`.${nextClassNames}`).next("ul").attr('class'))
//     // $(`.${nextClassNames}`).next("ul").append(html);
//
//
//
//         //
//         // $(`.${nextClassNames}`).next("ul").addClass(`${nextClassNames}`);
//         // $(`.${nextClassNames}`).next("ul").append(html);
//
//         // // 3.aをeに変える
//         // var eclassName = "e"+aclassName.slice(1)
//         // // console.log("e"+aclassName.slice(1))
//         // // console.log(eclassName)
//         //
//
//         //
//         // // 3.アルファベットのみ取得
//         // var aclassName = classNames.split(' ').slice(-1)[0]
//         // className = className.slice(0)[0]
//         // // console.log(aclassName)
//
//
//
//
//
//
// });


// layer-2-b
$(document).on("click",".add-btn-layer-2", function () {

    var html = `
        <div class="layer-2-b">
        <h2><!-- 入力連動(ココに出力されます) --></h2>
        <ul class="layer-2-B"></ul>
    `;

    // --------------------超重要----------------------------------
    // 動的なclass e に合わせて出力　append
    // 動的な a1 を取得しaを消してeに変更
    // layer1-b子要素ulのclass .layer-2-Bに .layer-2-bを出力


    var aclassVal = $(this).parent().attr('class')
    console.log(aclassVal)
    // a1をe1に変える

    var eclassName = "e"+aclassVal.slice(1)

    $(`.${eclassName}`).children(".layer-1-B").append(html);
    // ------------------------------------------------------
    $('.layer-b').css('padding','10px 10px');


    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する

    var i = 1;

    $(`.${eclassName}`).children(".layer-1-B").children(".layer-2-b").each(function(){
        $(this).addClass(`${eclassName}`);
        $(this).addClass('f'+i);
        i++;

    });

});


// layer-3-b
$(document).on("click",".add-btn-layer-3", function () {

    var html = `
        <div class="layer-3-b">
        <h2><!-- 入力連動(ココに出力されます) --></h2>
        <p class="accordion article-title"></p>
        <ul class="layer-3-B"></ul>
    `;

    // --------------------超重要----------------------------------
    // layer2-b子要素ulのclass .layer-3-Bに .layer-3-bを出力



    var aclassVal = $(this).parent().parent().prev().attr('class')
    console.log(aclassVal)
    // a1をe1に変える

    var eclassName = "e"+aclassVal.slice(1)
    console.log(eclassName)

    // b1をf1に変える
    var bclassVal = $(this).parent().attr('class')
    console.log(bclassVal)

    var fclassName = "f"+bclassVal.slice(1)
    console.log(fclassName)

    console.log($(`.${eclassName} .${fclassName}`).children(".layer-2-B"))
    $(`.${eclassName} .${fclassName}`).children(".layer-2-B").append(html);
    // ------------------------------------------------------

    // .layer-3-bに動的にg+iを付与
    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する

    var i = 1;

    $(`.${eclassName} .${fclassName}`).children(".layer-2-B").children(".layer-3-b").each(function(){
        $(this).addClass(`${eclassName}`);
        $(this).addClass(`${fclassName}`);
        $(this).addClass('g'+i);
        i++;

    });

});



// layer-4-b
$(document).on("click",".add-btn-layer-4", function () {

    var html = `
    <div class="layer-4-b">
        <h3><!-- 入力連動(ココに出力されます) --></h3>
        <input class="add-btn-3" type="button" value="+" >
        <p class="accordion article-title-4b"></p>
        <ul class="layer-4-B"></ul>
    </div>

    `;

    // --------------------超重要----------------------------------
    // layer3-b子要素ulのclass .layer-4-Bに .layer-4-bを出力


    // 親クラスを取得
    var aclassVal = $(this).parent().parent().parent().prev().attr('class')
    console.log(aclassVal)
    // a1をe1に変える

    var eclassName = "e"+aclassVal.slice(1)
    console.log(eclassName)

    var bclassVal = $(this).parent().parent().prev().attr('class')
    console.log(bclassVal)
    // b1をf1に変える

    var fclassName = "f"+bclassVal.slice(1)
    console.log(fclassName)

    // c1をg1に変える
    var cclassVal = $(this).parent().attr('class')
    console.log(cclassVal)

    var gclassName = "g"+cclassVal.slice(1)
    console.log(gclassName)


    $(`.${eclassName} .${fclassName} .${gclassName}`).children(".layer-3-B").append(html);
    // ------------------------------------------------------
    $('.add-btn-3').css('float','right');

    // .layer-3-bに動的にg+iを付与
    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する

    var i = 1;

    // $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").addClass(`${eclassname}`);

    $(`.${eclassName} .${fclassName} .${gclassName}`).children(".layer-3-B").children(".layer-4-b").each(function(){
        $(this).addClass(`${eclassName}`);
        $(this).addClass(`${fclassName}`);
        $(this).addClass(`${gclassName}`);
        $(this).addClass('h'+i);
        i++;

    });


});

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
