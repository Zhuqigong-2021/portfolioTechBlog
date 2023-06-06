<style src="../../styles/md.css"></style>

# Setup

<h2 id='cli' class='font-bold text-gray-700 my-10'> Angular CLI </h2>

<div class='bg-[rgba(0,0,0,0.8)] p-1 text-white'>

npm install -g @angular/cli

</div>

<p>Check all the ng command</p>

<div class='bg-[rgba(0,0,0,0.8)] p-1 text-white'>

<span class='text-yellow-400'>ng</span> --help

</div>

<h1 id="component" class="mt-10">Component</h1>

<h2 id='import' class='font-bold text-gray-700 my-10'> import </h2>

app.component.ts
look for selector :

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "basics";
}
```

<p class='wrap'>import it in the correspondent html file , I have to look for  index.html</p>

```html
<body>
  <app-root></app-root>
</body>
```

<h2 id='new' class='font-bold text-gray-700 my-10'> start a project </h2>

```css
ng new project_name
```

it will generate four files when creating a component , we new the component course-card

![component.](/assets/component.jpg)

let's say now if we want to generate ta sales-person-list as component

```
ng g component sales-person-list
```

<h1 id="class" class="mt-10">Class</h1>

then we need to generate a class called SalesPerson inside of this component

```
ng generate class sales-person-list/SalesPerson
```

in the sales-person.ts

```js
export class SalesPerson {
 constructor(public firstName:string,
                   public lastName:string,
                   public email:string,
                   public salesVolumn:number){
                   }
}

```

then if we define a state with class

```js
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Annup", "Kumar", "anup.kumar@luvcode.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@luv2code.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@luvcode.com", 90000),
  ];
}
```

<h1 id="service" class="mt-10">Service</h1>

if we need to create a service

```
ng generate service services/product
```

once we successfully create this service ,we need to import the module
go to app.module.ts,and add ProductServices into providers

```js
import {HttpClientModule} from '@angular/common/http'
@NgModule({
   declarations:[
        AppComponents,
        ProductListComponent
    ],
    imports: [
       BrowserModule,
       HttpClientModule
   ],
   providers: [ProductService],
})

```

in the service we need to do

![service](/assets/service.jpg)

<h1 id="props" class="mt-10">passing props@input</h1>

it depends on how to pass props
now we need to pass object as a props first we need to define a interface
![interface](/assets/interface.jpg)

```js
export interface Course {
  id: number;
  description: string;
  iconUrl: string;
  longDescription: string;
  category: string;
  lessonsCount: number;
}
```

@input()
course-card.component.ts
then we inport this interface to the Place you need to define the type
it is like a react const React = ({course:Course }){ }

```js
@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;
}
```

app.component.html
in the place you need to render course-card component
use [course}="course" to pass this props

```js
 <course-card *ngFor="let course of  courses  "
                 (courseChanged)="save($event)"
                 type="beginner"
                 [course]="course">
```

in the course-card component .html
you can render

```js
 <div class="course-title">
      {{  course.description }}
  </div>

```

<h1 id="state" class="mt-10">State</h1>

app.component.ts

```js
export class AppComponent {
  title = "this is Angular state ";
}
```

app.component.html

```js
<span>Welcome{{ title }}</span>
```

![state](/assets/state.jpg)

but we can not make it using html or css or js syntax

```js
date = {
  title: '<h1>Angular Core Deep Dive</h1><script>alert("Attack")</script>',
};
```

it won't apply the style

<h1 id="style" class="mt-10">Style</h1>

 <h2 id='scope' class='my-5 font-semibold'>scoped style</h2>  
app.component.html

```js
<input class="demo" />
```

app.component.css this will only apply styles on the app component

```css
input.demo {
  border: 2px solid cyan;
  width: 300px;
  height: 30px;
  font-size: 25px;
}
```

<h2 id='global' class='my-5 font-semibold'>global style</h2>  
but if you find assets/styles.css
that will apply the style globally

<h1 id="attributes" class="mt-10">Attributes Directives</h1>

[ ] with attribute , it means after it , it will be dynamically changed state
it can read this property , not the string

![data](/assets/data.jpg)

```js
<input type="text" class="demo" [value]="data.title" />

```

![dataprop](/assets/dataprop.jpg)

but if you don't use [ ] in the value , it will be static , it only regard what's behind as a string

```js
<input type="text" class="demo" value="data.title" />
```

because value it is just attribute , it only regards this as a string value not a object or state, it is a bit like using : in vue
![datafailed](/assets/datafailed.jpg)

<h1 id="event" class="mt-10">Event</h1>

<h2 id='click' class='my-5 font-semibold '>click</h2> 
for example on the button element

```html
<button (click)="onClick()">click me</button>
```

in the component.ts file we define this event handler

```js
export class AppComponent {
  title = "this is Angular state ";
  data = {
    title: "this is data title",
  };
  onClick() {
    alert("Hello World");
  }
}
```

the effects when click this button

![click](/assets/click.jpg)

<h2 id='onChange' class='my-5 font-semibold '>onChange</h2>
now, we give this input id  called #titleInput,
than we use a event called keyup and its event handler called onKeyup 
using input_id.value to keep track of the value in in the input

```html
<span>{{ data.title }} app is running!</span>
<input
  type="text"
  class="demo"
  value="data.title"
  #titleInput
  (keyup)="onKeyUp(titleInput.value)"
/>
```

define this in the component .ts
we expect a string value , so we name it newTitle and assign this value to our data state

```js
export class AppComponent {
  title = "this is Angular state ";
  data = {
    title: "this is data title",
  };
  OnClick() {
    alert("Hello World");
  }
  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
```

the whole process, we can also use input

```html
<span>{{ data.title }} app is running!</span>
<input
  type="text"
  class="demo"
  [value]="data.title"
  #titleInput
  (input)="onInput(titleInput.value)"
/>
```

```js
export class AppComponent {
  title = "this is Angular state ";
  data = {
    title: "this is data title",
  };

  onInput(newTitle: string) {
    this.data.title = newTitle;
  }
}
```

whatever I typed , title will change based on the input

![input](/assets/input.jpg)

<h2 id='customed' class='my-5 font-semibold '>customed event @output </h2>

we have a new cosutomized event it means it is not like keyUp , input, click ...
we name is courseSelected => then we define a handler called onCourseSelected
in the app.component.html

```html
<course-card
  (courseSelected)="onCourseSelected($event)"
  [course]="coreCourse"
/>
```

in the course-card.component.ts
we define an emitter which is on listen for the event onCourseSelected ,
so we need to add @output with the name of the event ('courseSelected')
as long as the courseSelected is called,we make a emitter named courseEmitter.

```js
export class CourseCardComponent {
  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('card component button clicked ...');
    this.courseEmitter.emit(this.course);
  }
}
```

in the course-card.html
we make a click event on the button ,once it is clicked ,we call onCourseViewed event
as long as it is triggered , we use this courseEmitter to emit a course state

```html
<div>
  <h1>{{ course.description }}</h1>
  <img [src]="course.iconUrl" alt="" />
  <p>{{ course.longDescription }}</p>
  <button (click)="onCourseViewed()">View Course</button>
</div>
```

<h1 id="structural" class="mt-10">Structual Directive *ngFor</h1>

<h2 id='letof' class='my-5 font-semibold '>let of </h2>
we  have a course-card component , now we pass course into it 
we use *ngFor to map each object in the courses data use  let of syntax to loop

```js
 <course-card
    *ngFor="
      let course of courses;
      index as i;
      first as isFirst;
      last as isLast;
      even as isEven;
      odd as isOdd
    "
    [class.is-first]="isFirst"
    [class.is-last]="isLast"
    [class.is-even]="isEven"
    [class.is-odd]="isOdd"
    (courseSelected)="onCourseSelected($event)"
    [course]="course"
    [cardIndex]="i + 1"
  />
```

the courses data we define it in the app.component.ts

```js
export class AppComponent {
  courses = COURSES;
}
```

we define a few @input in the child component the course-card to receive the props

```js
export class CourseCardComponent {
  @Input()
  course: Course;
  @Input()
  cardIndex: number;
}
```

<h2 id='index' class='my-5 font-semibold '>index,first,last,even,odd</h2>
in the let of syntax , we do have other factor like index ,  first , last ,even, odd we use it here

```js
<course-card
  *ngFor="let course of courses;
index as i;
first as isFirst;
last as isLast;
even as isEven;
odd as isOdd;
"
  [class.is-first]="isFirst"
  [class.is-last]="isLast"
  [class.is-even]="isEven"
  [class.is-odd]="isOdd"
  (courseSelected)="onCourseSelected($event)"
  [course]="course"
  [cardIndex]="i + 1"
/>
```

<h2 id='styles' class='my-5 font-semibold '>styles</h2>

styles should be put assets/styles.css
we can also use dynamic class
[class.is-first] =" isFirst" it means we add is-first class only if isFirst value returns true

```css
course-card.is-first {
  border-top: 2px solid grey;
  padding-top: 20px;
}

course-card.is-last {
  border-bottom: 2px solid grey;
  padding-top: 20px;
}
course-card.is-even {
  background: lightgray;
}
course-card.is-odd {
  background: lightcyan;
}
```

finally we use these props in the course-card.component.html

```html
<div>
  <h1>{{ cardIndex + " " + course.description }}</h1>
  <img [src]="course.iconUrl" alt="" />
  <p>{{ course.longDescription }}</p>
  <button (click)="onCourseViewed()">View Course</button>
</div>
```

<h1 id="others" class="mt-10">Other Directives</h1>

<h2 id='ngIf' class='my-5 font-semibold '>*ngIf</h2>

if we set it be false

```html
<div>
  <h1>{{ cardIndex + " " + course.description }}</h1>
  <img *ngIf="false" [src]="course.iconUrl" alt="" />
  <p>{{ course.longDescription }}</p>
  <button (click)="onCourseViewed()">View Course</button>
</div>
```

there will be no photo
![nophoto](/assets/nophoto.jpg)

if we set it true

```html
<div>
  <h1>{{ cardIndex + " " + course.description }}</h1>
  <img *ngIf="true" [src]="course.iconUrl" alt="" />
  <p>{{ course.longDescription }}</p>
  <button (click)="onCourseViewed()">View Course</button>
</div>
```

![withphoto](/assets/withPhoto.jpg)

so we can pass a boolean or a object or function
that will return true of false to depend whether it is visible

```html
<div class="course-card">
  <h1>{{ cardIndex + " " + course.description }}</h1>
  <img width="300" *ngIf="isImageVisible()" [src]="course.iconUrl" alt="" />
  <p>{{ course.longDescription }}</p>
  <button (click)="onCourseViewed()">View Course</button>
</div>
```

in the card component.ts

```js
isImageVisible() {
    return this.course && this.course.iconUrl;
  }
```

## ?

sometimes we use ? to chain on some undefined object

```html
<div class="course-card">
  <h1>{{ cardIndex + " " + course?.description }}</h1>
  <img width="300" *ngIf="isImageVisible()" [src]="course.iconUrl" alt="" />
  <p>{{ course?.longDescription }}</p>
  <button (click)="onCourseViewed()">View Course</button>
</div>
```

but it is not making sense we if there is no course ,there is no point of rendering this card

```html
<div class="course-card" *ngIf="course">
  <h1>{{ cardIndex + " " + course.description }}</h1>
  <img width="300" *ngIf="isImageVisible()" [src]="course.iconUrl" alt="" />
  <p>{{ course.longDescription }}</p>
  <button (click)="onCourseViewed()">View Course</button>
</div>
```

## else logic

use ng-template give it a id , use else keyword
write else logic inside of \*ngIf, but use ; to seperate it

```js
<div class="course-card">
  <h1>{{ cardIndex + " " + course.description }}</h1>
  <img
    width="300"
    *ngIf="isImageVisible(); else noImage"
    [src]="course.iconUrl"
  />
  <ng-template #noImage>
    <p>No image is available</p>
  </ng-template>
  <p>{{ course.longDescription }}</p>
  <button (click)="onCourseViewed()">View Course</button>
</div>
```

![noimage](/assets/noimage.jpg)
check the data
![noIconUrl](/assets/noIconUrl.jpg)

<h2 id='ngClass' class='my-5 font-semibold '>[ngClass]</h2>
string ,array,configuration object 
its purpose is to apply dynamic styles

<h2>String</h2>

pass it as a string
" ' beginner' " but it can apply many string the same time " 'cousr-card beginner' "

```html
<div class="course-card" *ngIf="course" [ngClass]="'beginner'">
  card content...
</div>
```

we give a style like this

```css
.course-card.beginner {
  background: orange;
}
```

![orange](/assets/orange.jpg)

array
<br>
pass a array of string

```html
<div class="" *ngIf="course" [ngClass]="['beginner', 'course-card']">
  card content ...
</div>
```

configuration object

```html
<div *ngIf="course" [ngClass]="{ beginner: false, 'course-card': true }">
  ...card content
</div>
```

then you will notice the beginner class didn't apply
![class](/assets/class.jpg)

function
<br>
we can write function in the ngClass

```html
<div class="" *ngIf="course" [ngClass]="cardClasses()">... card content</div>
```

```js
export class CourseCardComponent {
...

  cardClasses() {
    return { beginner: false, 'course-card': true };
  }
}
```

in this way we can do a lot dynmaic styling

```js
export class CourseCardComponent {
...others
  cardClasses() {
    return {
      beginner: this.course.category == 'BEGINNER',
      'course-card': true,
    };
  }
}
```

![beginer](/assets/beginer.jpg)

then check the style
on number 2 category is BEGINNER
![compare](/assets/compare.jpg)

other way to write the logic

```js
cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return ['beginner'];

    }
    return null
  }
```

<h2 id='ngStyle' class='my-5 font-semibold '>[ngStyle]</h2>

we can use object

```html
<div class="course-card" *ngIf="course" [ngClass]="cardClasses()">
  <h1 [ngStyle]="{ 'text-decoration': 'underline' }">
    {{ cardIndex + " " + course.description }}
  </h1>
  ... others
</div>
```

or use a function

```html
<div class="course-card" *ngIf="course" [ngClass]="cardClasses()">
  <h1 [ngStyle]="cardStyles()">{{ cardIndex + " " + course.description }}</h1>
  ...others
</div>
```

```js
 cardStyles() {
    return { 'text-decoration': 'underline' };
  }
```

<h2 id='ngSwitch' class='my-5 font-semibold '>styles</h2>
<h2 id='ngContainer' class='my-5 font-semibold '>styles</h2>
