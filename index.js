$("li").eq(0).css("background-color" , "tomato");
$("li").eq(1).css("background-color" , "red");
$("li").eq(2).css("background-color" , "teal");
$("li").eq(3).css("background-color" , "orange");
$("li").eq(4).css("background-color" , "black");
$("li").eq(5).css("background-color" , "09c");



$(".allboxes ul li").click(function(){
    let selectedcolor = $(this).css("background-color");
    $(".edite").css("color",selectedcolor)
})
$(".allboxes i").click(function(){
    let shika =$(".allboxes").css("right")
    if (shika == "0px")
    {
        let width = $(".allboxes ul").innerWidth()
        $(".allboxes").animate({right : `-${width}`},1000)
    }
    else
    {
        $(".allboxes").animate({right : `0px`},1000)
    }
})



$(window).scroll(function(){
    let scrollValue = $(window).scrollTop()

    if (scrollValue >= 300)
    {
        $(".navbar").removeClass("bg-transparent")
        $(".navbar").addClass(".BG");
        $(".navbar").parent().removeClass(".container")

    }
    else
    {
        $(".navbar").removeClass(".BG");
        $(".navbar").parent().addClass(".container")

    }
})