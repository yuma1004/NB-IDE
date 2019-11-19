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
            <ul class="layer-1-a"></ul>
        </div>

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
                <ul></ul>
            </div>

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
    // console.log($(this).parent().children("ul"))
    $(this).parent().children("ul").append(html);
    // addclassNames($(this));


// 関数
      var i = 1;
      // console.log($(this))
      $(this).parent().children("ul").children("div").each(function(){

        // 1.親クラスを取得
        var classNames = $(this).parent().parent().attr("class")
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

// layer-2-b
$(document).on("click",".add-btn-layer-2", function () {

    var html = `
        <div class="layer-2-b">
        <h2><!-- 入力連動(ココに出力されます) --></h2>
        <ul class="layer-2-B"></ul>
    `;

    var aclassVal = $(this).parent().attr('class')
    // console.log(aclassVal)
    // a1をe1に変える

    var eclassName = "e"+aclassVal.slice(1)

    $(`.${eclassName}`).children(".layer-1-B").append(html);
    // ------------------------------------------------------
    $('.layer-b').css('padding','10px 10px');


    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する

    var i = 1;

    $(`.${eclassName}`).children(".layer-1-B").children(".layer-2-b").each(function(){
        // $(this).addClass(`${eclassName}`);
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

    var aclassVal = $(this).parent().parent().parent().attr('class')
    console.log(aclassVal)
    // a1をe1に変える

    var eclassName = "e"+aclassVal.slice(1)
    console.log(eclassName)

    // b1をf1に変える
    var bclassVal = $(this).parent().attr('class')
    console.log(bclassVal)

    var fclassName = "f"+bclassVal.slice(1)
    console.log(fclassName)

    $(`.${eclassName}`).find(`.${fclassName}`).children(".layer-2-B").append(html);
    // ------------------------------------------------------

    // .layer-3-bに動的にg+iを付与
    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する

    var i = 1;

    $(`.${eclassName} .${fclassName}`).children(".layer-2-B").children(".layer-3-b").each(function(){
        // $(this).addClass(`${eclassName}`);
        // $(this).addClass(`${fclassName}`);
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
    var aclassVal = $(this).parent().parent().parent().parent().parent().attr('class')
    console.log(aclassVal)
    // a1をe1に変える

    var eclassName = "e"+aclassVal.slice(1)
    console.log(eclassName)

    var bclassVal = $(this).parent().parent().parent().attr('class')
    console.log(bclassVal)
    // b1をf1に変える

    var fclassName = "f"+bclassVal.slice(1)
    console.log(fclassName)

    // c1をg1に変える
    var cclassVal = $(this).parent().attr('class')
    console.log(cclassVal)

    var gclassName = "g"+cclassVal.slice(1)
    console.log(gclassName)


    $(`.${eclassName}`).find(`.${gclassName}`).children(".layer-3-B").append(html);
    // ------------------------------------------------------
    $('.add-btn-3').css('float','right');

    // .layer-3-bに動的にg+iを付与
    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する

    var i = 1;

    // $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").addClass(`${eclassname}`);

    $(`.${eclassName} .${fclassName} .${gclassName}`).children(".layer-3-B").children(".layer-4-b").each(function(){
        // $(this).addClass(`${eclassName}`);
        // $(this).addClass(`${fclassName}`);
        // $(this).addClass(`${gclassName}`);
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



// remove機能連動
// remove1 aとeに関して
$(document).on('click', '.remove1', function() {
    // o = this remove1
    o = $(this)

    // p ,object = ul
    p = o.parent().parent()
    console.log(p)

    x = o.parents(".task-container").find(".layer-B").children("ul")
    console.log(x)


    // 1.a+i 取得
    var aClassNames = o.parent().attr('class').split(' ').slice(-1)[0]
    console.log(aClassNames)

    // 2.アルファベットのみ取得
    var aClassName = aClassNames.split(' ').slice(-1)[0]
    aClassName = aClassNames.slice(0)[0]
    console.log(aClassName)

    // 2.数字のみ取得
    var aClassNum = aClassNames.slice(1)
    console.log(aClassNum)

    // 3.e+i 取得
    // aをeに変える
    var nextClassName = String.fromCharCode(aClassName.charCodeAt(0) + 4)
    console.log(nextClassName)

    var nextClassNames = nextClassName + aClassNum
    console.log(nextClassNames)
    // console.log(eclassName)

    // 4.layer-1-b e+iをremove
    x.children(`.${nextClassNames}`).remove();

    // 5.layer-1-a a+iをremove
    o.parent().remove();

    // 6.a_resetClass
    a_resetClass(p)

    function a_resetClass(object) {

        i = 1

        object.children("div").each(function () {

          $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

          $(this).addClass(aClassName + i)

          i++;

        })
    }

    // 7.e_resetClass
    e_resetClass(x)

    function e_resetClass(object) {

        i = 1
        console.log(object.parent())
        object.find(".layer-1-b").each(function () {

            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            // var eclassName = "e"
            $(this).addClass(nextClassName + i)

            i++

        })
    }

});


$(document).on('click', '.remove2', function() {
    // o = this remove2
    o = $(this)

    p = o.parent().parent()
    console.log(p)

    x = o.parents(".task-container").find(".layer-1-b").children("ul")
    console.log(x)

    var aClassNames = $(this).parent().parent().parent().attr('class')


    // 1.b+i 取得
    var bclassNames = o.parent().attr('class').split(' ').slice(-1)[0]
    console.log(bclassNames)

    // 2.アルファベットのみ取得
    var bclassName = bclassNames.split(' ').slice(-1)[0]
    bclassName = bclassNames.slice(0)[0]
    console.log(bclassName)

    // 2.数字のみ取得
    var bclassNum = bclassNames.slice(1)
    console.log(bclassNum)

    // 3.f+i 取得
    // bをfに変える
    var fclassName = String.fromCharCode(bclassName.charCodeAt(0) + 4)
    console.log(fclassName)

    var fclassNames = fclassName + bclassNum
    console.log(fclassNames)
    // console.log(eclassName)


    var eclassName = "e"+aClassNames.slice(1)
    console.log(eclassName)


    // 4.layer-2-b f+iをremove
    console.log($(`.${eclassName}`).find(`.${fclassNames}`))
    $(`.${eclassName}`).find(`.${fclassNames}`).remove();

    // 5.layer-2-a b+iをremove
    o.parent().remove();


    // 2.aのアルファベットのみ取得
    var aClassName = aClassNames.split(' ').slice(-1)[0]
    aClassName = aClassNames.slice(0)[0]
    console.log(aClassName)

    // 2.aをbに変える
    var bClassName = String.fromCharCode(aClassName.charCodeAt(0) + 1)
    console.log(bClassName)


    // 6.b_resetClass
    b_resetClass(p)

    function b_resetClass(object) {

        i = 1

        object.children("div").each(function () {

          $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

          $(this).addClass(bClassName + i)

          i++;

        })
    }


    // 7.e_resetClass
    f_resetClass(x)

    function f_resetClass(object) {

        i = 1
        // console.log(object.find(`.${nextClassNames}`).attr("class"))

        $(`.${eclassName}`).children(".layer-1-B").children(".layer-2-b").each(function(){

          $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

          // var eclassName = "e"
          $(this).addClass(fclassName + i)

          i++

        })

    }

});



$(document).on('click', '.remove3', function() {
    // o = this remove3
    o = $(this)

    p = o.parent().parent()
    console.log(p)

    x = o.parents(".task-container").find(".layer-2-b").children("ul")
    console.log(x)

    // 親要素をたどってaを取得
    var aClassNames = $(this).parent().parent().parent().parent().parent().attr('class')
    console.log(aClassNames)

    // 親要素をたどってbを取得
    var bClassNames = $(this).parent().parent().parent().attr('class')
    console.log(bClassNames)


    // 1.c+i 取得
    var cclassNames = o.parent().attr('class').split(' ').slice(-1)[0]
    console.log(cclassNames)

    // 2.アルファベットのみ取得
    var cclassName = cclassNames.split(' ').slice(-1)[0]
    cclassName = cclassNames.slice(0)[0]
    console.log(cclassName)

    // 2.数字のみ取得
    var cclassNum = cclassNames.slice(1)
    console.log(cclassNum)

    // 3.f+i 取得
    // bをfに変える
    var gclassName = String.fromCharCode(cclassName.charCodeAt(0) + 4)
    console.log(gclassName)

    var gclassNames = gclassName + cclassNum
    console.log(gclassNames)
    // console.log(eclassName)

    // aからeを取得
    var eclassName = "e"+aClassNames.slice(1)
    console.log(eclassName)

    // bからfを取得
    var fclassName = "f"+bClassNames.slice(1)
    console.log(fclassName)


    // 4.layer-2-b f+iをremove
    console.log($(`.${eclassName}`).find(`.${gclassNames}`))
    $(`.${eclassName}`).find(`.${gclassNames}`).remove();

    // 5.layer-2-a b+iをremove
    o.parent().remove();


    // 2.aのアルファベットのみ取得
    var bClassName = bClassNames.split(' ').slice(-1)[0]
    bClassName = bClassNames.slice(0)[0]
    console.log(bClassName)

    // 2.aをbに変える
    var cClassName = String.fromCharCode(bClassName.charCodeAt(0) + 1)
    console.log(cClassName)


    // 6.b_resetClass
    c_resetClass(p)

    function c_resetClass(object) {

        i = 1

        object.children("div").each(function () {

          $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

          $(this).addClass(cClassName + i)

          i++;

        })
    }


    // 7.e_resetClass
    g_resetClass(x)

    function g_resetClass(object) {

        i = 1
        // console.log(object.find(`.${nextClassNames}`).attr("class"))

        $(`.${eclassName}`).find(`.${fclassName}`).children(".layer-2-B").children(".layer-3-b").each(function(){

          $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

          // var eclassName = "e"
          $(this).addClass(gclassName + i)

          i++
        })
    }
});


$(document).on('click', '.remove4', function() {
    // o = this remove4
    o = $(this)

    p = o.parent().parent()
    console.log(p)

    x = o.parents(".task-container").find(".layer-3-b").children("ul")
    console.log(x)

    // 親要素をたどってaを取得
    var aClassNames = $(this).parent().parent().parent().parent().parent().parent().parent().attr('class')
    console.log(aClassNames)

    // 親要素をたどってbを取得
    var bClassNames = $(this).parent().parent().parent().parent().parent().attr('class')
    console.log(bClassNames)

    // 親要素をたどってcを取得
    var cClassNames = $(this).parent().parent().parent().attr('class')
    console.log(cClassNames)


    // 1.d+i 取得
    var dclassNames = o.parent().attr('class').split(' ').slice(-1)[0]
    console.log(dclassNames)

    // 2.アルファベットのみ取得
    var dclassName = dclassNames.split(' ').slice(-1)[0]
    dclassName = dclassNames.slice(0)[0]
    console.log(dclassName)

    // 2.数字のみ取得
    var dclassNum = dclassNames.slice(1)
    console.log(dclassNum)

    // 3.h+i 取得
    // dをhに変える
    var hclassName = String.fromCharCode(dclassName.charCodeAt(0) + 4)
    console.log(hclassName)

    var hclassNames = hclassName + dclassNum
    console.log(hclassNames)
    // console.log(eclassName)

    // aからeを取得
    var eclassName = "e"+aClassNames.slice(1)
    console.log(eclassName)

    // bからfを取得
    var fclassName = "f"+bClassNames.slice(1)
    console.log(fclassName)

    // cからgを取得
    var gclassName = "g"+cClassNames.slice(1)
    console.log(gclassName)


    // 4.layer-2-b f+iをremove
    console.log($(`.${eclassName}`).find(`.${hclassNames}`))
    $(`.${eclassName}`).find(`.${hclassNames}`).remove();

    // 5.layer-2-a b+iをremove
    o.parent().remove();


    // 2.aのアルファベットのみ取得
    var cClassName = cClassNames.split(' ').slice(-1)[0]
    cClassName = cClassNames.slice(0)[0]
    console.log(cClassName)

    // 2.aをbに変える
    var dClassName = String.fromCharCode(cClassName.charCodeAt(0) + 1)
    console.log(dClassName)


    // 6.b_resetClass
    d_resetClass(p)

    function d_resetClass(object) {

        i = 1

        object.children("div").each(function () {

          $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

          $(this).addClass(dClassName + i)

          i++;

        })
    }


    // 7.e_resetClass
    h_resetClass(x)

    function h_resetClass(object) {

        i = 1
        // console.log(object.find(`.${nextClassNames}`).attr("class"))

        $(`.${eclassName}`).find(`.${gclassName}`).children(".layer-3-B").children(".layer-4-b").each(function(){

          $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

          // var eclassName = "e"
          $(this).addClass(hclassName + i)

          i++
        })
    }
});
