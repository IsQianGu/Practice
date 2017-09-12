(function () {
    'use strict';
    let isAudio = window.$Au = window.isAudio = function (config) {
        return new isAudio.prototype.init(config);
    };
    isAudio.fn = isAudio.prototype = {
        init: function (config) {
            this.config=config;
            this.audioDom=null;
            this.count=0;
            this.randomArr=[];
            this.mediaData=Object();
            this.pattern="order";
            this.volSize=50;
            this.tools._this=this;
            this.audio(this.config.src[this.count],this.volSize);
            this.command.bind(this)();
            this.controller.bind(this)();
            return this.tools;
        },
        audio:function (url,vol) {
            this.audioDom? this.setUrl(url):this.createAudio(url);
            this.setVol(vol);
        },
        controller:function () {
            this.config.controller.bind(this.tools)(this.mediaData);
        },
        createAudio:function (url) {
            this.audioDom=this.createLabel("audio",{
                display:"none",
                margin:"auto"
            },{
                src:url? url:"",
                autoplay:this.config.autoPlay
            });
            this.config.dark? this.setInDom(this.audioDom):null;
        },
        setUrl:function (url) {
            this.setAttr({
                src:url
            },this.audioDom);
        },
        setVol:function (vol) {
            this.volSize=vol;
            this.audioDom.volume=vol/100;
        },
        setTime:function (ti) {
            this.audioDom.currentTime=ti;
        },
        createLabel:function (t,s,a) {
            return this.setAttr(a,this.setStyle(s,document.createElement(t)));
        },
        slide:function (r) {
            this.audioDom.style.display=r? "block":"none";
            this.audioDom.controls=r;
        },
        command:function () {
            this.countGet=this.count;
            let countTime=setInterval(function () {
                this.mediaData.url=this.audioDom.currentSrc;
                this.mediaData.name=this.config.info[this.count];
                this.mediaData.index=this.count;
                this.mediaData.loop=this.pattern;
                this.mediaData.state=!(this.audioDom.paused);
                this.mediaData.end=this.audioDom.ended;
                this.mediaData.time=this.audioDom.duration;
                this.mediaData.muted=this.audioDom.muted;
                this.mediaData.currentTime=this.audioDom.currentTime;
                this.mediaData.volsize=this.volSize;
                if(this.countGet!==this.count){
                    this.countGet=this.count;
                    this.audio(this.config.src[this.count],this.volSize);
                }
                if(this.audioDom.ended){
                    this.randomArr.length===this.config.src.length? this.randomArr=[]:null;
                    let ql=function(){
                        let s;
                        for(let a=0;a<2;){
                            s=parseInt(this.config.src.length * Math.random());
                            if(this.randomArr.indexOf(s)===-1&&s!==this.count){
                               a=3;this.randomArr.push(s)
                            }
                        }
                        return s
                    }.bind(this)();
                    this.pattern==="loop"? this.audio(this.config.src[this.count],this.volSize):this.pattern==="loopAll"? this.tools.next():this.pattern==="random"? this.tools.eq(ql):this.tools.next(true);
                }
                this.config.callback(this.mediaData);
            }.bind(this),100)
        },
        tools:{
            next:function (e) {
                if(this._this.count>=this._this.config.src.length-1){
                    e? this._this.count+=0:this._this.count=0;
                }else{
                    this._this.count++;
                }
            },
            prev:function () {
                if(this._this.count<=0){
                    this._this.count=this._this.config.src.length-1;
                }else{
                    this._this.count--;
                }
            },
            play:function () {
                this._this.audioDom.play();
            },
            pause:function () {
                this._this.audioDom.pause();
            },
            eq:function (e) {
                this._this.count=Number(e);
            },
            loop:function () {
                this._this.pattern="loop";
            },
            loopAll:function () {
                this._this.pattern="loopAll";
            },
            order:function () {
                this._this.pattern="order";
            },
            random:function () {
                this._this.pattern="random";
            },
            muted:function () {
                this._this.audioDom.muted = true
            },
            nomuted:function () {
                this._this.audioDom.muted = false
            },
            volume:function (val) {
                this._this.setVol(val)
            },
            time:function (val) {
                this._this.setTime(val)
            },
            show:function () {
                this._this.slide(true);
            },
            hide:function () {
                this._this.slide(false);
            },
            init:function (obj) {
                if(obj){
                    this._this.config.src=obj.src;
                    this._this.config.info=obj.info;
                }
                this._this.count=0;
                this._this.audio(this._this.config.src[this._this.count],this._this.volSize);
            }
        },
        setInDom:function (l) {
            this.config.dark.innerHTML="";
            this.config.dark.appendChild(l);
        },
        setAttr:function (a,d) {
            for(let x in a){
                d.setAttribute(x,a[x])
            }
            return d
        },
        setStyle: function (s, d) {
            let arrkey = [], arrname = [], reg = /[A-Z]/;
            for (let x in s) {
                arrkey.push(s[x]);
                arrname.push(x);
            }
            for (let i = 0; i < arrname.length; i++) {
                for (let j = 0; j < arrname[i].length; j++) {
                    if (reg.test(arrname[i][j])) {
                        arrname[i] = arrname[i].replace(arrname[i][j], "-" + arrname[i][j].toLowerCase());
                    }
                }
            }
            for (let k = 0; k < arrname.length; k++) {
                d.style.cssText += arrname[k] + ":" + arrkey[k];
            }
            return d
        },
    };
    isAudio.prototype.init.prototype=isAudio.prototype;
})();


