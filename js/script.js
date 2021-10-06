// JavaScript Document
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>80){
            $("#nav-1").addClass("navbar-fixed-top")
        }
        else{
            $("#nav-1").removeClass("navbar-fixed-top")
        }
        
        if($(window).scrollTop()>170){
            $("#navbar-phone").addClass("navbar-fixed-top-phone")
        }
        else{
            $("#navbar-phone").removeClass("navbar-fixed-top-phone")
        }
    })
    
    $("#btn-search").click(function(){
       $("#search-box").slideToggle(500)
    })
    
    
    $("#btn-filter").click(function(){
        $(".tim-kiem").show(500)
        $(".bg-opacity-50").fadeIn(250)
    });
    
    $("#btn-close-filter").click(function(){
        $(".tim-kiem").hide(250)
        $(".bg-opacity-50").fadeOut(250)
    });
    
    $("#btn-timsanpham").click(function(){
        $(".tim-kiem").hide(250)
        $(".bg-opacity-50").fadeOut(250)
    });
    
    $(".bg-opacity-50").click(function(){
        $(".tim-kiem").hide(250)
        $(".bg-opacity-50").fadeOut(250)
    });
    
    $(".cloud-zoom-gallery").click(function(){
        $(".cloud-zoom-gallery").removeClass("active")
        $(this).addClass("active")
    })
    
    $("#btn-xemtoanbo").click(function(){
        $(".tab-content").removeClass("height-200");
        $("#btn-rutgon").show();
        $("#btn-xemtoanbo").hide()
    });
    
    $("#btn-rutgon").click(function(){
        $(".tab-content").addClass("height-200");
        $("#btn-xemtoanbo").show()
        $("#btn-rutgon").hide()
    });
    
    $("#btn-xoasanpham-1").click(function(){
        $("#giohang-item-1").fadeOut(250);
    });
    
    $("#btn-xoasanpham-2").click(function(){
        $("#giohang-item-2").fadeOut(250);
    });
    
})