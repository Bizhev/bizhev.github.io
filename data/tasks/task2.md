# Count the smiley faces!

## Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

### Rules for a smiling face:
* Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
* A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
* Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
### Valid smiley face examples:
```
:) :D ;-D :~)
```
### Invalid smiley faces:
```
;( :> :} :]
```
## Example cases:
```
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```

### Note: 
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
## tags:
_Fundamentals, Regular Expressions, Declarative Programming, Advanced Language Features, Strings_

[codepen](https://codepen.io/), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:** 6 kyu

```
function countSmileys(arr) {
	
	var count = 0;
	var r1 = /[:;]/;
	var r2 = /[-~]/;
	var r3 = /[)D]/;
		
	arr.forEach(function(e1){
		
		if ((
			r1.test(e1) &&
			r2.test(e1) && 
			r3.test(e1) &&
			(e1.length ==3)
		) || (
			r1.test(e1) &&
			r3.test(e1) &&
			(e1.length == 2)
		)) count++		
	})	
	return count;	
}
```
