# February 5th Notes

### Major Purposes of CSS
+ Provides consistent styling for your application
+ Makes it easy to make changes since you don't have to change every page of your application

### CSS Selectors
+ CSS selectors are used to "find" (or select) the HTML elements you want to style
+ CSS code is only applied to the code for the given selector

##### ID Selector
+ Here, all <p> elements on the page will be center-aligned, with a red text color: 
```css
p {
  text-align: center;
  color: red;
}
```
##### Element Selector
+ The CSS rule below will be applied to the HTML element with id="para1": 
```css
#para1 {
  text-align: center;
  color: red;
}
```

##### Class Selector
+ In this example all HTML elements with class="center" will be red and center-aligned: 
```css
.center {
  text-align: center;
  color: red;
}
```

##### Universal Selector
+ The CSS rule below will affect every HTML element on the page: 
```css
* {
  text-align: center;
  color: blue;
}
```

##### Combining Selectors
+ In this example only <p> elements with class="center" will be red and center-aligned: 
```css
p.center {
  text-align: center;
  color: red;
}
```
+ In this example we have grouped the selectors to minimize repeated code for each element: 
```css
h1, h2, p {
  text-align: center;
  color: red;
}
```