var words = ['dog', 'home', 'tower', 'around', 'security'];
var k=0;
var m=0;

function chooseWord () {
    return words[Math.floor(Math.random() * words.length)];
}
function blanksFromAnswer ( answerWord ) {  
    var result = ""; 
    for ( i in answerWord ) {
        result = "_ " + result;
    }
    return result;
}
function alterAt (n, c, originalString) {   
    return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
}
function letterGood (letter, answerWord) {
    var a = answerWord.split("") 
    for (var i = 0, q = 0; i < a.length; i ++) {
       q = a.indexOf(letter);
       if (q >= 0) {            
            a.splice(q, 1);
            return q 
        } else return q
    }
}

$(document).ready(function(){

    var ourWord = chooseWord();
    var shownWord = blanksFromAnswer(ourWord);
    $('#word').append(shownWord);
    $('form#new-letter').submit(function(e){
        var ourLetter = $("input#inputLetter").val();
        if (ourLetter.length == 1 && ourLetter !== "" && ourLetter !== " "){
            var current = $('#word').text();
            var index = letterGood(ourLetter, ourWord) 
                if (index >= 0){
                    m += 1;            
                    $('#word').empty().append(alterAt(2*index, ourLetter, current));
                    if(m == ourWord.length) {$('#itog').append('Вы выйгралі!')}
            
                } else {
                    k += 1;
                    $('#showWrong').append(ourLetter + ",    ");
                    $('#showIn').show();
                    $('#err'+ k).show();
                    if (k == 6) {$('#itog').append('Нажаль, вы прайгралі')}
                }
        }
        $("input#inputLetter").val('');
        e.preventDefault();
});
    
});