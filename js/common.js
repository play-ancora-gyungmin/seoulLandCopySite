//common.js

function topLineOver(topLineObj) {
    //topLineObj.setAttribute("class","top-line on");
    topLineObj.classList.add("on");
}

function topLineOut(topLineObj) {
    //topLineObj.setAttribute("class","top-line");
    topLineObj.classList.remove("on");
}

window.addEventListener("DOMContentLoaded",
    function () {
        console.log("Loaded");

        /* Top Line On-Off */
        var topGNB = document.getElementsByClassName("top-gnb")[0];
        var topLineObj = document.getElementsByClassName("top-line")[0];

        topGNB.addEventListener("mouseover", function () {
            console.log("Hover");
            topLineOver(topLineObj);
        });

        topGNB.addEventListener("mouseout", function () {
            console.log("Hout");
            topLineOut(topLineObj);
        });
    
        /* Banner Slide Show */
        
    });
