$("document").ready(function(){
    $(".m-btn").click(function(){
        $(this).toggleClass("on")
        $(".m-nav").toggleClass("on")
    })

    $(".font-box .icon").click(function(){
        $(this).toggleClass("on")
        $(".font-box ul").toggleClass("on")
    })


    let font = [
        "'S-CoreDream-3Light'",
        "'KyoboHandwriting2021sjy'",
        "'bitbit'",
        "'yg-jalnan'"
    ]
    $(".font-box ul li").mouseover(function(){
        let i = $(this).index();
        $("html").css("font-family", font[i])
    }).mouseout(function(){
        $("html").css("font-family", "")
    })
    $(".font-box ul li").click(function(){
        let i = $(this).index();
        if(i == 0){
            $("html").removeClass()
            localStorage.removeItem("font")
        }else{
            $("html").removeClass().addClass("font"+i);
            localStorage.setItem("font", "font"+i);
        }
    })

    $(".header .etc ul li ul li").click(function(){
        let i = $(this).index();
        if(i == 0){
            localStorage.setItem("language", "kr")
        }else{
            localStorage.setItem("language", "en")
        }
    })

    const font_list = localStorage.getItem("font");

    if(font_list != ''){
        $("html").addClass(font_list);
    }
    //!= 다르다면 == 같다면


    $("html").attr("data-dark", false);

    const dark_mode = localStorage.getItem("dark");
    console.log(dark_mode)

    if(dark_mode == "true"){
        $(".dark-btn i").removeClass("fa-moon").addClass("fa-sun")
        $("html").attr("data-dark", true);
        $(".header .etc ul li").eq(0).find("i").removeClass("fa-moon").addClass("fa-sun")
        $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");

    }else{
        $(".dark-btn i").removeClass("fa-sun").addClass("fa-moon")
        $("html").attr("data-dark", false);
        $(".contact-content .sns ul li img").attr("src", "images/talk.png");
        $(".header .etc ul li").eq(0).find("i").removeClass("fa-sun").addClass("fa-moon")
    }

    $(".header .etc ul li").eq(0).click(function(){
        $(".header .etc ul li").eq(0).find("i").toggleClass("fa-sun fa-moon")
        $(".dark-btn").eq(0).find("i").toggleClass("fa-sun fa-moon")
        if($("html").attr("data-dark") == "false"){
            $("html").attr("data-dark", true);
            localStorage.setItem("dark", true)
            $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");

        }else{
            $("html").attr("data-dark", false);
            localStorage.removeItem("dark")
            $(".contact-content .sns ul li img").attr("src", "images/talk.png");
        }
    })
    $(".dark-btn").click(function(){
        $(".header .etc ul li").eq(0).find("i").toggleClass("fa-sun fa-moon")
        $(".dark-btn").eq(0).find("i").toggleClass("fa-sun fa-moon")

        if($("html").attr("data-dark") == "false"){
            $("html").attr("data-dark", true);
            localStorage.setItem("dark", true)
            $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");

        }else{
            $("html").attr("data-dark", false);
            localStorage.removeItem("dark")
            $(".contact-content .sns ul li img").attr("src", "images/talk.png");
        }
    })

})