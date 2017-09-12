$(".head_top_max").load("hyperlink/index-head-load.html");
$(".index_bottom_max").load("hyperlink/index-bottom.html");
$(".index_banner_max").mousemove(function (e) {
    clearInterval(banner_one_time);
    banner_one_time=false;
    var type_x = e.originalEvent.x || e.originalEvent.layerX || 0;
    var type_y = e.originalEvent.y || e.originalEvent.layerY || 0;
    var o3d=$(".index_banner_3d>div:nth-child(2)");
    if(type_y<600){
        if(type_x<127){
            o3d.css({transform: "rotateX("+-type_y/40+"deg)"+""+"rotateY("+type_x/70+"deg)"});
        }
        o3d.css({transform: "rotateX("+type_y/40+"deg)"+""+"rotateY("+-type_x/70+"deg)"});
    }else{
        if(type_x<127){
            o3d.css({transform: "rotateX("+-type_y/40+"deg)"+""+"rotateY("+type_x/70+"deg)"});
        }
    }
});
var banner_one_count= 0,banner_one_time=setInterval(index_banner_one_setinsetInterval,5000);
$(".index_3dbanner_link>li").click(function () {
    index_banner_one(banner_one_count=$(this).index());
});
function index_banner_one_setinsetInterval(){
    if(banner_one_count===4){banner_one_count=-1}
    index_banner_one(++banner_one_count);
};
function index_banner_one(e){
    $(".index_3dbanner_link>li").eq(e).addClass("index_3dbanner_link_click").siblings("li").removeClass("index_3dbanner_link_click");
    $(".index_banner_max>div").eq(e).removeClass("fadeOutDown").addClass("fadeInUp").siblings("div").removeClass("fadeInUp").addClass("fadeOutDown");
};
$(".index_banner_max").hover(function () {
    clearInterval(banner_one_time);
    banner_one_time=false;
}, function () {
    if(banner_one_time!=true){banner_one_time=setInterval(index_banner_one_setinsetInterval,5000);}
    $(".index_banner_3d>div:nth-child(2)").css({transform: "rotateX("+0+"deg)"+""+"rotateY("+0+"deg)"});
});
$(".aliyun_company_body>ul>li").hover(function () {
    company_body_card($(this));
}, function () {

});
company_body_card($(".aliyun_company_body>ul>li").eq(0));
function company_body_card(e){
    e.addClass("company_open").siblings("li").removeClass("company_open");
    e.find(".body_down").stop().fadeOut(0).next().stop().fadeIn(300);
    e.siblings().find(".open_body_down").stop().fadeOut(0).prev().stop().fadeIn(300);
};
$(".index_banner_two_max").hover(function () {
    index_banner_tow_btn_hover($(this),0);
}, function () {
    index_banner_tow_btn_hover($(this),-50);
});
function index_banner_tow_btn_hover(e,v){
    e.children(".btn").eq(0).stop().animate({left:v},300).next(".btn").stop().animate({right:v},300)
};

(function () {
    var index_banner_two_count= 1,kkk=$(".index_banner_two_max>ul"),owidth=$(window).width()/5;
    kkk.css({width:owidth*16,left:-owidth*5}).children("li").css({width:owidth});
    $(".banner_two_right").click(function () {
        index_banner_two_count++;
        if(index_banner_two_count==3){
            kkk.animate({left:-(index_banner_two_count*owidth* 5-(owidth* 4))},300, function () {
                kkk.css({left:0});
                index_banner_two_count=0;
            });
        }else{
            kkk.animate({left:-index_banner_two_count*owidth* 5},300);
        }
    }).prev(".banner_two_left").click(function () {
        index_banner_two_count--;
        if(index_banner_two_count<0){
            index_banner_two_count=2;
            kkk.animate({left:-(3*owidth* 5-(owidth*4))},0, function () {
                kkk.animate({left:-3*2*owidth},300);
            });
        }else{
            kkk.animate({left:-index_banner_two_count*owidth* 5},300);
        }
    });
})();




