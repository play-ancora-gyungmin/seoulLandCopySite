$(function () {
    var $lnbList = $('.lnb_menu ul>li'),
        $lnbListSub = $('.lnb_menu ol>li'),
        $subH1 = $('#subH1'),
        $subH3S = $('#subH3>span'),
        $subcont = $('.subcont img')
    
    $lnbList.children('ol').hide()
    
    $lnbList.children('a').click(function (e) {
        e.preventDefault()
        var $this = $(this),
            hasSub = $this.next().is('ol')
        if(hasSub){
            $this.next('ol').slideDown(300)
                .parent('li').addClass('close')
        }
        $this.parent('li').addClass('selm')
            .siblings().removeClass('selm close')
            .find('ol').slideUp(300)
        $this.next('ol').children('li').removeClass().first().addClass("sfc")
        
        var sideTitle = $this.text()
        $subH3S.eq(2).text(sideTitle)
        if(hasSub){
            sideTitle = $this.next('ol').children('li')
                .first().text()
            $subH3S.eq(3).text("> "+sideTitle)
        }
        $subH1.text(sideTitle)
        
        var thisIndex = $this.parent().index(),
            subImg = "img_sub/sub0.png"
        if(hasSub){
            subImg = "img_sub/sub"+thisIndex+"_0.png"
        }else{
            subImg = "img_sub/sub"+thisIndex+".png"
        }
        $subcont.attr('src',subImg)
    })
    
    $lnbListSub.children('a').click(function (e) {
        e.preventDefault()
        var $this = $(this)
        $this.parent().addClass("sfc")
            .siblings().removeClass("sfc")
        
        var sideTitle = $this.text()
        $subH1.text(sideTitle)
        $subH3S.eq(3).text("> "+sideTitle)
        
        var parantIndex = $this.parents('.lnb_menu ul>li').index(),
            thisIndex = $this.parent().index(),
            subImg = "img_sub/sub"+parantIndex+"_"+thisIndex+".png"
        console.log(subImg);
        $subcont.attr('src',subImg)
    })
    
    
})