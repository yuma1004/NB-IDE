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

// layer-bのリサイズ機能
$('#layer-B').funcResizeBox({ 
    minWidth:380,
    maxWidth:760,
    isWidthResize:true, // 水平方向のリサイズのON/OFF
    isHeightResize:false, // 垂直方向のリサイズのON/OFF
    mouseRange:40
  });


    
// layer-1-a

$(document).on("click",".add-btn-layer-1", function () {
    var html = `
        <div class="layer-1-a">
            <div>
                <input type="text" class="mytextbox-1" placeholder="layer-1=title">
                <input class="add-btn-layer-2" type="button" value="+" >
                <button class="remove1">-</button>
                <p class="accordion article-title"></p>
            </div>
            <ul></ul>
        </div>
    `;
    $('.layer-a').append(html);
    $('.layer-a').css('padding','10px 10px');
    $('.layer-a').css('height','700px');
    $('.layer-a').css('overflow','scroll');

    // 動的にclassをつける
    // layer-aにa＋iクラスを付与する
    var i = 1;

    $('.layer-1-a').each(function(){
        $(this).addClass('a'+i);
        i++;

    });

    // Enterフォーカス
    var i = 1;

    $('.mytextbox-1').each(function(){
        $(this).addClass('text'+i);
        i++;

    });

    // 末尾のクラスを取ってくる

    console.log($(this).parents("body").find(".mytextbox-1").attr('class'))
    console.log($(this).parents("body").find(".mytextbox-1").attr('class').split(' ').slice(-1)[0])

    var textbox = $(this).parents("body").find(".mytextbox-1").attr('class').split(' ').slice(-1)[0]

    console.log(`.${textbox}`)
    
    $(`.${textbox}`).keypress(function(e){
        if(e.which == 13){
            
            $(".add-btn-layer-2").click();
            $(this).parent().next().find(".text").focus();
        }
    });
    // $(`.${textbox}`).keypress(function(e){
    //     if(e.which == 13){
    //         console.log($(this))
    //         $(".add-btn-layer-2").click();
    //         $(this).parent().next().find(".text").focus();
    //     }
    // });




// layer-1-b
    var html = `
        <div class="layer-1-b">
        <ul class="layer-2-B"></ul>
          
    `;
    $('.layer-b').append(html);
   
    $('.layer-b').css('padding','10px 10px');
    $('.layer-b').css('height','700px');
    $('.layer-b').css('overflow','scroll');

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
            <div>
                <input class="check-1" type="checkbox">
                <input type="text" class="text text-2" placeholder="layer-2=mission-1">
                <input class="add-btn-layer-3" type="button" value="+" >
                <button class="remove2">-</button>
                <p class="accordion article-title"></p>
            </div>
            <ul></ul>
        </div>
    `;
    $(this).parent().parent().children("ul").append(html);


    // 動的にclassをつける
    // layer-1のクラスを子layer-2に付与する
    var classVal = ($(this).parent().parent().attr('class'))
    var aclassName = classVal.split(' ')[1]
    $(this).parent().parent().children("ul").children().addClass(`${aclassName}`);

    // layer-2にｂ＋iクラスを付与する
    var i = 1;

    $(this).parent().parent().children("ul").children().each(function(){
        $(this).addClass('b'+i);
        i++;

    });



// layer-2-b
    var html = `
        <div class="layer-2-b">
        <h2><!-- 入力連動(ココに出力されます) --></h2>
        <ul class="layer-3-B"></ul>
    `;

    // --------------------超重要----------------------------------
    // 動的なclass e に合わせて出力　append
    // 動的な a1 を取得しaを消してeに変更
    // layer1-b子要素ulのclass .layer-2-Bに .layer-2-bを出力 

    var classVal = ($(this).parent().parent().attr('class'))
    console.log(classVal)

    // a1をe1に変える
    var aclassName = classVal.split(' ')[1]
    console.log(aclassName)

    var eclassName = "e"+aclassName.slice(1)
    console.log("e"+aclassName.slice(1))

    
    $(`.${eclassName}`).children(".layer-2-B").append(html);
    // ------------------------------------------------------
    $('.layer-b').css('padding','10px 10px');
    

    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する
    
    var i = 1;
    
    $(`.${eclassName}`).children(".layer-2-B").children(".layer-2-b").each(function(){
        $(this).addClass(`${eclassName}`);
        $(this).addClass('f'+i);
        i++;

    });
    
});


// layer-3-a
$(document).on("click",".add-btn-layer-3", function () {
    var html = `
        <div class="layer-3-a">
            <div>     
                <input class="check-1" type="checkbox">

                <!-- ↓↓↓　入力連動　↓↓↓ -->
                <input type="text" class="text text-3" placeholder="layer-3=mission-2">
                <!-- ↑↑↑　入力連動　↑↑↑ -->

                <input class="add-btn-layer-4" type="button" value="+" >
                <button class="remove3">-</button>
                <p class="accordion article-title"></p>
            </div>
            <ul></ul>
        </div>
    `;

    $(this).parent().parent().children("ul").append(html);

    // 動的にclassをつける
    // layer-2のクラスを子layer-3に付与する
    var classVal = ($(this).parent().parent().attr('class'))

    var aclassName = classVal.split(' ')[1]
    $(this).parent().parent().children("ul").children().addClass(`${aclassName}`);
    console.log(aclassName)

    var bclassName = classVal.split(' ')[2]
    $(this).parent().parent().children("ul").children().addClass(`${bclassName}`);
    console.log(bclassName)

    // layer-3にc＋iクラスを付与する
    var i = 1;

    $(this).parent().parent().children("ul").children().each(function(){
        $(this).addClass('c'+i);
        i++;

    });


    // 入力連動
    $(".layer-3-a .text-3").each(function(){
    
        $(this).bind('keyup', hoge(this));
        
    });
        
    function hoge(elm){
        var v, old = elm.value;
        return function(){
            if(old != (v=elm.value)){
                old = v;
                str = $(this).val();
                
                console.log($(this).parent().parent().attr('class'))
                var classVal = $(this).parent().parent().attr('class')
                var aclassName = classVal.split(' ').slice(-3)[0]
                var bclassName = classVal.split(' ').slice(-2)[0]
                var cclassName = classVal.split(' ').slice(-1)[0]

                var eclassName = "e"+aclassName.slice(1)
                var fclassName = "f"+bclassName.slice(1)
                var gclassName = "g"+cclassName.slice(1)
                console.log($(`.${eclassName} .${fclassName} .${gclassName}`).find('h2'))
                $(`.${eclassName} .${fclassName} .${gclassName}`).find('h2').text(str);

            }
        }
    }


//layer-3-b
    var html = `
        <div class="layer-3-b">
        <h2><!-- 入力連動(ココに出力されます) --></h2>
        <p class="accordion article-title"></p>
        <ul class="layer-4-B"></ul>
    `;

    // --------------------超重要----------------------------------
    // layer2-b子要素ulのclass .layer-3-Bに .layer-3-bを出力 


    
    var classVal = ($(this).parent().parent().attr('class'))
    console.log(classVal)
    
    // a1をe1に変える
    var aclassName = classVal.split(' ')[1]
    console.log(aclassName)

    var eclassName = "e"+aclassName.slice(1)
    console.log("e"+aclassName.slice(1))


    // b1をf1に変える
    var bclassName = classVal.split(' ')[2]
    console.log(bclassName)
    
    var fclassName = "f"+bclassName.slice(1)
    console.log("f"+bclassName.slice(1))

    console.log($(`.${eclassName} .${fclassName}`).children(".layer-3-B"))
    $(`.${eclassName} .${fclassName}`).children(".layer-3-B").append(html);
    // ------------------------------------------------------

    // .layer-3-bに動的にg+iを付与
    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する

    var i = 1;

    // $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").addClass(`${eclassname}`);
    // $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").addClass(`${fclassname}`);
    $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").each(function(){
        $(this).addClass(`${eclassName}`);
        $(this).addClass(`${fclassName}`);
        $(this).addClass('g'+i);
        i++;

    });
  
});



// layer-4-a
$(document).on("click",".add-btn-layer-4", function () {
    var html = `
        <div class="layer-4-a">
            <div>
                <input class="check" type="checkbox" name="check">

                <!-- 入力連動 -->
                <input type="text" class="text text-4" placeholder="layer-4=target">

                <button class="remove4">-</button>
                
            </div>
        </div>
    `;
    $(this).parent().parent().children("ul").append(html);


    // 動的にclassをつける
    // layer-3のクラスを子layer-4に付与する
    var classVal = ($(this).parent().parent().attr('class'))

    var aclassName = classVal.split(' ')[1]
    $(this).parent().parent().children("ul").children().addClass(`${aclassName}`);
    console.log(aclassName)

    var bclassName = classVal.split(' ')[2]
    $(this).parent().parent().children("ul").children().addClass(`${bclassName}`);
    console.log(bclassName)

    var cclassName = classVal.split(' ')[3]
    $(this).parent().parent().children("ul").children().addClass(`${cclassName}`);
    console.log(cclassName)

    // layer-4にd＋iクラスを付与する
    var i = 1;

    $(this).parent().parent().children("ul").children().each(function(){
        $(this).addClass('d'+i);
        i++;

    });

    // 入力連動
    $(".layer-4-a .text-4").each(function(){
    
        $(this).bind('keyup', hoge(this));
        
    });
        
    function hoge(elm){
        var v, old = elm.value;
        return function(){
            if(old != (v=elm.value)){
                old = v;
                str = $(this).val();
                
                console.log($(this).parent().parent().attr('class'))
                var classVal = $(this).parent().parent().attr('class')
                var aclassName = classVal.split(' ').slice(-4)[0]
                var bclassName = classVal.split(' ').slice(-3)[0]
                var cclassName = classVal.split(' ').slice(-2)[0]
                var dclassName = classVal.split(' ').slice(-1)[0]
                
                console.log(classVal.split(' ').slice(-4)[0])
                console.log(classVal.split(' ').slice(-3)[0])
                console.log(classVal.split(' ').slice(-2)[0])
                console.log(classVal.split(' ').slice(-1)[0])


                var eclassName = "e"+aclassName.slice(1)
                var fclassName = "f"+bclassName.slice(1)
                var gclassName = "g"+cclassName.slice(1)
                var hclassName = "h"+dclassName.slice(1)

                


                $(`.${eclassName} .${fclassName} .${gclassName} .${hclassName}`).find('h3').text(str);

            }
        }
    }





//layer-4-b
    var html = `
    <div class="layer-4-b">
        <h3><!-- 入力連動(ココに出力されます) --></h3>
        <input class="add-btn-3" type="button" value="+" >
        <p class="accordion article-title-4b"></p>
        <ul class="layer-5-B"></ul>
    </div>
    
    `;

    // --------------------超重要----------------------------------
    // layer3-b子要素ulのclass .layer-4-Bに .layer-4-bを出力 


    // 親クラスを取得
    var classVal = ($(this).parent().parent().attr('class'))
    console.log(classVal)
    
    // a1をe1に変える
    var aclassName = classVal.split(' ')[1]
    console.log(aclassName)
    
    var eclassName = "e"+aclassName.slice(1)
    // console.log("e"+aclassName.slice(1))

    // b1をf1に変える
    var bclassName = classVal.split(' ')[2]

    var fclassName = "f"+bclassName.slice(1)
    // console.log("f"+bclassName.slice(1))

    // c1をg1に変える
    var cclassName = classVal.split(' ')[3]
    
    var gclassName = "g"+cclassName.slice(1)
    // console.log("g"+cclassName.slice(1))

    // var className = [eclassName,fclassName,gclassName];
    // console.log(className)

    $(`.${eclassName} .${fclassName} .${gclassName}`).children(".layer-4-B").append(html);
    // ------------------------------------------------------
    $('.add-btn-3').css('float','right');

    // .layer-3-bに動的にg+iを付与
    // 動的なclass e に合わせてclassを付与
    // layer-2-bにf＋iクラスを付与する

    var i = 1;

    // $(`.${eclassName} .${fclassName}`).children(".layer-3-B").children(".layer-3-b").addClass(`${eclassname}`);
    
    $(`.${eclassName} .${fclassName} .${gclassName}`).children(".layer-4-B").children(".layer-4-b").each(function(){
        $(this).addClass(`${eclassName}`);
        $(this).addClass(`${fclassName}`);
        $(this).addClass(`${gclassName}`);
        $(this).addClass('h'+i);
        i++;

    });


});


//layer-5-b
$(document).on("click",".add-btn-3", function () {
    var html = `
        <div class="layer-5">
            <input class="check-1" type="checkbox">
            <input type="text" class="text text-5" placeholder="layer-5=function">
            <input class="add-btn-4" type="button" value="+" >
            <button class="remove5">-</button>
            <input class="comment-btn" type="button" value="コメント" >
            <p class="accordion article-title"></p>
            <ul>

            </ul>
        </div>
    `;
    $(this).parent('.layer-4-b').children("ul").append(html);
    
});

//layer-6-b
$(document).on("click",".add-btn-4", function () {
    var html = `
        <div class="layer-6">
            <input class="check" type="checkbox" name="check">
            <input type="text" class="text text-6" placeholder="layer-6=function">
            <button class="remove6">-</button>
            <input class="memo-btn" type="button" value="memo" >
            <textarea class="text textarea-6" placeholder="memo" onblur="coloeSet(this)" onfocus="colorReset(this)" oninput="textAreaHeightSet(this)" onchange="textAreaHeightSet(this)"></textarea>

        
        </div>
    `;
    $(this).parent('.layer-5').find("ul").append(html);
    
});




$(document).on('click', '.remove', function() {
    
    p = $(this).parents(".layer-a")
    // console.log(p)
    x = $(this).parents(".task-container").find(".layer-b")
    console.log(x)

    
    //  layer-1-b e+iをremove
    // console.log($(this).parent().attr('class'))
    var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
    // console.log(aclassName)

    // 動的e+i 取得
    var eclassName = "e"+aclassName.slice(1)
    // console.log(eclassName)
    console.log($(this).parents(".task-container").find(".layer-b").children(`.${eclassName}`))
    $(this).parents(".task-container").find(".layer-b").children(`.${eclassName}`).remove();
    
    // layer-1-a a+iをremove
    $(this).parent().parent().remove();


    
    // resetClass
    resetClass(p)

    function resetClass(object) {
        // aを取得
        console.log(object.attr('class'))
        var classVal = object.attr('class')

        // 末尾のクラスを取る
        var className = classVal.split(' ').slice(0)[0][1]
        console.log(className)

        i = 1

        object.find('.layer-1-a').each(function () {

            console.log($(this).attr('class'))
            console.log($(this).attr('class').split(' ').slice(-1)[0])
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            console.log((className + i))
    
            $(this).addClass(className + i)
            
            i++
            
        })
    }

    // eresetClass
    eresetClass(x)

    function eresetClass(object) {
        console.log(object.parent().find(".layer-1-b").attr('class'))
        console.log(object.find(".layer-1-b").attr('class'))
        
        i = 1
        
        object.find(".layer-1-b").each(function () {

            console.log($(this).attr('class'))
            console.log($(this).attr('class').split(' ').slice(-1)[0])
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            var eclassName = "e"
            $(this).addClass(eclassName + i)

            i++

        })
        
    }



});






// remove機能連動
// remove1
$(document).on('click', '.remove1', function() {
    
    p = $(this).parents(".layer-a")
    // console.log(p)
    x = $(this).parents(".task-container").find(".layer-b")
    console.log(x)

    
    //  layer-1-b e+iをremove
    // console.log($(this).parent().attr('class'))
    var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
    // console.log(aclassName)

    // 動的e+i 取得
    var eclassName = "e"+aclassName.slice(1)
    // console.log(eclassName)
    console.log($(this).parents(".task-container").find(".layer-b").children(`.${eclassName}`))
    $(this).parents(".task-container").find(".layer-b").children(`.${eclassName}`).remove();
    
    // layer-1-a a+iをremove
    $(this).parent().parent().remove();


    
    // resetClass
    resetClass(p)

    function resetClass(object) {
        // aを取得
        console.log(object.attr('class'))
        var classVal = object.attr('class')

        // 末尾のクラスを取る
        var className = classVal.split(' ').slice(0)[0][1]
        console.log(className)

        var i = 1

        object.find('.layer-1-a').each(function () {

            console.log($(this).attr('class'))
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])
            
            console.log((className + i))

            $(this).addClass(className + i)
         

            i++
            
        })

        object.find('.layer-2-a,.layer-3-a,.layer-4-a').each(function () {

            console.log($(this).attr('class'))
            // classNames = $(this).removeClass($(this).attr('class').split(' ').slice(1)[0])
            

            console.log($(this).attr('class').split(' ').slice(1)[0])
            // var className = $(this).attr('class').split(' ').slice(1)[0]
            // console.log(aclassName)

            var numclassName = $(this).attr('class').split(' ').slice(-1)[0][1]
            console.log(numclassName)

            var aclassName = $(this).attr('class').split(' ').slice(1)[0][0]
            console.log(aclassName)

            aclassName = aclassName + numclassName

            console.log(aclassName)
            
            $(this).removeClass($(this).attr('class').split(' ').slice(1)[0])

            // $(this).removeClass()
            

    
            $(this).addClass(aclassName)
            
            
           
            
            
        })
    }

    // eresetClass
    eresetClass(x)

    function eresetClass(object) {
        console.log(object.parent().find(".layer-1-b").attr('class'))
        console.log(object.find(".layer-1-b").attr('class'))
        
        i = 1
        
        object.find(".layer-1-b").each(function () {

            console.log($(this).attr('class'))
            console.log($(this).attr('class').split(' ').slice(-1)[0])
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            var eclassName = "e"
            $(this).addClass(eclassName + i)

            i++

        })
        
    }
    

});



// remove2
$(document).on('click', '.remove2', function() {

    p = $(this).parents(".layer-1-a").children("ul")
    
    x = $(this).parents(".task-container").find(".layer-2-B")
    
    
    //  layer-2-b e+i f+iをremove
    // console.log($(this).parent().attr('class'))
    var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-2)[0]
    // console.log(aclassName)
    var bclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
    // console.log(bclassName)

    // 動的e+i 取得
    var eclassName = "e"+aclassName.slice(1)
    // console.log(eclassName)

    // 動的f+i 取得
    var fclassName = "f"+bclassName.slice(1)
    // console.log(fclassName)

    // console.log($(this).parents(".task-container").find(`.${eclassName} .${fclassName}`).attr('class'))
    $(this).parents(".task-container").find(`.${eclassName} .${fclassName}`).remove();
    

    // layer-2-a をremove
    // console.log($(this).parent().parent().attr('class'))
    $(this).parent().parent().remove();

    // resetClass
    resetClass(p)

    function resetClass(object) {

        var classVal = object.parent().attr('class')

        // 末尾のクラスを取る
        var lastclassName = classVal.split(' ').slice(-1)[0][0]
        console.log(aclassName)

        // 末尾のクラスをbに変える
        className = String.fromCharCode(lastclassName.charCodeAt(0) + 1)
        console.log(className)

        i = 1
    
        console.log(object.attr('class'))
        object.find('.layer-2-a').each(function () {
            console.log($(this).attr('class'))
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])
            
            console.log((className + i))

            $(this).addClass(className + i)
         

            i++
        })

    }


    // fresetClass
    fresetClass(x)

    function fresetClass(object) {
        console.log(object.parent().find(".layer-2-b").attr('class'))
        console.log(object.find(".layer-2-b").attr('class'))
        
        i = 1
        
        object.find(".layer-2-b").each(function () {

            console.log($(this).attr('class'))
            console.log($(this).attr('class').split(' ').slice(-1)[0])
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            var fclassName = "f"
            $(this).addClass(fclassName + i)

            i++

        })
        
    }


});


// remove3
$(document).on('click', '.remove3', function() {

    p = $(this).parents(".layer-2-a").children("ul")
    console.log(p)

    x = $(this).parents(".task-container").find(".layer-2-b").children(".layer-3-B")
    console.log(x)
    
    //  layer-3-b e+i f+i g+iをremove
    // console.log($(this).parent().parent().attr('class').split(' ').slice(-3)[0])
    
    var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-3)[0]
    // console.log(aclassName)
    var bclassName = $(this).parent().parent().attr('class').split(' ').slice(-2)[0]
    // console.log(bclassName)
    var cclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
    // console.log(cclassName)


    // 動的e+i 取得
    var eclassName = "e"+aclassName.slice(1)
    // console.log(eclassName)

    // 動的f+i 取得
    var fclassName = "f"+bclassName.slice(1)
    // console.log(fclassName)

    // 動的g+i 取得
    var gclassName = "g"+cclassName.slice(1)
    // console.log(gclassName)


    // console.log($(this).parents(".task-container").find(".layer-3-B").children(`.${eclassName} .${fclassName} .${gclassName}`).attr('class'))
    $(this).parents(".task-container").find(".layer-3-B").children(`.${eclassName} .${fclassName} .${gclassName}`).remove();
    

    // layer-3-a をremove
    console.log($(this).parent().parent())
    $(this).parent().parent().remove();

    resetClass(p)

    function resetClass(object) {

        // console.log(object)

        var classVal = object.parent().attr('class')

        // 末尾のクラスを取る
        var lastclassName = classVal.split(' ').slice(-1)[0][0]
        console.log(lastclassName)

        // 末尾のクラスをcに変える
        className = String.fromCharCode(lastclassName.charCodeAt(0) + 1)
        console.log(className)

        i = 1
    
        console.log(object.find('.layer-3-a').attr('class'))
        object.find('.layer-3-a').each(function () {
            console.log($(this).attr('class'))

            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])
            
            console.log((className + i))

            $(this).addClass(className + i)
         

            i++
        })

    }


    // gresetClass
    gresetClass(x)

    function gresetClass(object) {

        
        
        // console.log(object.children(".layer-3-b").attr('class'))

        
        i = 1

        console.log(object.children(".layer-3-b").attr('class'))
        object.children(`.${eclassName} .${fclassName}`).each(function () {

            console.log($(this).attr('class'))
            console.log($(this).attr('class').split(' ').slice(-1)[0])
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            var gclassName = "g"
            $(this).addClass(gclassName + i)

            i++

        })
        
    }


});


// remove4
$(document).on('click', '.remove4', function() {

    p = $(this).parents(".layer-3-a").children("ul")

    x = $(this).parents(".task-container").find(".layer-4-B")
    
    
    //  layer-3-b e+i f+i g+i h+iをremove
    console.log($(this).parent().parent().attr('class').split(' ').slice(-4)[0])

    var aclassName = $(this).parent().parent().attr('class').split(' ').slice(-4)[0]
    // console.log(aclassName)
    var bclassName = $(this).parent().parent().attr('class').split(' ').slice(-3)[0]
    // console.log(bclassName)
    var cclassName = $(this).parent().parent().attr('class').split(' ').slice(-2)[0]
    // console.log(cclassName)
    var dclassName = $(this).parent().parent().attr('class').split(' ').slice(-1)[0]
    // console.log(dclassName)


    // 動的e+i 取得
    var eclassName = "e"+aclassName.slice(1)
    // console.log(eclassName)

    // 動的f+i 取得
    var fclassName = "f"+bclassName.slice(1)
    // console.log(fclassName)

    // 動的g+i 取得
    var gclassName = "g"+cclassName.slice(1)
    // console.log(gclassName)

    // 動的h+i 取得
    var hclassName = "h"+dclassName.slice(1)
    // console.log(hclassName)


    console.log($(this).parents(".task-container").find(`.${eclassName} .${fclassName} .${gclassName} .${hclassName}`).attr('class'))
    $(this).parents(".task-container").find(`.${eclassName} .${fclassName} .${gclassName} .${hclassName}`).remove();


    // layer-4-a をremove
    $(this).parent().parent().remove();
    
    resetClass(p)

    function resetClass(object) {

        var classVal = object.parent().attr('class')

        // 末尾のクラスを取る
        var lastclassName = classVal.split(' ').slice(-1)[0][0]
        console.log(lastclassName)

        // 末尾のクラスをcに変える
        className = String.fromCharCode(lastclassName.charCodeAt(0) + 1)
        console.log(className)

        i = 1
    
        console.log(object.attr('class'))
        object.find('.layer-4-a').each(function () {
            console.log($(this).attr('class'))
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])
            
            console.log((className + i))

            $(this).addClass(className + i)
         
            i++
        })

    }

    // hresetClass
    hresetClass(x)

    function hresetClass(object) {
        console.log(object.parent().find(".layer-4-b").attr('class'))
        console.log(object.find(".layer-4-b").attr('class'))
        
        i = 1
        
        object.children(`.${eclassName} .${fclassName}.${gclassName}`).each(function () {

            console.log($(this).attr('class'))
            console.log($(this).attr('class').split(' ').slice(-1)[0])
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            var hclassName = "h"
            $(this).addClass(hclassName + i)

            i++

        })
        
    }


});

$(document).on('click', '.remove5', function() {
    $(this).parents('.layer-5').remove();
});

$(document).on('click', '.remove6', function() {
    $(this).parents('.layer-6').remove();
});



$('.memo-btn').click(function() {
    $('.textarea-6').slideToggle(400);
    $(this).next().append()
    // $('.textarea-6').fadeToggle(3000);
});



// chat機能
$(document).on("click",".add-btn-layer-c", function () {
    var html = `
    <div class="scroll_position">
        <h2>chat</h2>
        <p>
            <a href="javascript:void(0)">list1</a>
            <a href="javascript:void(0)">list2</a>
            <a href="javascript:void(0)">list3</a>
            <a href="javascript:void(0)">list4</a>
            <a href="javascript:void(0)">list5</a>
        </p>
        <div class="scroll_div">
            
            <ul>
                <li>
                    <p id="list1">リスト1</p>
                    <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                </li>
                <li>
                    <p id="list2">リスト2</p>
                    <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                </li>
                <li>
                    <p id="list3">リスト3</p>
                    <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                </li>
                <li>
                    <p id="list4">リスト4</p>
                    <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                </li>
                <li>
                    <p id="list5">リスト5</p>
                    <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                </li>
            </ul>
        </div>
    </div>
    
    `;
    $('.task-container').parent().append(html);
    console.log($('.task-container').parent().attr('class'))

});

// 連動フォーカス
// $(".scroll_position a").click(function(){
//     var target = "#" + $(this).html();
//     var th = $(target).position();
//     var sh = $(".scroll_div").scrollTop();
//     var pos = th.top + sh;
//     $(".scroll_div").animate({scrollTop: pos},"slow", "swing");
//   });
 




  
// キーボードで操作
$(document).on('keydown', 'input', function(e) {

    // 上矢印キー
    if(e.keyCode==38){
        $(this).parent().parent().prev().find(".text").focus();
    } 

    // 下矢印キー
    if(e.keyCode==40){
        $(this).parent().parent().next().find(".text").focus();
    } 

    // Enterキー
    if(e.keyCode==13){
        
    } 

});
    

 
