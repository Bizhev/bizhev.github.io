# Regex validate PIN code

<p>ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.</p>

### eg:
```
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
```
## tags:
_FUNDAMENTALS, REGULAR EXPRESSIONS, DECLARATIVE PROGRAMMING, ADVANCED LANGUAGE FEATURES, STRINGS_

[codepen](https://codepen.io/), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:** 7 kyu

```
function validatePIN (pin) {
    var re = new RegExp('[0-9]{4}'); 
    var re2 = new RegExp('[0-9]{6}');
    return ((re.test(pin)) && (pin.length==4)||((re2.test(pin))&&(pin.length==6)))
}
```