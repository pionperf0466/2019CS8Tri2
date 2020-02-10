for (var i = 1; i <= 100; i++) {

    var x = Math.floor(Math.random() * 1200);
    console.log(x);

    var y = Math.floor(Math.random() * 800);
    console.log(y);

    $('#starContainer').append("<div class='star' style='top:" + x + "px; left:" + y +"px;'></div>");
}