var body = {
    setColor : function(color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color)
    },
    setBackgroundColor : function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color)
    },
}
var input = {
    setValue : function(DNChange) {
        // var day_night = document.querySelectorAll('.day_night');
        // var i = 0
        // while(i < day_night.length) {
        //     day_night[i].value = DNChange; 
        //     i = i + 1;
        // }
        $('.day_night').val(DNChange);
    }
}
function dayNightHandler(self) {
    if (self.value === 'Night') {
        body.setBackgroundColor('rgb(0,0,0,0.85');
        body.setColor('white');
        input.setValue('Day')
    } else {
        body.setBackgroundColor('white')
        body.setColor('black')
        input.setValue('Night')
    }
}