# RGB To Hex Conversion
<p>The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.</p>

## The following are examples of expected output values:
```
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
```
## tags:
_ALGORITHMS_

[codepen](https://codepen.io/), [codewars](https://www.codewars.com/users/Bizhev)<br>

**Difficulty:** 5 kyu
```
function rgb(r, g, b){

  function outNumber(x){
    if (x > 255) return 255;
    if (x<=0) return '00'; 
    return x
  };

    r = outNumber(r);
    g = outNumber(g);
    b = outNumber(b);   
    var result = r.toString(16)+g.toString(16)+b.toString(16)+"";
    return result.toUpperCase();
  } 
```
