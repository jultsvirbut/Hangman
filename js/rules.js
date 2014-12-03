// This array holds the words we are going to choose from.
// Feel free to add new words!
var words = ['cat', 'tree', 'swing', 'around', 'scientist'];
var incorrLetters =[];

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
//есть ли элемент y в строке x
/*function eInArray (x, y) {
    var a = x.split(""), b = y.split("");
    for (var i = 0, q = 0; i < b.length; i++){
        q = a.indexOf(b[i]);
        if (q >=0)
            a.splice(q, 1); }
    return q >= 0;
}*/
//n - индекс, на с заменяем в originalString
function alterAt ( n, c, originalString ) {   
    return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
}
function insertLetter (letter, answerWord, result) {
    var a = answerWord.split("") 
    for (var i = 0, q = 0; i < a.length; i ++) {
       q = a.indexOf(letter);
       if (q >= 0) {
            //заменить в резальт _ на эту букву
            a.splice(q, 1);
            
            result = alterAt(2*q, letter, result)
       } else {
          //добавить в массив неправильных букв
        letter += incorrLetters;
       }
       return result }
}






