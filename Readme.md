#Configuration-Driven Exports
##Icon export script for Adobe Photoshop

###Configuration Object Syntax
```javascript
{
  "sizes":[
    {
      "x":76,
      "y":76,
      "name":"Icon-76.png"
    }
    //...
  ],
  "confirm":true //enable or suppress confirmation dialog at end of script
}
```

###Sample Configuration Object for common iOS sizes
```javascript
{
  "sizes":[
    {"x":76,"y":76,"name":"Icon-76.png"},
    {"x":152,"y":152,"name":"Icon-76@2x.png"},
    {"x":167,"y":167,"name":"Icon-83.5@2x.png"},
    {"x":120,"y":120,"name":"Icon-60@2x.png"},
    {"x":180,"y":180,"name":"Icon-60@3x.png"},
    {"x":40,"y":40,"name":"Icon-40.png"},
    {"x":80,"y":80,"name":"Icon-40@2x.png"},
    {"x":120,"y":120,"name":"Icon-40@3x.png"},
    {"x":29,"y":29,"name":"Icon-29.png"},
    {"x":58,"y":58,"name":"Icon-29@2x.png"},
    {"x":87,"y":87,"name":"Icon-29@3x.png"}
  ],
  "confirm":false
}
```



####Based on the work by [John Ballinger](https://twitter.com/sponno),
who released the original script under the [Creative Commons Attribution 3.0 New Zealand License](http://creativecommons.org/licenses/by/3.0/nz/)