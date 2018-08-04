# Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
## Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

## Examples
```
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
```
## tags
_FUNDAMENTALS_

[codepen](https://codepen.io/), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:** 8 kyu
```
function replace(s){
  var res = ''
  var re = new RegExp("[euioa]","i");

  for (i=0;i<s.length;i++){
  
    if (re.test(s[i])) res += '!' 
      else res+=s[i];    
  }  
  return res;
}
```