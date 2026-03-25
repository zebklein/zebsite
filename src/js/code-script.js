// This script prints the three strings below to the 'Code' page using the DOMWriter function.

//#region anagrams
var anagrams = "\
/// Anagram Name Generator /// <br> \
#include <iostream> <br> \
#include <cstring> <br> \
#include <vector> <br> \
#include <algorithm> <br> \
using namespace std; <br> \
string toLower(string s) { <br> \
    for (int i = 0; i < s.size(); ++i) { <br> \
        s[i] = tolower(s[i]); <br> \
    } <br> \
    return s; <br> \
} <br> \
vector<int> constructIntArr(string s) { <br> \
    string alphabet = \"abcdefghijklmnopqrstuvwxyz\"; <br> \
    vector<int> nameArr; <br> \
    for (int i = 0; i < s.size(); ++i) { <br> \
        for (int j = 0; j < 26; ++j) { <br> \
            if (s[i] == alphabet[j]) { <br> \
                nameArr.push_back(j); <br> \
                break; <br> \
            } <br> \
        } <br> \
    } <br> \
    return nameArr; <br> \
} <br> \
<br> \
void printIntVector(vector<int> v) { <br> \
    for (int i = 0; i < v.size(); ++i) { <br> \
        cout << v[i] << \" \"; <br> \
    } <br> \
    cout << endl; <br> \
} <br> \
<br> \
vector<int> incrementVector(vector<int> v) { <br> \
    for (int i = 0; i < v.size(); ++i) { <br> \
        if (++v[i] == 26) v[i] = 0; <br> \
    } <br> \
    return v; <br> \
} <br> \
<br> \
vector<char> intArrToCharArr(vector<int> v) { <br> \
    string alphabet = \"abcdefghijklmnopqrstuvwxyz\"; <br> \
    vector<char> s; <br> \
    for (int i = 0; i < v.size(); ++i) { <br> \
        for (int j = 0; j < 26; ++j) { <br> \
            if (v[i] == j) { <br> \
                s.push_back(alphabet[j]); <br> \
                break; <br> \
            } <br> \
        } <br> \
    } <br> \
    return s; <br> \
} <br> \
<br> \
string intArrToString(vector<char> v) { <br> \
    string s(v.begin(), v.end()); <br> \
    return s; <br> \
} <br> \
<br> \
bool checkForObscureLetter(string s) { <br> \
    string obscure = \"qvzxj\"; <br> \
    for (int i = 0; i < s.size(); ++i) { <br> \
        for (int j = 0; j < obscure.size(); ++j) { <br> \
            if (s[i] == obscure[j]) return true; <br> \
        } <br> \
    } <br> \
    return false; <br> \
} <br> \
<br> \
bool isVowel(char c) { <br> \
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y') return true; <br> \
    else return false; <br> \
} <br> \
bool isTrueVowel(char c) { <br> \
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') return true; <br> \
    else return false; <br> \
} <br> \
bool hasBadDouble(string s) { <br> \
    for (int i = 0; i < s.size() - 1; ++i) { <br> \
        if (s[i] == 'k' && s[i + 1] == 'k') return true; <br> \
        if (s[i] == 'k' && s[i + 1] == 'b') return true; <br> \
        if (s[i] == 'k' && s[i + 1] == 'p') return true; <br> \
        if (s[i] == 'b' && s[i + 1] == 'p') return true; <br> \
        if (s[i] == 'b' && s[i + 1] == 'k') return true; <br> \
        if (s[i] == 'p' && s[i + 1] == 'k') return true; <br> \
        if (s[i] == 'p' && s[i + 1] == 'b') return true; <br> \
        <br> \
        if (!isVowel(s[i]) || s[i] == 'o') continue; <br> \
        if (s[i] == s[i+1]) return true; <br> \
        if (s[i] == 'a' && s[i + 1] == 'o') return true; <br> \
        if (s[i] == 'a' && s[i + 1] == 'u') return true; <br> \
        if (s[i] == 'a' && s[i + 1] == 'e') return true; <br> \
        if (s[i] == 'y' && s[i + 1] == 'a') return true; <br> \
        if (s[i] == 'y' && s[i + 1] == 'u') return true; <br> \
        if (s[i] == 'y' && s[i + 1] == 'i') return true; <br> \
        if (s[i] == 'u' && s[i + 1] == 'i') return true; <br> \
        if (s[i] == 'u' && s[i + 1] == 'a') return true; <br> \
        if (s[i] == 'u' && s[i + 1] == 'o') return true; <br> \
        if (s[i] == 'e' && s[i + 1] == 'o') return true; <br> \
        if (s[i] == 'e' && s[i + 1] == 'u') return true; <br> \
        if (s[i] == 'k' && s[i + 1] == 'k') return true; <br> \
        if (s[i] == 'b' && s[i + 1] == 'k') return true; <br> \
        if (s[i] == 'k' && s[i + 1] == 'b') return true; <br> \
    } <br> \
    return false; <br> \
} <br> \
bool hasTriple(string s) { <br> \
    for (int i = 0; i < s.size() - 2; ++i) { <br> \
        if (s[i] == s[i + 1] && s[i] == s[i + 2]) return true; <br> \
        if (isVowel(s[i]) && isVowel(s[i + 1]) && isVowel(s[i + 2])) return true; <br> \
    } <br> \
    return false; <br> \
} <br> \
bool hasVowel(string s) { <br> \
    bool found = false; <br> \
    for (int i = 0; i < s.size(); ++i) { <br> \
        if (isTrueVowel(s[i])) found = true; <br> \
    } <br> \
    return found; <br> \
} <br> \
bool ruleViolation(string s) { <br> \
    if (isVowel(s[0])) return true; <br> \
    if (s[0] == s[1]) return true; <br> \
    if (isVowel(s[0]) && isVowel(s[1])) return true; <br> \
    if (!isVowel(s[0]) && !isVowel(s[1])) return true; <br> \
    if (hasBadDouble(s) || hasTriple(s)) return true; <br> \
    if (isTrueVowel(s[s.size() - 1])) return true; <br> \
    if (!hasVowel(s)) return true; <br> \
    return false; <br> \
} <br> \
<br> \
void printAnagrams(string s) { <br> \
    sort(s.begin(), s.end()); <br> \
    do <br> \
        if (!ruleViolation(s)) cout << s << endl; <br> \
    while (next_permutation(s.begin(), s.end())); <br> \
} <br> \
<br> \
int main() { <br> \
    string name = \"Anderson\"; <br> \
    <br> \
    vector<int> nameArr; <br> \
    name = toLower(name); <br> \
    nameArr = constructIntArr(name); <br> \
    <br> \
    for (int i = 0; i < 25; ++i) { <br> \
        nameArr = incrementVector(nameArr); <br> \
        string name = intArrToString(intArrToCharArr(nameArr)); <br> \
        if (!checkForObscureLetter(name)) { <br> \
            cout << \"Anagrams for \" << name << \" (caesar sipher +\" << i+1 << \"): \" << endl; <br> \
            printAnagrams(name); <br> \
            cout << endl << endl; <br> \
        } <br> \
        <br> \
    } <br> \
    <br> \
    return 0; <br> \
} <br> \
";
// #endregion

// #region intro
var intro = "The following are programs from a small collection of useful string manipulation \
tools called the word-library. Anagrams is designed to generate \
English-style \"name-like\" caesar ciphers based on a given string. SecGen \
produces passwords constructed from a set of input strings using simple substitution strategies. \
The programs below, along with the source code for this website, can be found at github.com/zebklein"
// #endregion

// #region generator
var generator = "/// SecGen /// <br> \
/* --DISCLAIMER-- <br> \
This content is the property of David Z Kleinsorge and affiliated parites. <br> \
The content provided herein is for educational purposes only. It is not intended to encourage or promote any illegal activities.  <br> \
Users are reminded to use this information responsibly and in accordance with applicable laws and regulations.  <br> \
*/ /* <br> \
This program takes as input a text document containing strings divided into three sets: pre, body and post. When combined, a string from each set should form a \"common\" password e.g. 'mycool'+'password'+'1998' <br> \
The output is all permutations of these three parts, with some custom character exclusion, inclusion, and swapping. <br> \
*/ <br> \
#include <iostream> <br> \
#include <fstream> <br> \
#include <string> <br> \
#include <vector> <br> \
#include <algorithm> <br> \
using namespace std; <br> \
<br> \
// Recursively move through the string s, making special chracter replacements as it goes, <br> \
// and adds the final products to the body vector <br> \
void pushBodyRecursive(vector<string>& body, string s, int i); <br> \
<br> \
// Push original string s to vector post, as well as variants <br> \
void pushPostVariations(vector<string>& post, string s); <br> \
<br> \
// Add ! and ? to all strings in vector v <br> \
void appendPunctuation(vector<string>& v); <br> \
<br> \
<br> \
int main(int argc, char* argv[]) { <br> \
    if (argc < 3) { throw \"Too few args\"; } <br> \
    ifstream fin(argv[1]); <br> \
    if (!fin.is_open()) { throw \"File failed to open\\n\"; } <br> \
    string header; <br> \
    string word; <br> \
    vector<string> pre = { \"\" }; <br> \
    vector<string> body = { \"\" }; <br> \
    vector<string> post = { \"\" }; <br> \
    while (!fin.eof()) { <br> \
        fin >> word; <br> \
        if (word[0] == '-')   { <br> \
            header = word.substr(1); <br> \
            continue; <br> \
        } <br> \
        if (header == \"pre\") { <br> \
            pre.push_back(word); <br> \
        } <br> \
        else if (header == \"body\") { <br> \
            pushBodyRecursive(body, word, 0); <br> \
        } <br> \
        else if (header == \"post\") { <br> \
            pushPostVariations(post, word); <br> \
        } <br> \
        else { throw \"Unrecognized header\\n\"; } <br> \
    } <br> \
    fin.close(); <br> \
    appendPunctuation(post); <br> \
    <br> \
    cout << \"Writing to \" << argv[2] << \" . . .\\n\"; <br> \
    ofstream fout(argv[2]); <br> \
    if (!fout.is_open()) { throw \"File failed to open\\n\"; } <br> \
    int count = 0; <br> \
    string finalWord; <br> \
    for (int i = 0; i < pre.size(); ++i) { <br> \
        for (int j = 0; j < body.size(); ++j) { <br> \
            for (int k = 0; k < post.size(); ++k) { <br> \
                finalWord = pre[i] + body[j] + post[k]; <br> \
                if (finalWord.length() < 5) continue; <br> \
                fout << pre[i] + body[j] + post[k] << endl; <br> \
                ++count; <br> \
            } <br> \
        } <br> \
    } <br> \
    <br> \
    cout << endl << count << \" strings generated\\n\"; <br> \
    fout.close(); <br> \
    return 0; <br> \
} <br> \
<br> \
void pushBodyRecursive(vector<string>& body, string s, int i) { <br> \
    if (i == s.length()) { <br> \
        body.push_back(s); <br> \
        return; <br> \
    } <br> \
    string o = s;  <br> \
    if (i == 0) { // replace first char with upper case <br> \
        s[0] -= 32; <br> \
        pushBodyRecursive(body, s, i+1); <br> \
    } <br> \
    if (s[i] == 'o') { // replace o with 0 <br> \
        s[i] = '0'; <br> \
        pushBodyRecursive(body, s, i + 1); <br> \
    } <br> \
    else if (s[i] == 'i' || s[i] == 'l') { // replace i or l with 1 <br> \
        s[i] = '1'; <br> \
        pushBodyRecursive(body, s, i + 1); <br> \
    } <br> \
    else if (s[i] == 's') { // replace s with 3 and 5 <br> \
        s[i] = '3'; <br> \
        pushBodyRecursive(body, s, i + 1); <br> \
        s[i] = '5'; <br> \
        pushBodyRecursive(body, s, i + 1); <br> \
    } <br> \
    pushBodyRecursive(body, o, i + 1); // do nothing and continue <br> \
} <br> \
<br> \
void pushPostVariations(vector<string>& post, string s) { <br> \
    post.push_back(s); <br> \
    // if postfix is length 4 and begins in 1 or 2, add the last two digits to post as well <br> \
    if (s.length() == 4 && (s[0] == '1' || s[1] == '2')) { <br> \
        post.push_back(s.substr(2)); <br> \
    } <br> \
    // if length 2, swap numbers <br> \
    if (s.length() == 2 && s[0] != s[1]) { <br> \
        string r = s; <br> \
        std::reverse(r.begin(), r.end()); <br> \
        post.push_back(r); <br> \
    } <br> \
} <br> \
<br> \
void appendPunctuation(vector<string>& v) { <br> \
    for (int i = 0; i < v.size(); ++i) { <br> \
        v.push_back(v[i] + '!'); <br> \
        v.push_back(v[i] + '?'); <br> \
    } <br> \
} <br> \
";
// #endregion

// #region randomReveal
// Reveals all characters of text in random order over durationMs milliseconds.
// Each character fades in via CSS opacity transition.
// Returns a Promise that resolves once all characters are fully visible.
function randomReveal(elementId, text, durationMs) {
    return new Promise(function(resolve) {
        const el = document.getElementById(elementId);

        const spans = text.split('').map(function(ch) {
            const span = document.createElement('span');
            span.textContent = ch;
            span.style.opacity = '0';
            span.style.transition = 'opacity 0.25s ease';
            el.appendChild(span);
            return span;
        });

        // Fisher-Yates shuffle of indices
        const indices = spans.map(function(_, i) { return i; });
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = indices[i]; indices[i] = indices[j]; indices[j] = tmp;
        }

        const interval = (durationMs - 250) / spans.length;
        indices.forEach(function(charIndex, order) {
            setTimeout(function() {
                spans[charIndex].style.opacity = '1';
            }, order * interval);
        });

        // resolve after all fades complete
        setTimeout(resolve, durationMs + 250);
    });
}
// #endregion

// #region DOMWriter
// Writes text to a DOM element with simulated typing delay.
// Uses safe DOM APIs (createTextNode, createElement) instead of innerHTML.
function DOMWriter(DOM_element, stringToPrint) {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const print_code = async () => {
        const el = document.getElementById(DOM_element);
        let word = "";
        for (let i = 0; i < stringToPrint.length; ++i) {
            while (stringToPrint[i] !== " " && i < stringToPrint.length) {
                word += stringToPrint[i++];
            }
            if (word === "<br>") {
                el.appendChild(document.createElement("br"));
            } else {
                for (let j = 0; j < word.length; j++) {
                    el.appendChild(document.createTextNode(word[j]));
                    let d = 60;
                    if (i > 15) {
                        d = Math.trunc((500 / (i - 5)) + 10);
                    }
                    await delay(d);
                }
                if (i + 1 < stringToPrint.length && stringToPrint[i + 1] === " ") {
                    el.appendChild(document.createTextNode('\u2002')); // en space
                } else {
                    el.appendChild(document.createTextNode(' '));
                }
            }
            word = "";
        }
    };
    print_code();
}
// #endregion

// #region main
// 1. Reveal intro text randomly over 5 seconds.
// 2. Once complete, begin typing both code columns simultaneously.
randomReveal("code-intro", intro, 5000).then(function() {
    DOMWriter("code-column-left", anagrams);
    DOMWriter("code-column-right", generator);
});
// #endregion
