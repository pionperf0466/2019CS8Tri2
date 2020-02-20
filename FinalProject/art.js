$('#portrait').click(
    function(){
        $('#artWork').attr('src','images/Celebration of African Hair.jpg');
        var currDescription = $('.description',this).html();
        $('#description').html(currDescription);
    }
);

$('#cow').click(
    function(){
        $('#artWork').attr('src','images/abstractCow.jpg');
        var currDescription = $('.description',this).html();
        $('#description').html(currDescription);
    }
);
