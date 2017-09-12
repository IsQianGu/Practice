/**
 * Created by Is千古 on 2016/11/20.
 */
(function (w) {
    'use strict';
    let isSearch=function (info,callback) {
        this.back=callback;
        this.search(info);
    };
    isSearch.prototype={
        search:function (i) {
            this.data=[];
            let url="http://songsearch.kugou.com/song_search_v2?callback=isJsonp&keyword="+i+"&page=1&pagesize=30&userid=-1&clientver=&platform=WebFilter&tag=em&filter=2&iscorrection=1&privilege_filter=0&_=1489023388641";
            this.ajax().jsonp(url,function (data) {
                console.log(data);
                for(let x=0;x<data.data.lists.length;x++){
                    let hashUrl="http://www.kugou.com/yy/index.php?r=play/getdata&hash="+data.data.lists[x].FileHash+"&album_id="+data.data.lists[0].AlbumID;
                    this.ajax().jsonp(hashUrl,function (data) {
                        console.log(data);
                    });
                }
                // this.Handle(data);
            }.bind(this));
        },
        Handle:function (data) {
            console.log(data);
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
                get: function (url,callback){
                    let obj=new XMLHttpRequest();
                    obj.open('GET',url,true);
                    obj.send();
                    obj.onreadystatechange=function(){
                        if (obj.readyState === 4 && obj.status === 200 || obj.status === 304) {
                            callback(obj.responseText);
                        }
                    };
                },
                post: function (url, data, callback) {
                    let obj = new XMLHttpRequest();
                    obj.open("POST", url, true);
                    obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    obj.onreadystatechange = function () {
                        if (obj.readyState === 4 && (obj.status === 200 || obj.status === 304)) {
                            callback(obj.responseText);
                        }
                    };
                    obj.send(data);
                },
                jsonp:function (url,callback) {
                    console.log(url);
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
                            jsonp.parentNode.removeChild(jsonp);
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