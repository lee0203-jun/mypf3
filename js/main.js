$(function(){

    $('.btn_list li').on('click',function(){

        var i = $(this).index();
        
        $('.btn_list li').removeClass('on');
        $(this).addClass('on');

        $('.btn_list li').removeClass('active');
        $(this).addClass('active');

        //

        $('.title li').removeClass('on');
        $('.title li').eq(i).addClass('on');

        //

        $('.pic p').removeClass('on');
        $('.pic p').eq(i).addClass('on');

        $('.box_list li').removeClass('on');
        $('.box_list li').eq(i).addClass('on');

        $('.bgimg li').removeClass('on');
        $('.bgimg li').eq(i).addClass('on');


    });//click



});//doc