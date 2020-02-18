$('#landscape').click(
    function(){
        $('#artWork').attr('src','images/placeHolder.jpg');

    }
);

$('#cow').click(
    function(){
        $('#artWork').attr('src','images/abstractCow.jpg');
        var currDescription = $('.description',this).text();
        $('#description').text(currDescription);
    }
);
