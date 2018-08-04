# Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.<br>

## Examples
```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !
```
## tags:
_ALGORITHMS_
[codepen](https://codepen.io/), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:** 5 kyu

```
function pigIt(str){
  var result='';  
  var re = new RegExp("\\w");
    str.split(" ").forEach((res)=>{    
      if (re.test(res[0])) result+=res.slice(1)+res[0]+'ay '
        else result+=res;
    });
  return result.trim();
}
```