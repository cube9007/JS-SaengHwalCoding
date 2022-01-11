function dayNightHandler(self) {
    function bodySetBackgroundColor(color) {
            document.querySelector('body').style.backgroundColor = color;
        };
    function bodySetColor(color) {
        document.querySelector('body').style.color = color;
    };
    if (self.value === 'Night') {
        bodySetBackgroundColor('rgb(0,0,0,0.85');
        bodySetColor('white');
        var day_night = document.querySelectorAll('.day_night');
        var i = 0
        while(i < day_night.length) {
            day_night[i].value = 'Day'; 
            i = i + 1;
        }
    } else {
        bodySetBackgroundColor('white')
        bodySetColor('black')
        var day_night = document.querySelectorAll('.day_night');
        var i = 0
        while(i < day_night.length) {
            day_night[i].value = 'Night'; 
            i = i + 1;
        }
    }
}