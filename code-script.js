var linebreak = document.createElement("br");
var codeToPrint = "#include <iostream> <br> \
#include <cstring> <br> \
#include <vector> <br> \
#include <algorithm> <br> \
using namespace std; <br> \
";
const delay = ms => new Promise(res => setTimeout(res, ms));
const print_code = async () => {
    document.getElementById("left-code-column").innerHTML = "";
    var word = "";
    for (var i = 0; i < codeToPrint.length; ++i) {
        while (codeToPrint[i] != " ") {
            word += codeToPrint[i++];
        }
        if (word == "<br>") {
            document.getElementById("left-code-column").appendChild(linebreak);
        } else {
            for (j in word) {
                document.getElementById("left-code-column").innerHTML += word[j];
                await delay(50);
            }
            document.getElementById("left-code-column").innerHTML += " ";
        }
        word = "";
    }
}
print_code();