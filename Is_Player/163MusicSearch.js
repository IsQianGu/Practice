/**
 * Created by Is千古 on 2016/11/20.
 */
(function (w) {
    'use strict';
    let isSearch=function (info,callback) {
        this.back=callback;
        this.search(info,100);
    };
    isSearch.prototype={
        search:function (i,c) {
            let url="http://s.music.163.com/search/get/?src=lofter&type=1&filterDj=true&s="+i+"&limit="+c+"&offset=0&callback=isJsonp";
            this.ajax().jsonp(url,function (data) {
                this.Handle(data);
            }.bind(this));
        },
        Handle:function (data) {
            this.result=[];
            for(let i=0;i<data.result.songs.length;i++){
                let obj={
                    name:data.result.songs[i].name,
                    src:data.result.songs[i].audio
                };
                this.result.push(obj);
            }
            this.callback();
        },
        callback:function () {
            this.back(
                this.result
            );
        },
        ajax:function () {
            return {
                jsonp:function (url,callback) {
                    window.isJsonSign=false;
                    window.isJsonp=function (msg) {
                        return window.isJsonp=msg,window.isJsonSign=true;
                    };
                    let jsonp=document.createElement("script");
                    jsonp.src=url;
                    document.getElementsByTagName("body")[0].appendChild(jsonp);
                    let iSign=setInterval(function () {
                        if(window.isJsonSign){
                            callback(window.isJsonp);
                            window.isJsonSign=false;
                            clearInterval(iSign);
                            iSign=null;
                        }
                    });
                }
            }
        },
        jsonp:function (msg) {
            console.log(msg);
        }
    };
    return w.isSearch=function (i,c) {
        return new isSearch(i,c)
    }
})(window);