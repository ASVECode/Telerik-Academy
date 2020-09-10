function alphabetPosition(text) {
    text.split(""); // split the text into an array
    var arr = []; // creates empty array
    var char = ""; // creates empty string
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //creates array with alphabet letters

    for (var i = 0; i < text.length; i++) { //
        char = text.charAt(i).toLowerCase(); // char = takes every each element from text array numbered from 0 to text.length
        if (alphabet.indexOf(char) > -1) { //checks if the taken symbol is an element of alphabet ( a letter) ; otherwise if its -1 it does not belong to the array
            arr.push(alphabet.indexOf(char) + 1); // adds to the arr each symbols number acc. to alphabet array

            var arr2 = arr.join(" "); // creates a string from arr
        } else {
            var arr2 = arr.join(" "); // for comas, spaces and other symbols, which are not letters it gives an empty space
        }

    }

    return arr2;
}
console.log(alphabetPosition('abvgd'))