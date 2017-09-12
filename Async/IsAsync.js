if (typeof window === "object") {
    (function (Global, Src) {
        let IsAsync = Global.IsAsync = function (AsyncCode) {
            return new IsAsync.prototype.init(AsyncCode);
        };
        IsAsync.prototype = {
            init: function (AsyncCode) {
                let work = new Worker(Src);
                work.postMessage({
                    Rely: AsyncCode.Rely,
                    Async: "(" + String(AsyncCode.Async) + ")(e.data.Rely)"
                });
                work.onmessage = function (data) {
                    AsyncCode.Callback(data.data);
                };
                return work;
            }
        };
        IsAsync.prototype.init.prototype = IsAsync.prototype;
    })(window, document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1].src);
} else {
    message = function message(data) {
        self.postMessage(data);
    };
    Stop = function Stop() {
        self.close();
    };
    onmessage = function onmessage(e) {
        eval(e.data.Async)
    };
}