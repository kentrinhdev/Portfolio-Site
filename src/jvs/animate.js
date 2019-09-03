'use strict';

function clearIntroduction() {
    $('#introduction').empty();
}

function handleRunTypewriter() {
    setTimeout(clearIntroduction, 500);
    setTimeout(typeText01, 2000);
    setTimeout(typeText02, 5000);
    setTimeout(typeText03, 8000);
    setTimeout(typeText04, 11000);
    setTimeout(typeText05, 14000);
    setTimeout(typeText06, 17000);
    setTimeout(typeText07, 20000);
    setTimeout(typeText08, 23000);
    setTimeout(typeText09, 26000);
    setTimeout(typeText10, 30000);
    setTimeout(typeText11, 33000);
    setTimeout(typeText12, 36000);
    setTimeout(typeText13, 39000);
    setTimeout(typeText14, 41000);
    setTimeout(typeText15, 44000);
    setTimeout(typeText16, 47000);
    setTimeout(loadQuotes, 50000);
}

function loadQuotes() {
    let max = QTE.length;
    console.log(max);
    let rn = Math.floor(Math.random() * max);
    console.log(rn);
    $('#introduction').hide().html(QTE[rn]).fadeIn(3000);
    $('#author').hide().html(ATH[rn]).fadeIn(5000);
    console.log(QTE[rn]);
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

function setTypewriterInterval(n) {
    let word = TXT[n];
    var interval = 200;
    var wait = interval + (interval * word.length);
    loopLogic(word, interval, wait);
}

function typeText01() {
    let n = 0;
    setTypewriterInterval(n);
}

function typeText02() {
    let n = 1;
    setTypewriterInterval(n);
}

function typeText03() {
    let n = 2;
    setTypewriterInterval(n);
}

function typeText04() {
    let n = 3;
    setTypewriterInterval(n);
}

function typeText05() {
    let n = 4;
    setTypewriterInterval(n);
}

function typeText06() {
    let n = 5;
    setTypewriterInterval(n);
}

function typeText07() {
    let n = 6;
    setTypewriterInterval(n);
}

function typeText08() {
    let n = 7;
    setTypewriterInterval(n);
}

function typeText09() {
    let n = 8;
    setTypewriterInterval(n);
}

function typeText10() {
    let n = 9;
    setTypewriterInterval(n);
}

function typeText11() {
    let n = 10;
    setTypewriterInterval(n);
}

function typeText12() {
    let n = 11;
    setTypewriterInterval(n);
}

function typeText13() {
    let n = 12;
    setTypewriterInterval(n);
}

function typeText14() {
    let n = 13;
    setTypewriterInterval(n);
}

function typeText15() {
    let n = 14;
    setTypewriterInterval(n);
}

function typeText16() {
    let n = 15;
    setTypewriterInterval(n);
}

function blinkElement() {
    $('#seemore').fadeOut(500);
    $('#seemore').fadeIn(500);
}

function showRandomBinary() {
    let max = 2;
    let rn = Math.floor(Math.random() * max);
    $('#binary1').hide().html(rn).slideDown(1000);
    rn = Math.floor(Math.random() * max);
    $('#binary2').hide().html(rn).slideDown(3000);
    rn = Math.floor(Math.random() * max);
    $('#binary3').hide().html(rn).slideDown(1000);
    rn = Math.floor(Math.random() * max);
    $('#binary4').hide().html(rn).slideDown(3000);
    rn = Math.floor(Math.random() * max);
    $('#binary5').hide().html(rn).slideDown(1000);
    rn = Math.floor(Math.random() * max);
    $('#binary6').hide().html(rn).slideDown(3000);
}

function animateMoreImage() {
    $("#seemore").fadeOut(1000).fadeIn(3000);
    setTimeout(animateMoreImage,2000);
}

function hover(element) {
    element.setAttribute('src', '/src/img/arrdwng.png');
}

function unhover(element) {
    element.setAttribute('src', '/src/img/arrdwn.png');
}


function appStart() {
    handleRunTypewriter();
    showRandomBinary();
    // setInterval(blinkElement, 2000);
    animateMoreImage();
}

$(appStart);
