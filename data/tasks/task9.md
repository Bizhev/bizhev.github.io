# The Hashtag Generator

The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!<br>

## Here's the deal:

* If the final  result is longer than 140 chars it must return false.
* If the input is a empty string it must return false.
* It must start with a hashtag (#).
* All words must have their first letter capitalized.
## Example Input to Output:
```
" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
" Hello World " => "#HelloWorld"
```
## tags
_ALGORITHMS, STRINGS_

[codepen](https://codepen.io/), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:** 5 kyu
```
function generateHashtag (str) {
  let result="#";
  if (str.length<1) return false;
  
  str.trim().split(new RegExp('\\s+')).forEach( res => {
    result += res.substr(0,1).toUpperCase() + res.substr(1);  
  });
  
  return (result.length>140)?false:result.trim();
}
```

