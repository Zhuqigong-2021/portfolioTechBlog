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

<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>

<h2 id='inlineflex' class='font-bold text-gray-700 my-10'> Inline-flex </h2>

it is very similar to inline-block

but it makes the parent element to display as inline => the element itself only takes its own size not the entire line ,

but its children elements to display flex => it allows what's inside of it to display side by side

<h2 id='grid' class='font-bold text-gray-700 my-10'> Grid </h2>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>

<h2 id='position' class='font-bold text-gray-700 my-10'> Position </h2>
<h3 class='text-red-400 my-6'>static</h3>
<h3 class='text-red-400 my-6'>relative</h3>
<h3 class='text-red-400 my-6'>absolute</h3>
<h3 class='text-red-400 my-6'>fiexed</h3>
<h3 class='text-red-400 my-6'>sticky</h3>

sadf as dfsa das dasd sfa das dsa dfsa dsa dsa dfasd fsad fsdad fsa dsa dsa df sadf sad fds dfs dfsad fsad fsdf sdf sjadlf sahof awelfj awohef lawhfe ioawefo awjoe fhawoijef oawjefo ajweo fjawof oawej oawjeof jwaofj aerighoeahfl asnfugihawlefma mejofha wioehfnoa wneofan owe

<h2 id='zindex' class='font-bold text-gray-700 my-10'> Z-index </h2>

bigger number is topper than the lowwer number

use position and z-index to have its own stacking context

<h2 id='mulColL' class='font-bold text-gray-700 my-10'> Multiply Column Layout </h2>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>
<h3 class='text-red-400 my-6'>Syntax</h3>

<h2 id='overflow' class='font-bold text-gray-700 my-10'> Overflow </h2>

<h3 class='text-red-400 my-6'>visible</h3>
<h3 class='text-red-400 my-6'>auto</h3>
<h3 class='text-red-400 my-6'>scroll</h3>
<h3 class='text-red-400 my-6'>hidden</h3>
<h3 class='text-red-400 my-6'>axis</h3>
<h3 class='text-red-400 my-6'>commonly used situation</h3>
```
