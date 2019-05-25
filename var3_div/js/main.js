"use strict"
window.addEventListener('DOMContentLoaded', documentReady, false);

function documentReady() {
    var dateCurr = new Date;
    var dateStart = new Date(2019, 5, 21);
    var start = dateStart.getTime();



    if (dateStart > dateCurr) {
        updateTime();
        setInterval(updateTime, 1000);
    }

    function updateTime() {
        var dateCurr = new Date;
        var curr = dateCurr.getTime();
        var secAll = (start - curr) / 1000;
        var minAll = secAll / 60;
        var hourAll = minAll / 60;

        var day = Math.floor(hourAll / 24);
        var hour = Math.floor(hourAll % 24);
        var min = Math.floor(minAll % 60);

        document.getElementById('days').textContent = str2(day,2);
        document.getElementById('hours').textContent = str2(hour,2);
        document.getElementById('minutes').textContent = str2(min, 2);

        function str2(val,len) {
            var strVal=val.toString();
            while ( strVal.length < len )
                strVal='0'+strVal;
            return strVal;
        }
    }
}
