# Regex count lowercase letters

Your task is simply to count the total number of lowercase letters in a string.<br>

## Examples
```
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
```

## tags:
_FUNDAMENTALS, REGULAR EXPRESSIONS, DECLARATIVE PROGRAMMING, ADVANCED LANGUAGE FEATURES, STRINGS, ALGORITHMS_
[codepen](https://codepen.io/), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:** 8 kyu
```
function lowercaseCount(str){
var r="abcdefghijklmnopqrstuvwxyz";

    count = 0;
    for (var i=0;i<str.length;i++) {      
      if (r.indexOf(str[i])>=0) count++;    
    }
    return count;
}
```