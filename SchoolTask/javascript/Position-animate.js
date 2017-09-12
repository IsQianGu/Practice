/**
 * Created by F588n on 2017/2/16.
 */
(function (w) {
    var query= function () {}
    query.prototype={
        animate: function (e,s,w,m,t) {
            function asd(){}
            var time=setInterval(asd,1000000000000000000),count=0;
            e.eq(s).hover(function () {
                clearInterval(time);var a=$(this);
                time=setInterval(function () {
                    if(count<w){
                        count+=m;
                        a.children(t).css({backgroundPosition:0+""+-count+"px"});
                    }else{
                        clearInterval(time);
                    }
                },20)
            }, function () {
                clearInterval(time);var a=$(this);
                time=setInterval(function () {
                    if(count>m){
                        count-=m;
                        a.children(t).css({backgroundPosition:0+""+-count+"px"});
                    }else{
                        clearInterval(time);
                    }
                },20)
            });
        },
        map_circle: function (s,e,v,t) {
            setInterval(map_core,e);
            function map_core(){
                s.eq(0).animate({width:v,height:v,top:-((v/2)-6),left:-((v/2)-6),borderRadius:v/2,opacity:0},4000, function () {
                    s.eq(0).css({width:12,height:12,top:0,left:0,borderRadius:6,opacity:1})
                });
                var time_one=setTimeout(function () {
                    s.eq(1).animate({width:v,height:v,top:-((v/2)-6),left:-((v/2)-6),borderRadius:v/2,opacity:0},4000, function () {
                        s.eq(1).css({width:12,height:12,top:0,left:0,borderRadius:6,opacity:1})
                    })
                },600);
                if(t){
                    var time_two=setTimeout(function () {
                        s.eq(2).animate({width:v,height:v,top:-((v/2)-6),left:-((v/2)-6),borderRadius:v/2,opacity:0},4000,function(){
                            s.eq(2).css({width:12,height:12,top:0,left:0,borderRadius:6,opacity:1})
                        })
                    },1800)
                }
            }
        }
    };
    return w.Position_animate= function () {
        return new query();
    }
})(window);
var data_img=$(".index_data_min>li"),apps_div=$(".apps_cont");
Position_animate().animate(data_img,0,10325,175,".index_data_min_img");
Position_animate().animate(data_img,1,10325,175,".index_data_min_img");
Position_animate().animate(data_img,2,10325,175,".index_data_min_img");
Position_animate().animate(data_img,3,10325,175,".index_data_min_img");
Position_animate().animate(data_img,4,10325,175,".index_data_min_img");
Position_animate().animate(apps_div,0,4425,75,"div");
Position_animate().animate(apps_div,1,4425,75,"div");
Position_animate().animate(apps_div,2,4425,75,"div");
Position_animate().animate(apps_div,3,4425,75,"div");
Position_animate().animate(apps_div,4,4425,75,"div");
Position_animate().animate(apps_div,5,4425,75,"div");
Position_animate().map_circle($(".data-cent-core-box>.meixi>div"),1000,110,true);
Position_animate().map_circle($(".data-cent-core-box>.meidong>div"),3000,110,true);
Position_animate().map_circle($(".data-cent-core-box>.ozhou>div"),2000,110,false);
Position_animate().map_circle($(".data-cent-core-box>.zhongdong>div"),3000,110,true);
Position_animate().map_circle($(".data-cent-core-box>.huabei>div"),2000,80,false);
Position_animate().map_circle($(".data-cent-core-box>.huanan>div"),2000,80,false);
Position_animate().map_circle($(".data-cent-core-box>.xianggang>div"),2000,80,false);
Position_animate().map_circle($(".data-cent-core-box>.huadong>div"),3000,200,true);
Position_animate().map_circle($(".data-cent-core-box>.riben>div"),2000,80,false);
Position_animate().map_circle($(".data-cent-core-box>.aodaliya>div"),5000,200,true);
Position_animate().map_circle($(".data-cent-core-box>.xinjiapo>div"),1000,110,true);