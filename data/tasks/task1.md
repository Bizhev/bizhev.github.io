# Which are in?
Given two arrays of strings **a1** and **a2** return a sorted array **r** in lexicographical order of the strings of **a1** which are substrings of strings **a2**.<br>

### Example 1:
```
a1 = ["arp", "live", "strong"]<br>
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]<br>
returns ["arp", "live", "strong"]
```

### Example 2:
```
a1 = ["tarp", "mice", "bull"]<br>
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]<br>
returns []
```
### Notes:
* Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
* In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
* Beware: **r** must be without duplicates.
* Don't mutate the inputs.

## tags:
_REFACTORING, ARRAYS, SEARCH, ALGORITHMS, LISTS, DATA STRUCTURES, STRINGS_

[codepen](https://codepen.io/bizhev/pen/gKymQb), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:** 6 kyu

### Solutions 1
```
function inArray(array1,array2){
    var r = [];
    var rTMP = [];
    var obj ={};
    array1.forEach(function(A1entry){
        array2.forEach(function(A2entry){            
            if (A2entry.indexOf(A1entry) >= 0) {
                rTMP[A1entry] = A1entry;  
            }            
        })
    });
    for (key in rTMP){
        r.push(key)
    };    
    return r.sort()
  }
```
### Solutions 2
```
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
```