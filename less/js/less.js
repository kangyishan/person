$(document).ready(function(){
    function banner(){
        var t=setInterval(move,2000);
        var now=0;
        var next=0;
        function move(type){
            var type=type||"right";
            if(type=="right"){
                next=now+1;
                if(next>=($(".imgbox li").length)){
                    next=0;
                }
            }else if(type=="left"){
                next=now-1;
                if(next<0){
                    next=$(".imgbox li").size()-1;
                }
            }
            $(".imgbox li").eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1});
            $(".btn li").eq(now).removeClass().end().eq(next).addClass("first");
            now=next;
        }
        $(".imgbox").hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(move,3000)
        })
        $(".left,.right").on("click",function(){
            if($(this).is(".left")){
                move("left");
            }else{
                move("right");
            }
        })
        $(".btn li").mouseover(function(){
            next=$(this).index();
            $(".imgbox li").eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1});
            $(".btn li").eq(now).removeClass().end().eq(next).addClass("first");
            now=next;
        })
    }
    banner();
})