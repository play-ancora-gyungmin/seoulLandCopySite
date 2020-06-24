//Seoul Land Index page mine-bulit.js

//jQuery Code
$(function () {
    var today = new Date(), 
        month = today.getMonth()+1,
        date = today.getDate(),
        dayCount = today.getDay(),
        week = ["일","월","화","수","목","금","토"],
        day = week[dayCount]
    
    var $month = $('.today .month'),
        $date = $('.today .date'),
        $day = $('.today .day')
    $month.text(month)
    $date.text(date)
    $day.text(day)
    
    var $FSSelector = $('#family-site'),
        url
    $FSSelector.change(function(){
        var $thisVal = $(this).val();
        switch($thisVal) {
            case "pizza":
                url = "http://www.icpk.co.kr/"
                break;
            case "rose":
                url = "http://www.irosehill.co.kr/"
                break;
            default:
                return 0;
        }
        window.open().location.href = url;
    })
})//jQuery Code

//load
window.addEventListener("DOMContentLoaded", function () {
    ////console.log("loaded")
    /*------------main banner move------------*/
    var bannerBtn = document.querySelectorAll(".banner-btn")
    var bannerMain = document.querySelectorAll(".banner-slide>li")
    var bannerBulit = document.querySelectorAll('.banner-bulit img');


    /* moveMain */
    var mainNum = 0
    var mainProt = 0 // 0 ok 1 no
    var moveMain = function (dirValue,bulitSeq) { // 0-left / 1-right
        if (mainProt === 1) {
            ////console.log("wait")
            return 0
        }
        mainProt = 1
        ////console.log(dirValue)
        bannerMain[mainNum].classList.remove("show")
        bannerBulit[mainNum].setAttribute("src", "./resorces/bulit.png")
        
        //mainNum
        if (dirValue === 1) {
            mainNum++
            if (mainNum === bannerMain.length) mainNum = 0
        } else if (dirValue === 0) {
            mainNum--
            if (mainNum === -1) mainNum = bannerMain.length - 1
        } else if (dirValue === 2) {
            mainNum = bulitSeq
        }//mainNum
        
        bannerMain[mainNum].classList.add("show")
        bannerBulit[mainNum].setAttribute("src", "./resorces/bulit_selected.png")
        setTimeout(function () {
            mainProt = 0
        }, 500)
    } /* moveMain */

    /*mainAuto*/
    var mainInterval
    var mainAuto = function () {
        ////console.log("mainAuto")
        mainInterval = setInterval(function () {
            moveMain(1,0)
        }, 3000)
    }
    var mainTimeout
    var stopSlide = function () {
        ////console.log("stopSlide")
        clearInterval(mainInterval)
        clearTimeout(mainTimeout)
        mainTimeout = setTimeout(mainAuto, 7000)
    }
    /*mainAuto*/
    mainAuto();

    /* button click event/.banner-btn */
    bannerBtn[1].addEventListener("click", function () {
        ////console.log("click right")
        stopSlide()
        moveMain(1,0)
    })

    bannerBtn[0].addEventListener("click", function () {
        ////console.log("click left")
        stopSlide()
        moveMain(0,0)
    })

    var clickMainBulit = function(bulitSeq){
        return function(){
            //console.log("click" + bulitSeq)
            stopSlide()
            moveMain(2,bulitSeq)
        }
    }
    for (var i=0;i<bannerBulit.length;i++){
        bannerBulit[i].onclick = clickMainBulit(i)
    }
    
    /*------------side tile move------------*/
    var sideBtn = document.querySelectorAll('.side-tile-btn a')
    var sideTile = document.querySelector('.side-tile ul')
    var sideTileList = document.querySelectorAll('.side-tile ul li')
    console.log(sideTileList.length)
    var sideProt = 0
    
    var moveSide = function (togg) {
        if (sideProt === 1) {
            console.log("wait")
            return 0
        }
        sideProt = 1
        sideTileList = document.querySelectorAll('.side-tile ul li')
        if (togg === 1) {
            console.log("right")
            sideTile.style.top = "-92px"
            sideTile.style.transition = ".8s ease-in-out"
            setTimeout(function () {
                sideTile.appendChild(sideTileList[0])
                sideTile.style.top = "0"
                sideTile.style.transition = "none"
            }, 800)
        } else if (togg === 0) {
            console.log("left")
            sideTile.insertBefore(sideTileList[sideTileList.length - 1], sideTileList[0])
            sideTile.style.top = "-92px"
            sideTile.style.transition = "none"
            setTimeout(function () {
                sideTile.style.transition = ".8s ease-in-out"
                sideTile.style.top = "0"
            }, 10)
        }
        
        setTimeout(function () {
            sideProt = 0
        }, 900)
    }
    
    /*mainAuto*/
    var sideInterval
    var sideAuto = function () {
        ////console.log("mainAuto")
        sideInterval = setInterval(function () {
            moveSide(1)
        }, 3000)
    }
    var sideTimeout
    var stopSlide = function () {
        ////console.log("stopSlide")
        clearInterval(sideInterval)
        clearTimeout(sideTimeout)
        sideTimeout = setTimeout(sideAuto, 6000)
    }
    /*mainAuto*/
    sideAuto();
    
    sideBtn[1].onclick = function () {
        console.log("down click")
        moveSide(1)
        stopSlide()
    }
    
    sideBtn[0].onclick = function () {
        console.log("up click")
        moveSide(0)
        stopSlide()
    }
    
    /*------------sns panel select------------*/
    var spTabTitle = document.querySelectorAll('.sp-tab-title li')
    var spTabCont = document.querySelectorAll('.sp-tab-cont li')
    var spNum = 0;
    var spTabChange = function (num) {
        console.log("1")
        return function () {
            spTabTitle[spNum].classList.remove("on")
            spTabCont[spNum].classList.remove("on")
            spTabTitle[num].classList.add("on")
            spTabCont[num].classList.add("on")
            spNum = num
        }
    }
    
    for(var i=0;i<spTabTitle.length;i++){
        spTabTitle[i].onclick = spTabChange(i);
    }/*for*/
    
    
}) //load
