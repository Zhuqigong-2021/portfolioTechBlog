---
---

# Basic

<h2 id='syntax' class='font-bold text-gray-700 my-10'> Syntax </h2>

<h3 class='text-red-400 my-6'>basic syntax </h3>

```css
selector {
  proper: value;
}
```

for example

<code class='break-words'>

> ```css
> p {
>   padding: 0;
>   margin: 0;
>   box-sizing: border-box;
> }
> ```

</code>

<h3 class='text-red-400 my-6'>selector </h3>

**HTML**

> ```css
> p {
>   color: red;
> }
> ```

**class**

`<div class='text'>this is some text </div>`

**id**

id should be unique

`<div id='text'>this is some text </div>`

**\*universal**

> ```css
> * {
>   padding: 0;
>   margin: 0;
>   box-sizing: border-box;
> }
> ```

<h3 class='text-red-400 my-6'>Combine Selector</h3>

### AB{ }

<p>+ => both the A and B selector on the same element , the style will work </p>
  &nbsp;
  for example:

> ```html
> <h1 class="app">this is the text</h1>
> <h1>the style will not apply to this style</h1>
> ```

 <br />

> ```css
> h1.app {
>   color: red;
> }
> ```

### A,B{ }

or => use comma "," elment has A or B selector will apply this style

> ```html
> <p class="text1">text one</p>
> <p class="text2">text two</p>
> ```

text one and text two will turn red

> ```css
> .text1,
> .text1 {
>   color: red;
> }
> ```

### A B{}

child,parent => B is a child of A element

> ```html
> <ul>
>   <li>item1</li>
> </ul>
> ```

select all the li element which is the decendant of ul
</br>
so it could be children or grand child as long as li element is the decendent of ul will be selected

> ```css
> ul li {
>   color: red;
> }
> ```

<h2 id='comment' class='font-bold text-gray-700 my-10'> Comment </h2>
use the shortcut key

ctrl + /

> ```css
> h1 {
>   /* color:red; */
> }
> ```

<h2 id='color' class='font-bold text-gray-700 my-10'> Color </h2>

<h3 class='text-red-400 my-6'>rgb</h3>
red |  green  | blue  <br>

<p> red: 0~255 </p>
<p> green: 0~255 </p>
<p> blue: 0~255 </p>

> ```css
> p {
>   color: rgb(0, 0, 0);
>   /* text color is pure black */
>   background-color: rgb(255, 255, 255);
>   /* background ispure white */
> }
> ```

<h3 class='text-red-400 my-6'>rgba</h3>

red | green | blue | alpha <br>
The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

<p> red: 0~255 </p>
<p> green: 0~255 </p>
<p> blue: 0~255 </p>

> ```css
> p {
>   color: rgba(0, 0, 0, 0.5);
>   background-color: rgba(255, 255, 255, 0.9);
> }
> ```

<h3 class='text-red-400 my-6'>#hex</h3>

Hex uses three two-character codes to specify RGB values in the range 00-FF, where 00 is no color and FF is full color.

| Decimal Values                        |
| ------------------------------------- |
| 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 |

| HEXADECIMAL DIGITS              |
| ------------------------------- |
| 0 1 2 3 4 5 6 7 8 9 A B C D E F |

#FFFFFF ↔️ rgb(255,255,255)

**shorthand**

if two digits are the same , write one instead

#3333FF => #33F

<h3 class='text-red-400 my-6'>hsl</h3>

hue, saturation, and lightness.

HSL color values are specified with: hsl(hue, saturation, lightness)
Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color.

Lightness is also a percentage value. 0% is black, and 100% is white.

<p> H: 0~360 </p>
<p> S: 0~100% </p>
<p> L: 0~100% </p>

> ```css
> p {
>   color: hsl(360, 25%, 75%);
>   background-color: hsl(180, 50%, 50%);
> }
> ```

<h3 class='text-red-400 my-6'>hsla</h3>

hsla(hue, saturation, lightness, alpha)

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):

<p> H: 0~360 </p>
<p> S: 0~100% </p>
<p> L: 0~100% </p>
<p> a: 0~1.0 </p>

> ```css
> p {
>   color: hsla(360, 25%, 75%, 0.5);
>   background-color: hsla(180, 50%, 50%, 0.5);
> }
> ```

<h2 id='unit' class='font-bold text-gray-700 my-10'> Unit </h2>

<h3 class='text-red-400 my-6'>px</h3>

he absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.

the other **absolute length**

cm | mm | in | pt | pc

<h3 class='text-red-400 my-6'>rem</h3>

Rem (short for “root-em”) units dictate an element’s font size relative to the size of the root element. By default, most browsers use a font size value of 16px. So, if the root element is 16px, an element with the value 1rem will also equal 16px.

Therefore, rem units are useful for scaling CSS elements in relation to the size of the root element — even if you don’t know what the default font size will be.

however we can change the default font-size which will lead to the change of the 1rem

> ```css
> html {
>   font-size: 62.5%;
>   /* changes a default 16px
>  font size to 10px */
> }
>
> h1 {
>   font-size: 2.4rem;
>
>   /* font size = 24px */
> }
>
> h2 {
>   font-size: 1.6rem;
>
>   /* font size = 16px */
> }
>
> p {
>   font-size: 1.2rem;
>
>   /* font size = 12px */
> }
> ```

<h3 class='text-red-400 my-6'>em</h3>

em => Relative to the font-size of the element (2em means 2 times the size of the current font)

<p class='text-[blue]'>The em and rem units are practical in creating perfectly scalable layout!</p>

sometimes it might be useful to give padding or shadow based on the current font size

<h3 class='text-red-400 my-6'>vw|vh</h3>

**vw** => view width

vh => view height

<h3 class='text-red-400 my-6'>%</h3>
0-100% based on its parent size

> ```css
> div {
>   width: 400px;
> }
>
> div p {
>   width: 75%;
>   /* width: 300px */
> }
> ```

<h2 id='styles' class='font-bold text-gray-700 my-10'> Styles </h2>

in css we have three types of style

<h3 class='text-red-400 my-6'>inline style</h3>
An inline CSS is used to apply a unique style to a single HTML element.

An inline CSS uses the style attribute of an HTML element.

> ```html
> <div style="color:red;">this is inline style</div>
> ```

<h3 class='text-red-400 my-6'>internal style</h3>

`Internal - by using a <style> element in the <head> section`

> ```html
> <!DOCTYPE html>
> <html>
>   <head>
>     <style>
>       body {
>         background-color: powderblue;
>       }
>       h1 {
>         color: blue;
>       }
>       p {
>         color: red;
>       }
>     </style>
>   </head>
>   <body>
>     <h1>This is a heading</h1>
>     <p>This is a paragraph.</p>
>   </body>
> </html>
> ```

<h3 class='text-red-400 my-6'>external style</h3>
An external style sheet is used to define the style for many HTML pages.

`To use an external style sheet, add a link to it in the <head> section of each HTML page:`

> ```html
> <!DOCTYPE html>
> <html>
>   <head>
>     <link rel="stylesheet" href="styles.css" />
>   </head>
>   <body>
>     <h1>This is a heading</h1>
>     <p>This is a paragraph.</p>
>   </body>
> </html>
> ```

<h2 id='inheritance' class='font-bold text-gray-700 my-10'> inheritance </h2>

<h3 class='text-red-400 my-6'>definition</h3>
When no value for an inherited property has been specified on an element, the element gets the computed value of that property on its parent element. Only the root element of the document gets the initial value given in the property's summary.

<p class='text-blue-500'>
normally color and fonts are set to be inherited by default
border is set to be initial
</p>

<h3 class='text-red-400 my-6'>to stop the inheritance</h3>

> ```css
> p {
>   color: initial;
> }
> ```

<h2 id='boxmodel' class='font-bold text-gray-700 my-10'> box model </h2>

<h3 class='text-red-400 my-6'>margin|padding</h3>
shortcut :
we have four situations

> ```css
> p {
>   /* Apply to all four sides */
>   padding: 1em;
>   /* top and bottom | left and right */
>   padding: 5% 10%;
>   /* top | left and right | bottom */
>   padding: 1em 2em 2em;
>   /* top | right | bottom | left */
>   padding: 5px 1em 0 2em;
> }
> ```

<h3 class='text-red-400 my-6'>border & border-width</h3>

> ```css
> p {
>   border: 1px solid black;
>   /* border width =1px all around */
>   border-width: 1px 2px 0px 0.5px;
>   /* we can also specify the
>   border with ourselves
>   top right bottom left */
> }
> ```

<h3 class='text-red-400 my-6'>box-sizing</h3>
we have two types of box-sizing

> ```css
> .box {
>   box-sizing: border-box;
> }
> ```

<!-- ![border box](../../images/borderbox.png) -->
<!-- <img src='../../images/borderbox.png'> -->

> ```css
> .box {
>   box-sizing: content-box;
> }
> ```

<!-- ![border box](../../images/contentbox.png) -->

<h2 id='specificity' class='font-bold text-gray-700 my-10'> specificity </h2>

<p> 0   0   0    0 <p>

<p> important! > inline-style > id > class > html > * </p>

ID column

<h3 class='text-red-400 my-6'>ID column</h3>
Includes only ID selectors, such as #example. For each ID in a matching selector, add 1-0-0 to the weight value.

<h3 class='text-red-400 my-6'>CLASS column</h3>
Includes class selectors, such as .myClass, attribute selectors like [type="radio"] and [lang|="fr"], and pseudo-classes, such as :hover, :nth-of-type(3n), and :required. For each class, attribute selector, or pseudo-class in a matching selector, add 0-1-0 to the weight value.

<h3 class='text-red-400 my-6'>TYPE column</h3>
Includes type selectors, such as p, h1, and td, and pseudo-elements like ::before, ::placeholder, and all other selectors with double-colon notation. For each type or pseudo-element in a matching selector, add 0-0-1 to the weight value.

<h3 class='text-red-400 my-6'>No value</h3>
The universal selector (\*) and the pseudo-class :where() and its parameters aren't counted when calculating the weight so their value is 0-0-0, but they do match elements. These selectors do not impact the specificity weight value.

Combinators, such as +, >, ~, " ", and ||, may make a selector more specific in what is selected but they don't add any value to the specificity weight.

<h2 id='pseudoclass' class='font-bold text-gray-700 my-10'> Pseudo Class </h2>

<h3 class='text-red-400 my-6'>Syntax</h3>

> ```css
> selector:pseudo-class {
>   property: value;
> }
> ```

<h3 class='text-red-400 my-6'>Categories</h3>

<h4 class='text-purple-400 my-3'>Element display state pseudo-classes </h4>
These pseudo-classes enable the selection of elements based on their display states.

:fullscreen

Matches an element that is currently in fullscreen mode.

:modal

Matches an element that is in a state in which it excludes all interaction with elements outside it until the interaction has been dismissed.

:picture-in-picture

Matches an element that is currently in picture-in-picture mode.

<h4 class='text-purple-400 my-3'>Input pseudo-classes </h4>
These pseudo-classes relate to form elements, and enable selecting elements based on HTML attributes and the state that the field is in before and after interaction.

:autofill

`Matches when an <input> has been autofilled by the browser.`

:enabled

Represents a user interface element that is in an enabled state.

:disabled

Represents a user interface element that is in a disabled state.

:read-only

Represents any element that cannot be changed by the user.

:read-write

Represents any element that is user-editable.

:placeholder-shown

`Matches an input element that is displaying placeholder text. For example, it will match the placeholder attribute in the <input> and <textarea> elements.`

:default

Matches one or more UI elements that are the default among a set of elements.

:checked

Matches when elements such as checkboxes and radio buttons are toggled on.

:indeterminate

Matches UI elements when they are in an indeterminate state.

:blank

Matches a user-input element which is empty, containing an empty string or other null input.

:valid

Matches an element with valid contents. For example, an input element with the type 'email' that contains a validly formed email address or an empty value if the control is not required.

:invalid

Matches an element with invalid contents. For example, an input element with type 'email' with a name entered.

:in-range

Applies to elements with range limitations. For example, a slider control when the selected value is in the allowed range.

:out-of-range

Applies to elements with range limitations. For example, a slider control when the selected value is outside the allowed range.

:required

Matches when a form element is required.

:optional

Matches when a form element is optional.

:user-invalid

Represents an element with incorrect input, but only when the user has interacted with it.

<h4 class='text-purple-400 my-3'>Linguistic pseudo-classes </h4>
These pseudo-classes reflect the document language and enable the selection of elements based on language or script direction.

:dir()

The directionality pseudo-class selects an element based on its directionality as determined by the document language.

:lang()

Select an element based on its content language.

<h4 class='text-purple-400 my-3'>Location pseudo-classes</h4>
These pseudo-classes relate to links, and to targeted elements within the current document.

:any-link

Matches an element if the element would match either :link or :visited.

:link

Matches links that have not yet been visited.

:visited

Matches links that have been visited.

:local-link

Matches links whose absolute URL is the same as the target URL. For example, anchor links to the same page.

:target

Matches the element which is the target of the document URL.

:target-within

Matches elements which are the target of the document URL, but also elements which have a descendant which is the target of the document URL.

:scope

Represents elements that are a reference point for selectors to match against.

<h4 class='text-purple-400 my-3'>Resource state pseudo-classes</h4>
These pseudo-classes apply to media that is capable of being in a state where it would be described as playing, such as a video.

:playing

Represents a media element that is capable of playing when that element is playing.

:paused

Represents a media element that is capable of playing when that element is paused.

<h4 class='text-purple-400 my-3'>Time-dimensional pseudo-classes </h4>
These pseudo-classes apply when viewing something which has timing, such as a WebVTT caption track.

:current

Represents the element or ancestor of the element that is being displayed.

:past

Represents an element that occurs entirely before the :current element.

:future

Represents an element that occurs entirely after the :current element.

<h4 class='text-purple-400 my-3'>Tree-structural pseudo-classes</h4>
These pseudo-classes relate to the location of an element within the document tree.

:root

`Represents an element that is the root of the document. In HTML this is usually the <html> element.`

:empty

Represents an element with no children other than white-space characters.

:nth-child

Uses An+B notation to select elements from a list of sibling elements.

:nth-last-child

Uses An+B notation to select elements from a list of sibling elements, counting backwards from the end of the list.

:first-child

Matches an element that is the first of its siblings.

:last-child

Matches an element that is the last of its siblings.

:only-child

Matches an element that has no siblings. For example, a list item with no other list items in that list.

:nth-of-type

Uses An+B notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements.

:nth-last-of-type

Uses An+B notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements counting backwards from the end of the list.

:first-of-type

Matches an element that is the first of its siblings, and also matches a certain type selector.

:last-of-type

Matches an element that is the last of its siblings, and also matches a certain type selector.

:only-of-type

Matches an element that has no siblings of the chosen type selector.

<h4 class='text-purple-400 my-3'> User action pseudo-classes</h4>
These pseudo-classes require some interaction by the user in order for them to apply, such as holding a mouse pointer over an element.

:hover

Matches when a user designates an item with a pointing device, such as holding the mouse pointer over the item.

:active

Matches when an item is being activated by the user. For example, when the item is clicked on.

:focus

Matches when an element has focus.

:focus-visible

Matches when an element has focus and the user agent identifies that the element should be visibly focused.

:focus-within

Matches an element to which :focus applies, plus any element that has a descendant to which :focus applies.

<h4 class='text-purple-400 my-3'>Functional pseudo-classes </h4>
These pseudo-classes accept a selector list or forgiving selector list as a parameter.

:is()

The matches-any pseudo-class matches any element that matches any of the selectors in the list provided. The list is forgiving.

:not()

The negation, or matches-none, pseudo-class represents any element that is not represented by its argument.

:where()

The specificity-adjustment pseudo-class matches any element that matches any of the selectors in the list provided without adding any specificity weight. The list is forgiving.

:has()

The relational pseudo-class represents an element if any of the relative selectors match when anchored against the attached element.

<h1 id='posilayout'> Position & Layout </h1>

<h2 id='normalflow' class='font-bold text-gray-700 my-10'> Normal Flow </h2>
<h3 class='text-red-400 my-6'>block</h3>

if some element's display block

<li> take the entire width </li>
<li> can change the width and height </li>

default block level element

div, h1~h6, p, ul ,ol, li, table, footer, form, header, hr, section, video,

<p class='bg-orange-500'>It is important to note that with block elements, CSS margin-right has no effect. However, you can still customize the size of block elements with CSS width, height, margin-top, margin-bottom, and margin-left.</p>

```css
.box {
  display: block;
}
```

<h3 class='text-red-400 my-6'>inline</h3>

if some element's display inline

<li> default size of its content </li>
<li> cannot have the width, top, or bottom margins  </li>

default inline level element

a, em ,strong,span,input ,br,i,b,map,output

<p class='bg-orange-500'>Note that you cannot change the size of the inline element except by changing the size of the content inside of it.</p>

<h3 class='text-red-400 my-6'>inline-block</h3>

in short :
it is a inline element to other elements => it only takes the element's own size
but a block element to it self => it can set its own height and width

<h3 class='text-red-400 my-6'>none</h3>

it acts like it doesn't exist on this page

```css
.box {
  display: none;
}
```

<h2 id='float' class='font-bold text-gray-700 my-10'> Float </h2>

<h3 class='text-red-400 my-6'>float</h3>

```css
img {
  float: left | right;
}
```

<h3 class='text-red-400 my-6'>clear</h3>

```css
img {
  clear: left | right | both;
}
```

<h2 id='flex' class='font-bold text-gray-700 my-10'> Flex </h2>
<h3 class='text-red-400 my-6'>feature</h3>

give some element a display flex will reflect on its children not on itself

```html
<ul>
  <li>item one</li>
  <li>item two</li>
</ul>
```

before

 <li>item one</li>
  <li>item two</li>

after

it will make the li element side by side

item one item two

```css
ul {
  display: flex;
}
```

<h3 class='text-red-400 my-6'>axis</h3>
flex-direction: This property sets the direction of the main axis of the flex container. The main axis is the axis along which the flex items are laid out. Possible values are row, row-reverse, column, and column-reverse.

```css
.container {
  flex-direction: row|row-reverse|column|column-reverse;
}
```

<h3 class='text-red-400 my-6'>Justify-content</h3>

```css
.container {
  justify-content: flex-start|flex-end|center|space-round|space-between|space-evenly;
}
```

<h3 class='text-red-400 my-6'>align-items</h3>

```css
.container {
  align-items: stretch;
  /* element grows to fill the entrie space */
  align-items: flex-start| flex-end | center;
}
```

<h3 class='text-red-400 my-6'>flex-grow</h3>

```css
.container {
  flex-grow: 1;
  /* take all the remain space while growing */
  flex-basis: 0;
  /* where do we calculate the grow value,in this case we just calculate from 0px */
}
```

<h3 class='text-red-400 my-6'>flex-shrink </h3>

```css
.container {
  flex-shrink: 1;
  /* default setting to shrink based on the size*/
  flex-shrink: 0;
  /* control the item not shrink */
}
```

<h3 class='text-red-400 my-6'>shorthand</h3>

```css
.container {
  flex: grow | shrink | basis;
  flex: 1;
  /* means flex-grow:1 shrink and basis go to default */
}
```

<h3 class='text-red-400 my-6'>align-self</h3>

```css
.container {
  align-self: flex-start|flex-end| center;
  /* change individual alignment of an element */
}
```

<h3 class='text-red-400 my-6'>Order</h3>

order:to specify which order the elment ranked

order:1 means the first element in the order

order:starts from 0 this is the default setting number

don't use order property ,it won't change html when tab,
tab based on the order in the html or based on defined order in css

<h2 id='inlineflex' class='font-bold text-gray-700 my-10'> Inline-flex </h2>

it is very similar to inline-block

but it makes the parent element to display as inline => the element itself only takes its own size not the entire line ,

but its children elements to display flex => it allows what's inside of it to display side by side

<h2 id='grid' class='font-bold text-gray-700 my-10'> Grid </h2>

<h3 class='text-red-400 my-6'>grid-template-columns</h3>

<h4 class='text-purple-400 my-3'>basic usage</h4>
`grid-template-columns:100px 50px` => means we only have two columns

<h4 class='text-purple-400 my-3'>fr</h4>
`grid-template-columns:1fr 2fr 1fr` => allocate space based on the ratio

<h4 class='text-purple-400 my-3'>repeat</h4>

`grid-template-columns:1fr 1fr 1fr 1fr `=> repeat(4, 1fr)

<h3 class='text-red-400 my-6'>grid-template-rows</h3>

<h4 class='text-purple-400 my-3'>basic</h4>
`grid-template-rows:50px 100px` => we have two rows first row 50px second 100px
<h4 class='text-purple-400 my-3'>minmax</h4>

`grid-template-rows:minmax(50px ,auto)` =>

<li> max:less than or equal to max </li>
<li> min:greater than or equal to min </li>
<h4 class='text-purple-400 my-3'>auto-fill</h4>
`grid-template-columns:repeat(auto-fill,minmax(200px ,1fr))`

take as many 200px as possible untial it can't,then use 1fr to take the rest

<h3 class='text-red-400 my-6'>grid-template</h3>
<h4 class='text-purple-400 my-3'>grid-template:row / column</h4>
it is the shortcut of defining both row and columns

```css
.container {
  grid-template: 50px 100px / 100px 50px;
}
```

<h3 class='text-red-400 my-6'>grid-auto-rows</h3>

```css
.container {
  grid-auto-rows: 150px 100px;
  /* this is to define the rest of rows not defined by grid-template-rows */
  /* if rest of  the rows are more than 2 , it will cycle around this number rest of the 1st 150px rest of 2nd 100px  rest of 3nd 150px again */
}
```

<h3 class='text-red-400 my-6'>grid-auto-colomns</h3>

<h4 class='text-purple-400 my-3'>grid-template:row / column</h4>

```css
.container {
  grid-auto-columns: 150px 100px;
  /* this is to define columns don't predefined by grid-template-columns  */
}
```

  <h3 class='text-red-400 my-6'> grid-auto-flow</h3> 
  determines where new elment added in row direction or column direction
  
  by default grid-auto-flow: row

```css
.container {
  grid-auto-flow: row dense;
  /* dense is to fit missing gap with proper size element .
  "dense" packing algorithm attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items. */
}
```

  <h3 class='text-red-400 my-6'> grid-template-areas</h3>

  <h4 class='text-purple-400 my-3'>normal case</h4>

```css
parent {
  grid-template-areas:
    'header  header'
    'sidebar content';
}

.item1 {
  grid-area: content;
}
.item2 {
  grid-area: header;
}
.item6 {
  grid-area: sidebar;
}
```

 <h4 class='text-purple-400 my-3'>use dot </h4>
 if we have three columns and we don't want to give a name we want it to act like that

```css
parent {
  grid-template-areas:
    'header  header header'
    'sidebar content .';
}

.item1 {
  grid-area: content;
}
.item2 {
  grid-area: header;
}
.item6 {
  grid-area: sidebar;
}
```

<h4 class='text-purple-400 my-3'>occupy the content with two rows </h4>

```css
parent {
  grid-template-areas:
    'header  header'
    'sidebar content'
    'sidebar content';
}

.item1 {
  grid-area: content;
}
.item2 {
  grid-area: header;
}
.item6 {
  grid-area: sidebar;
}
```

  <h3 class='text-red-400 my-6'> gap</h3>

row-gap | column-gap | gap

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
  /* gap: row gap | column gap */
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

  <h3 class='text-red-400 my-6'> span</h3>

<h4 class='text-purple-400 my-3'>normal case </h4>

```css
.container {
  grid-column-start: 1;
  grid-column-end: 3;

  /* this will make this column span for 2 */
}
```

<h4 class='text-purple-400 my-3'>shorthand</h4>

```css
.container {
  grid-row: 1/3;
  /* shorthand of row span for 2 */
  grid-column: 1/3;
  /* shorthand of column span for 2 */
}
```

<h4 class='text-purple-400 my-3'>span in a certain row or column</h4>

```css
.item_one {
  grid-row: span 2;
  /* this item has a row span for 2 */
}
```

<h4 class='text-purple-400 my-3'>single row or column</h4>

```css
.item_one {
  grid-row: 2;
  /* this style will apply on the second row*/
}
```

<h4 class='text-purple-400 my-3'>to end</h4>

we use negative value to count down normal -1 means the end

```css
.item_one {
  grid-column: 1/-1;
  /* this item will last from first column to the end */
}
```

  <h3 class='text-red-400 my-6'> justify and align</h3>

this is exactly the same with flex

justify-content:center | start | end ...

align-content:center | start | end ...

justify-items | align-items : start|end|center ...

align-self | justify-self: center

  <h2 id='position'class='font-bold text-gray-700 my-10'> Position </h2> 
  
  <h3 class='text-red-400 my-6'> static</h3> 
  
  ```css
  box{
    position:static;
    /* this is default setting */
  }
  ```

  <h3 class='text-red-400 my-6'> relative</h3>

it is relative to its own original place =>this case is rarely used

we can also use position relative to combine absolute in later cases

```css
box {
  position: relative;
  top: 2rem;
}
```

  <h3 class='text-red-400 my-6'> absolute</h3>

if box is the parent of div , div will be positioned based on its parent elemnt box .
in this case will take the whole height

```css
box {
  position: relative;
}

div {
  position: absolute;
  top: 0;
  bottom: 0;
}
```

  <h3 class='text-red-400 my-6'> fixed</h3>

An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

<div class='bg-orange-200'>A fixed element does not leave a gap in the page where it would normally have been located.</div>

<br />

```css
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73ad21;
}
```

  <h3 class='text-red-400 my-6'> sticky</h3>

An element with position: sticky; is positioned based on the user's scroll position.

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

  <h2 id='zindex'class='font-bold text-gray-700 my-10'> Z-index</h2>

z-index with bigger number is on the topper layer than the lowwer number

use position and z-index to have its own stacking context

  <h2 id='mulColL' class='font-bold text-gray-700 my-10'> Multiply Column Layout </h2>

  <h3 class='text-red-400 my-6'> column-count</h3> 
  
  ```
  colum-count:2;
  ```

naturally comes out 2 columns

2 means max number of columns you can have

  <h3 class='text-red-400 my-6'> column-width</h3>

```
column-width:100px;
```

if we write this code it means

  <li>columns width can not be smaller than 100px</li>
  <li>filled with as many 100px columns as possible</li>
  <li>it doesn't have to be 100px exactly, maybe more than that to fill the extra gap</li>
  
  <h3 class='text-red-400 my-6'> column-rule</h3>

```
column-rule:1px solid black;
```

it act just like a border in-between the columns with specified width and color

  <h3 class='text-red-400 my-6'> column-gap</h3>

```
column-gap:40px;
```

distance between the column

  <h3 class='text-red-400 my-6'> column-span</h3>

```
column-span:all;
```

<br />

<li>work on header to take the entire line</li>
<li>we can only use all or none as value in column-span,but we can not specify the number like column-span:2;</li>

  <h3 class='text-red-400 my-6'> column-fill</h3>

```
column-fill:auto | balance;
```

<br />

<li>default should be balance</li>
<li>auto => to fill the rest of the space in column</li>

  <h2 id='overflow' class='font-bold text-gray-700 my-10'> Overflow</h2>

  <h3 class='text-red-400 my-6'> visible</h3>

```css
.box {
  overflow: visible;
  /* visible is the default setting */
}
```

<h3 class='text-red-400 my-6'>auto</h3>

```css
.box {
  overflow: auto;
  /* automatically add a scrollbar if needed */
}
```

<h3 class='text-red-400 my-6'>scroll</h3>

```css
.box {
  overflow: scroll;
  /* make the content isndie its container scrollable*/
}
```

<h3 class='text-red-400 my-6'>hidden</h3>

```css
.box {
  overflow: hidden;
  /* anything outside of itsc container will be hidden*/
}
```

<h3 class='text-red-400 my-6'>axis</h3>

```css
.box {
 overflow-x | overflow-y;
  /* to change which direction they want to set their overflow to be */
}
```

<h3 class='text-red-400 my-6'>commonly used situation</h3>

<h4 class='text-purple-400 my-3'>hide the scrollbar but keep functionality</h4>

```css
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;
}

/* _ Hide scrollbar for IE, Edge and Firefox _ */

.example {
-ms-overflow-style: none; /_ IE and Edge _/
scrollbar-width: none; /_ Firefox _/
}
```

<h2 id='custom' class='font-bold text-gray-700 my-10'> custom style </h2>

<h3 class='text-red-400 my-6'>define variable </h3>

<div>-- to define variable</div>

```css
:root {
  --primary-color: red;
}
```

<h3 class='text-red-400 my-6'>var</h3>

var() to read and use variable

```css
h2 {
  background: var(--primary-color);
}
```

<h3 class='text-red-400 my-6'>default value</h3>

```css
h2{ margin(--margin,10px)}

/* if without --margin value,default value will come into play */

```

<h3 class='text-red-400 my-6'>overriden</h3>

```css
:root{
--margin:0
}

h2{
 --margin:20px;
margin:var(--margin);

```

<h3 class='text-red-400 my-6'>js</h3>

```js
// log
const button = document.querySelector('button').addEventListener('click',()=>{
 console.log(getComputeStyle(document.documentElement.getPropertyValue('--primary-color'))
})

// set value
const button = document.querySelector('button').addEventListener('click',()=>{
 document.documentElement.style.setProperty('--primary-color','red');
})

```

<h2 id='calc' class='font-bold text-gray-700 my-10'> calc </h2>

<h3 class='text-red-400 my-6'>combine different unit</h3>

we can use different unit to calculate the final value

```
calc(10%+1rem)
```

<h3 class='text-red-400 my-6'>variable</h3>

inside of calc function we allow to use variable

```
calc(var(--margin)+10px)
```

<h3 class='text-red-400 my-6'>transfer</h3>

we can transfer from number to real unit

```
--razor:10
cal(var(--razor)*1px)

```

<h2 id='advanceSel' class='font-bold text-gray-700 my-10'> advanced selector </h2>

<h3 class='text-red-400 my-6'>A > B</h3>
B is direct child ，can not be grandchild

<h3 class='text-red-400 my-6'>A ~ B</h3>
B is next sibling comes after A ，style not applies to sibling comes before A

<h3 class='text-red-400 my-6'>A + B</h3>

B is the only direct next sibling will apply

<h3 class='text-red-400 my-6'>not()</h3>

The :not() CSS pseudo-class represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the negation pseudo-class.

```css
p:not(.irrelevant) {
  font-weight: bold;
}

p > strong,
p > b.important {
  color: crimson;
}

p > :not(strong, b.important) {
  color: darkmagenta;
}
```

<h3 class='text-red-400 my-6'>[] attribute selector</h3>

```css
input[type='text'] {
  background-color: red;
  /* only text input will be applied red */
}
```

```css
/* data attribute */
input[data-margin] {
  margin: 50px;
}
```

```css
/* anything contain using * */
input[data-margin*='fa'] {
  margin: 50px;
  /* any input with data-margin that contains value of fa */
}
```

```css
/* anything start with using ^ */
input [data-margin^='fa'] {
}
```

```css
/* ``*/
input [data-margin$='fa'] {
}
```

<h2 id='pseudoel' class='font-bold text-gray-700 my-10'> pseudo element  </h2>

::first-letter | ::frist-line

```css
p {
  color: red;
  font-size: 12pt;
}
p::first-letter {
  color: green;
  font-size: 200%;
}
```

::before ::after

```css
/* content */
.box::before {
  content: '';
  display: block;
  height: 25px;
  width: 25px;
  background-color: green;
}

/* attr */
.box::before {
  content: atrr(data-text);
  display: block;
  height: 25px;
  width: 25px;
  background-color: green;
}
```

```html
<body>
  <div data-text="hi" class="box"></div>
</body>
```

<h2 id='advancemar' class='font-bold text-gray-700 my-10'> advanced margin</h2>

<h3 class='text-red-400 my-6'>negative margin</h3>

to make sure overlapping feature

<h3 class='text-red-400 my-6'>center the element </h3>

```css
.box {
  margin: 0 auto;
}
```

<h2 id='browsersup' class='font-bold text-gray-700 my-10'> browser support </h2>

two webset to search the browser support

<a href='https://caniuse.com/' class='underline  text-blue-500'> can i use.com</a>
<br>
<a href='https://developer.mozilla.org/en-US/' class='underline  text-blue-500'> MDN</a>

<!-- [can i use.com](https://caniuse.com/)

[MDN](https://developer.mozilla.org/en-US/) -->

<h2 id='resetnor' class='font-bold text-gray-700 my-10'> reset and normalization </h2>

CSS Reset vs. Normalize
The Normalize and Reset files are used to create baseline styles for cross-browser consistency when creating webpages. The primary difference is that Normalize aims to identify the different styles in other browsers, starting with styles that developers cannot change. If a style cannot be fixed or updated, that style will be applied to the page for all browsers. Check out the video below to learn more about the difference between the two files.

In the case of the Reset CSS file, default browser styles are handled differently. Reset CSS aims to fix inconsistencies through the stripping of all default styles. This process changes rules with values to zero or the minimum value. So while it strips the defaults, it sets the values to the absolute minimum.

Normalize CSS Example
Now that you have a basic understanding of how the Normalize file works let’s look at an example of some code from it. The following code handles normalizing the line height across browsers to create consistency.

<h2 id='featurequ' class='font-bold text-gray-700 my-10'> feature query </h2>

<h3 class='text-red-400 my-6'>@support</h3>

```css
@supports (background-color: revert) {
  div {
    background-color: revert;
  }
}
```

<h3 class='text-red-400 my-6'>@support not()</h3>

```css
@supports not (background-color: revert) {
  div {
    background-color: transparent;
  }
}
```

<h3 class='text-red-400 my-6'>and |  or</h3>

```css
@supports () and|or () {
}
```

<br />

<div class='bg-orange-400'> IE don't support @support but not that important</div>

<h2 id='mediaqu' class='font-bold text-gray-700 my-10'> media query </h2>

<h3 class='text-red-400 my-6'>@media</h3>
print

screen

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

all
to all media
all is omit

<h3 class='text-red-400 my-6'>(orientation: )</h3>

portrait
The viewport is in a portrait orientation, i.e., the height is greater than or equal to the width.

landscape
The viewport is in a landscape orientation, i.e., the width is greater than the height.

```css
@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

<h3 class='text-red-400 my-6'>and | or</h3>

```css
@media (max-width:200px),(min-width:800px){
  p{
  color:green;
 }
```

<h2 id='customfont' class='font-bold text-gray-700 my-10'> custom fonts </h2>

<h3 class='text-red-400 my-6'>google fonts</h3>

```html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
  <style>
    body {
      font-family: 'Sofia', sans-serif;
    }
  </style>
</head>
```

<h3 class='text-red-400 my-6'>@font-face</h3>
<h4 class='text-purple-400 my-3'>font regular</h4>

```css
@font-face {
  font-family: Montserrat;
  src: url('/fonts/monserrat-regular.woff2') format('woff2'), url('/fonts/monserrat-regular.woff')
      format('woff');
  font-weight: normal;
  font-style: normal;
}
```

<h4 class='text-purple-400 my-3'>font bold</h4>

```css
@font-face {
  font-family: Montserrat;
  src: url('/fonts/monserrat-bold.woff2') format('woff2'), url('/fonts/monserrat-bold.woff')
      format('woff');
  font-weight: bold;
  font-style: bold;
}
```

<h4 class='text-purple-400 my-3'>use font</h4>

```css
body {
  font-family: Messerat;
  font-weight: bold;
}
```

<h4 class='text-purple-400 my-3'>features </h4>

<div> font-family </div>

<div> src:url()format() </div>
<div> font-weight </div>
<div> font-style </div>

<div> font-display</div>
<li>block</li>
<li>swap( most common case)</li>
<li>fallback</li>
<li>optional</li>

🇼🇫 block:

<div> &nbsp; &nbsp; &nbsp; hold font-loading time as long as possible </div>
<br>
🔥 swap:

<li>make loading time shorter </li>
<li>use fallback fonts to replace temporily </li>
<li>if succeed loading , change back to custom fonts</li>
<br>
🔙  fallback:

<li>only wait couple of seconds</li>
<li>during these short period, if failed loading ,will never change back to costom fonts</li>

🧺 optional:

<div> &nbsp; &nbsp; &nbsp; 100miliseconds to load ,if not shown ,perminantly load fallback</div>
<br>
