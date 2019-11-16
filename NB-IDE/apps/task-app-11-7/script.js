// accordion機能
// header
    $('.btn-header-a').click(function() {
        $('.header-b').slideToggle(400);
        // $('.header-b').fadeToggle(3000);
    });
    $('.btn-header-b').click(function() {
        $('.header-a').slideToggle(400);
        // $('.header-b').fadeToggle(3000);
    });

    // アコーディオン機能
//.accordionがクリックされたら
$(document).on('click', '.accordion', function() {
 
    console.log($(this).next().slideToggle(400))
   
    $(this).toggleClass('open');
});




// task-app
// accordion
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
$('.layer-b').sortable();



$(document).on("click",".add-btn-layer-1", function () {
    var html = `
        <div class="layer-1-a">
            <input type="text" class="text-1" placeholder="layer-1=title">
            <input class="add-btn-layer-2" type="button" value="add" >
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
        
            <input class="check-1" type="checkbox">
            <input type="text" class="text-2" placeholder="layer-2=mission-1">
            <input class="add-btn-layer-3" type="button" value="add" >
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
       
        
        <h2>
            <!-- 入力連動(ココに出力されます) -->
        </h2>
        <p class="accordion article-title"></p>
        <ul class="layer-3-B">

        </ul>
        <script>$('.layer-3-B').sortable();</script>
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

    var eclassName = "e"+aclassName.slice(1)
    // console.log("e"+aclassName.slice(1))

    
    $(`.${eclassName}`).children(".layer-2-B").append(html);
    // ------------------------------------------------------
    $('.layer-b').css('padding','10px 10px');
    $('.layer-b').css('height','auto');


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
     
            <input class="check-1" type="checkbox">
            
            <!-- 入力連動 -->
            <input type="text" class="text text-3" placeholder="layer-3=mission-2">
            
            <input class="add-btn-layer-4" type="button" value="add" >
            <button class="remove3">-</button>
            <p class="accordion article-title"></p>
            <ul>

            </ul>
        </div>

    <!-- ソート機能 -->
        <script>
    
            $('.layer-2-a').sortable(); 
            

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
                
                console.log($(this).parent().attr('class'))
                var classVal = $(this).parent().attr('class')
                var aclassName = classVal.split(' ').slice(-3)[0]
                var bclassName = classVal.split(' ').slice(-2)[0]
                var cclassName = classVal.split(' ').slice(-1)[0]

                var eclassName = "e"+aclassName.slice(1)
                var fclassName = "f"+bclassName.slice(1)
                var gclassName = "g"+cclassName.slice(1)

                $(`.${eclassName} .${fclassName} .${gclassName}`).find('h2').text(str);

            }
        }
    }




//layer-3-b
    var html = `
        <div class="layer-3-b">
        
        <h2>
            <!-- 入力連動(ココに出力されます) -->
        </h2>
        <button class="remove3">-</button>
        <p class="accordion article-title"></p>
        <ul class="layer-4-B">

        </ul>

        <script>$('.layer-3-b').sortable();</script>
        <script>$('.layer-3-b ul').sortable();</script>
    `;

    // --------------------超重要----------------------------------
    // layer2-b子要素ulのclass .layer-3-Bに .layer-3-bを出力 


    // a1をe1に変える
    var classVal = ($(this).parent().attr('class'))
    // console.log(classVal)

    $(this).parent().attr('class').split(' ')
    
    var aclassName = classVal.split(' ')[3]
    // console.log(aclassName)

    var eclassName = "e"+aclassName.slice(1)
    // console.log("e"+aclassName.slice(1))


    // b1をf1に変える
    var classVal = ($(this).parent().attr('class'))
    
    $(this).parent().attr('class').split(' ')
    
    var bclassName = classVal.split(' ')[4]
    

    var fclassName = "f"+bclassName.slice(1)
    // console.log("f"+bclassName.slice(1))

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
       
            <input class="check" type="checkbox" name="check">

            <!-- 入力連動 -->
            <input type="text" class="text text-4" placeholder="layer-4=target">

            <tr>
                <td><button class="remove4">-</button></td>
            </tr>
        </div>
        <script>
            $('.layer-3-a ul').sortable(); 
        </script>
        
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
                
                console.log($(this).parent().attr('class'))
                var classVal = $(this).parent().attr('class')
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
 
        <h3>
            <!-- 入力連動(ココに出力されます) -->
        </h3>
        <input class="add-btn-3" type="button" value="add-btn-3" >
        <p class="accordion article-title"></p>
        <ul class="layer-5-B">

        </ul>
    </div>
    <script>
        $('.layer-4-b ul').sortable();
        
    </script>
    `;

    // --------------------超重要----------------------------------
    // layer3-b子要素ulのclass .layer-4-Bに .layer-4-bを出力 


    // 親クラスを取得
    var classVal = ($(this).parent().attr('class'))
    console.log(classVal)

    $(this).parent().attr('class').split(' ')
    
    // a1をe1に変える
    var aclassName = classVal.split(' ')[4]
    // console.log(aclassName)
    
    var eclassName = "e"+aclassName.slice(1)
    // console.log("e"+aclassName.slice(1))

    // b1をf1に変える
    var bclassName = classVal.split(' ')[5]

    var fclassName = "f"+bclassName.slice(1)
    // console.log("f"+bclassName.slice(1))

    // c1をg1に変える
    var cclassName = classVal.split(' ')[6]
    
    var gclassName = "g"+cclassName.slice(1)
    // console.log("g"+cclassName.slice(1))

    // var className = [eclassName,fclassName,gclassName];
    // console.log(className)

    $(`.${eclassName} .${fclassName} .${gclassName}`).children(".layer-4-B").append(html);
    // ------------------------------------------------------

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

//layer-6-b
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




// remove機能連動
// remove1
$(document).on('click', '.remove1', function() {
    
    // console.log($(this).parent().parent().parent().find('.layer-1-b'))
    
    // x = $(this).parent().parent().parent().find('.layer-b')

    
    p = $(this).parent().parent()
    x = $(this).parent().parent().parent().find(".layer-b")

    

    //  layer-1-b e+iをremove
    console.log($(this).parent().attr('class'))
    var aclassName = $(this).parent().attr('class').split(' ').slice(-1)[0]
    console.log(aclassName)

    var eclassName = "e"+aclassName.slice(1)
    console.log(eclassName)
    
    $(this).parent().parent().parent().find(`.${eclassName}`).remove();
    
    // layer-1-a a+iをremove
    $(this).parent('.layer-1-a').remove();


    
    // aresetClass
    aresetClass(p)
    function aresetClass(object) {
        // aを取得
        console.log(object.attr('class'))
        var classVal = object.attr('class')

        var aclassName = classVal.split(' ').slice(0)[0][1]
        console.log(aclassName)

        i = 1
        
        object.find('.layer-1-a').each(function () {
            console.log($(this).attr('class'))
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            console.log($(this).attr('class'))
            console.log((aclassName + i))
    
            $(this).addClass(aclassName + i)
            console.log($(this).attr('class'))

            i++
            
        })
    }

    // eresetClass
    eresetClass(x)
    function eresetClass(object) {

        i = 1
        
        console.log(object.parent().find('.layer-1-b'))
        object.parent().find('.layer-1-b').each(function () {
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            var eclassName = "e"
            $(this).addClass(eclassName + i)

            i++

        })
        
    }
    

});



// remove2
$(document).on('click', '.remove2', function() {

    p = $(this).parent().parent()
    console.log($(this).parents(".task-container").find(".layer-2-B").attr('class'))
    x = $(this).parents(".task-container").find(".layer-2-B")
    
    
    //  layer-2-b e+i f+iをremove
    console.log($(this).parent().attr('class'))
    var aclassName = $(this).parent().attr('class').split(' ').slice(-2)[0]
    // console.log(aclassName)
    var bclassName = $(this).parent().attr('class').split(' ').slice(-1)[0]
    // console.log(bclassName)

    // 動的e+i 取得
    var eclassName = "e"+aclassName.slice(1)
    // console.log(eclassName)

    // 動的f+i 取得
    var fclassName = "f"+bclassName.slice(1)
    // console.log(fclassName)

    console.log($(this).parents(".task-container").find(`.${eclassName} .${fclassName}`).attr('class'))
    $(this).parents(".task-container").find(`.${eclassName} .${fclassName}`).remove();
    
    // layer-2-a をremove
    $(this).parent('.layer-2-a').remove();

    resetClass(p)

    
    // fresetClass
    fresetClass(x)
    
    function fresetClass(object) {
        
        i = 1
        
        object.parent().find(`.${eclassName}`).each(function () {
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            var fclassName = "f"
            $(this).addClass(fclassName + i)

            i++

        })
    }

});


// remove3
$(document).on('click', '.remove3', function() {

    p = $(this).parent().parent()

    x = $(this).parents(".task-container").find(".layer-3-B")
    
    //  layer-3-b e+i f+i g+iをremove

    console.log($(this).parent().attr('class'))
    var aclassName = $(this).parent().attr('class').split(' ').slice(-3)[0]
    // console.log(aclassName)
    var bclassName = $(this).parent().attr('class').split(' ').slice(-2)[0]
    // console.log(bclassName)
    var cclassName = $(this).parent().attr('class').split(' ').slice(-1)[0]
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


    console.log($(this).parents(".task-container").find(`.${eclassName} .${fclassName} .${gclassName}`).attr('class'))
    $(this).parents(".task-container").find(`.${eclassName} .${fclassName} .${gclassName}`).remove();
    

    // layer-3-a をremove
    $(this).parent('.layer-3-a').remove();

    resetClass(p)

    // gresetClass
    gresetClass(x)
    
    function gresetClass(object) {
        
        i = 1
        
        object.parent().find(`.${fclassName}`).each(function () {
            
            $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])

            var gclassName = "g"
            $(this).addClass(gclassName + i)

            i++

        })
    }

});


// remove4
$(document).on('click', '.remove4', function() {

    p = $(this).parent().parent()

    x = $(this).parents(".task-container").find(".layer-4-B")
    // console.log(x)
    
    //  layer-3-b e+i f+i g+i h+iをremove

    // console.log($(this).parent().attr('class'))
    var aclassName = $(this).parent().attr('class').split(' ').slice(-4)[0]
    // console.log(aclassName)
    var bclassName = $(this).parent().attr('class').split(' ').slice(-3)[0]
    // console.log(bclassName)
    var cclassName = $(this).parent().attr('class').split(' ').slice(-2)[0]
    // console.log(cclassName)
    var dclassName = $(this).parent().attr('class').split(' ').slice(-1)[0]
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
    $(this).parent('.layer-4-a').remove();
    resetClass(p)


    // hresetClass
    hresetClass(x)
    
    function hresetClass(object) {
        
        i = 1
        
        object.parent().find(`.${gclassName}`).each(function () {
            
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




function resetClass(object) {
    // cを取得
    console.log(object.parent())
    var classVal = object.parent().attr('class')
    // bを取る
    var cclassName = classVal.split(' ').slice(-1)[0][0]
    // bをcに変える
    cclassName = String.fromCharCode(cclassName.charCodeAt(0) + 1)
    console.log(cclassName)

    i = 1
    object.find('div').each(function () {
        console.log($(this).attr('class'))
        $(this).removeClass($(this).attr('class').split(' ').slice(-1)[0])
        console.log($(this).attr('class'))
        console.log((cclassName + i))
        $(this).addClass(cclassName + i)
        console.log($(this).attr('class'))

        i++
    })


}