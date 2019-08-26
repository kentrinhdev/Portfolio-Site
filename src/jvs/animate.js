'use strict';


function handleRunTypewriter() {
    setTimeout(typeText01, 1);
    setTimeout(typeText02, 2000);
    setTimeout(typeText03, 4000);
    setTimeout(typeText04, 6000);
    setTimeout(typeText05, 9000);
    setTimeout(typeText06, 12000);
    setTimeout(typeText07, 15000);
    setTimeout(typeText08, 18000);
    setTimeout(typeText09, 21000);
    setTimeout(typeText10, 24000);
}

function loopLogic(word, interval, wait) {
    $.each(word.split(''), function(i, letter) {
        setTimeout(function() {
            $('#introduction').html($('#introduction').html() + letter)
        }, interval * i);
    });

    let i = word.length;
    while(i >= 0) {
        setTimeout(function() {
            let text = $('#introduction').html();
            let length = text.length - 1;
            $('#introduction').html(text.substring(0, length));
        }, wait + (interval * i));
        i--;
    }
}

function typeText01() {
    let n = 0;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText02() {
    let n = 1;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText03() {
    let n = 2;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText04() {
    let n = 3;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText05() {
    let n = 4;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText06() {
    let n = 5;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText07() {
    let n = 6;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText08() {
    let n = 7;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText09() {
    let n = 8;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}

function typeText10() {
    let n = 9;
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);

    loopLogic(word, interval, wait);
}



function appStart() {
    // typeText();
    // typeText2();
    handleRunTypewriter();
}

$(appStart);

