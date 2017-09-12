
    $(".top_middle>ul:nth-child(2)>li").hover(function () {
        line_Slide($("#top_line_li"),$(this));
        top_menu_slide($(this).index());
        $(".top_max").hover(function () {},function(){
            top_menu_slide(true,true);
        });
    });
    $(".top_menu_body_one>ul>li").hover(function () {
        backgroundSlide($(".slide_div").eq(0),$(this).index(),true);
        //if($(this).index()!=0){
            product_ajax($(".top_menu_body_one_body_two>ul"),1,$(this).index())
        //}

    });

    $(".top_menu_body_one_body>ul>li").hover(function () {
        backgroundSlide($(".slide_div").eq(1),$(this).index());
        product_ajax($(this).index(),$(".top_menu_body_one_body>div:nth-child(3)"),10);
    }, function () {

    });

    function top_menu_slide(e,s){
        if(s){
            $(".top_menu>div").css({display:"none"});
            $(".top_menu").stop().slideUp(400);
        }else{
            var a=-1;
            switch (e){
                case 1:a=0;break;
                case 2:a=1;break;
                case 3:a=2;break;
                case 5:a=3;break;
                case 6:a=4;break;
                case 8:a=5;break;
                case 10:break;
                default:top_menu_slide(true,true);
            }
            if(a!=-1){
                $(".top_menu").stop().slideDown(300);
                $(".top_menu>div").eq(a).css({display:"block"}).siblings("div").css({display:"none"});
            }
        }
    };

    backgroundSlide($(".slide_div").eq(0),0,true);
    function backgroundSlide(e,v,t){
        e.stop().animate({top:v*40},100);
        if(t){
            $(".top_menu_body_one>div").eq(v+1).css({display:"block"}).siblings("div").css({display:"none"})
        }
    };

    function line_Slide(e,v){
            if(v.index()<9){
                let a=0;
                for(let i=0;i<v.index();i++){
                    a+=v.parent().children().eq(i).width();
                }
                e.stop().animate({width: v.width(),left:a},200);
            }
    };
    product_ajax(0,$(".top_menu_body_one_body>div:nth-child(3)"),10);
    function product_ajax(e,t,v){
        var ajax=new XMLHttpRequest();
        ajax.open('GET',"./json_data/tsconfig.txt",true);
        ajax.send();
        ajax.onreadystatechange=function(){
                if(ajax.readyState===4){
                    if(ajax.status===200){
                        switch (v){
                            case 10:ajax_product_one(ajax); break;
                            case 1:ajax_product_two(ajax); break;
                            //case 2:ajax_product_three(ajax); break;
                            //case 3:ajax_product_four(ajax); break;
                        }
                    }
                }
            };
        function init(e,ohtml){
            let reg=/\{#(\w+)#\}/g;
            return document.getElementById(e).innerHTML.replace(reg,function(match,$1){
                return ohtml[$1]===undefined?'':ohtml[$1];
            });
        };
        function ajax_product_one(ajax){
            let data=JSON.parse(ajax.responseText),company_date=data.product_data[e].data,thtml="";
                for(let i=0;i<company_date.length;i++){
                    let html=init("text_template",company_date[i]);
                    thtml+=html;
                }
                t.html(thtml);
        };
        function ajax_product_two(ajax){
            for(let i= 0;i<4;i++){
                var sss="product_data_two";
                let data=JSON.parse(ajax.responseText),company_date=data[sss][i].data,thtml="";
                for(let i=0;i<company_date.length;i++){
                    let html=init("menu_one_two_template",company_date[i]);
                    thtml+=html;
                }
                e.eq(i).html(thtml);
            }
        };
        //function ajax_product_three(ajax){
        //
        //
        //};
        //function ajax_product_four(ajax){
        //
        //};
    };



