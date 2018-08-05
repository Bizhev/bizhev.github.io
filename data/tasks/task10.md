# Validate code with simple regex

Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.

## Tags

_Fundamentals_, _Regular Expressions_, _Declarative Programming_, _Advanced Language_,_Strings_.

[codepen](https://codepen.io/), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:**  8 kyu
```
function validateCode (code) {
  var re = new RegExp('[1-3]');
  var l = ""+code ;   
  return re.test(l[0]);
}
```
```
function validateCode (code) {
  return /^[1-3]/.test(code);
}
```

