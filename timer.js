function Timer () {
    var i = 1;
    var timer = setInterval(function() {
        console.log(i);
        i++;
        if(i > 10) {
            clearInterval(timer);
        }
    }, 1000);
}

var timer = new Timer();