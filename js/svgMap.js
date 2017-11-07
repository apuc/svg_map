/**
 * Created by apuc0 on 06.11.2017.
 */
document.addEventListener("DOMContentLoaded", ready);
function ready() {
    var onMap = false;
    var plus = document.getElementById('plus');
    var minus = document.getElementById('minus');
    var svgMap = document.getElementById('svgMap');
    var mapBox = document.getElementById('mapBox');
    var body = document.getElementsByTagName('body')[0];

    // plus.onclick = function () {
    //     var w = svgMap.offsetWidth + 20;
    //     svgMap.style.width = w + 'px';
    //     mapBox.scrollBy(10,8)
    // };
    //
    // minus.onclick = function () {
    //     var w = svgMap.offsetWidth - 20;
    //     svgMap.style.width = w + 'px';
    // };

    // svgMap.onmouseover = function () {
    //     onMap = true;
    // };
    //
    // svgMap.onmouseout = function () {
    //     onMap = false;
    // };


    // if (mapBox.addEventListener) {
    //     if ('onwheel' in document) {
    //         // IE9+, FF17+, Ch31+
    //         //svgMap.onwheel = onWheel;
    //         mapBox.addEventListener("wheel", onWheel);
    //     } else if ('onmousewheel' in document) {
    //         // устаревший вариант события
    //         svgMap.addEventListener("mousewheel", onWheel);
    //     } else {
    //         // Firefox < 17
    //         svgMap.addEventListener("MozMousePixelScroll", onWheel);
    //     }
    // } else { // IE8-
    //     svgMap.attachEvent("onmousewheel", onWheel);
    // }
    //
    // function onWheel(e) {
    //     console.log(321);
    //     e = e || window.event;
    //
    //     // wheelDelta не дает возможность узнать количество пикселей
    //     var delta = e.deltaY || e.detail || e.wheelDelta;
    //
    //     console.log(delta);
    //
    //     //e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    // }
}

window.onload = function() {
    // Expose to window namespase for testing purposes
    window.zoomTiger = svgPanZoom('#svgMapFile', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true
        // viewportSelector: document.getElementById('demo-tiger').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
    });
};