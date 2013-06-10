// # fileSearch.js
//
// Add a header with a link to the index.


// Wrap everything inside a closure so we don't get any collisions in
// the global scope
(function(){

    var domLoaded = function (callback) {
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        else {
            /* Safari, iCab, Konqueror */
            if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
                var DOMLoadTimer = setInterval(function () {
                    if (/loaded|complete/i.test(document.readyState)) {
                        callback();
                        clearInterval(DOMLoadTimer);
                    }
                }, 10);
            }
            else {
                /* Other web browsers */
                window.onload = callback;
            }
        }
    };

    var addHeader = function () {
        var container = document.getElementById('container');
        var header = document.createElement('div');
        header.setAttribute("id", "header");
        header.innerHTML = '<h1><a href="/">Developer</a></h1>';
        container.insertBefore(header, container.firstChild);
    };

    domLoaded(addHeader);
})();
