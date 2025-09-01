// // Chapter 20 – Nested Loops
// let firstNames = ["Lil", "Big"];

// let lastNames = ["Zzz", "Boom"];

// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     if (i !== j) {
//       console.log(firstNames[i] + " " + lastNames[j]);
//     }
//   }
// }

// // Chapter 21 – Changing Case (UPERCASE AND LOWVER CASE)

// let input = prompt("What is your name:");
// console.log("Lowercase: " + input.toLowerCase());

// let city = prompt("Enter city name:");

// if (city.toUpperCase() === "KARACHI") {

//   console.log("You live in Karachi.");
// }

// // Chapter 22 – Measuring Strings
// let text = "JavaScriptRocks";
// console.log(text.slice(0, 5));

// let fullName = prompt("Enter full name:");
// console.log("Name length is: " + fullName.length);

// // Chapter 23 – Finding Segments
// let sentence = "The lazy dog sleeps.";
// console.log(sentence.indexOf("dog"));

// let message = prompt("Type something:");
// if (message.indexOf("hello") !== -1) {
//   console.log("You said hello!");
// }

// // Chapter 24 – Character at Position
// console.log("Character at index 5 is: " + "JavaScript".charAt(5));

// // Chapter 25 – Replacing Characters
// let str5 = "This is a bad example.";
// console.log(str.replace("bad", "good"));

// let jsSentence = "JS is short for JS.";
// console.log(jsSentence.replace(/JS/g, "JavaScript"));

// // Chapter 26 – Rounding Numbers

// console.log(Math.round(2.7));
// console.log(Math.floor(2.6));
// console.log(Math.ceil(2.2));

// // Chapter 27 – Random Numbers

// let coin = Math.random();
// if (coin < 0.5) {
//     console.log("Heads");

// }else{
//     console.log("Tails");
// }

// // Chapter 28 – String to Number

// let floatNum = "45.67";
// console.log(typeof parseFloat(floatNum));

// let str = "123px"
// console.log(parseInt(str));

// // Chapter 29 – Number to String
// let number = 123;
// console.log(typeof number.toString());

// let StringValue = "2025";
// console.log(Number(StringValue));

// // Chapter 30 – Decimal Length
// let x = 123.45678;
// console.log(x.toFixed(2));

// let y = "12.424";
// let num = Number(y)
// console.log(num.toFixed(1));

// // Chapter 31 – Date and Time
// let dateNow = new Date();
// console.log(dateNow);

// console.log("Year is: " + dateNow.getFullYear());

// let hrs = dateNow.getHours();
// if (hrs < 12) {
//   console.log("Good Morning");
// } else {
//   console.log("Good Evening");
// }

// // Chapter 32 – Extracting from Date

// let dateNow1 = new Date();

// console.log("Day: " + dateNow.getDate());

// console.log("Month: " + (dateNow.getMonth() + 1));

// console.log("Year: " + dateNow.getFullYear());

// console.log("Hours: " + dateNow.getHours());

// console.log("Minutes: " + dateNow.getMinutes());

// let digitalClock = dateNow.getHours() + ":" + dateNow.getMinutes();
// console.log("Time is: " + digitalClock);

// Slider

// let MainImage = document.getElementById('MainImage')

// let ImagesArray = [
//   "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjvXE1BZaaU0IHkXGrQDuGVQjT0jMWW3Xtk5R8FXFB1Gmq7NWibCk4U4WZo8-zB55rKc&usqp=CAU"
// ]

// let imageIndex = 0

// function RenderImage(){
//   MainImage.src = ImagesArray[imageIndex]
// }
// RenderImage()
function PreviousImage() {
  if (imageIndex == 0) {
    imageIndex = ImagesArray.length - 1;
  } else {
    imageIndex = imageIndex - 1;
  }
  RenderImage();
}
function NextImage() {
  if (imageIndex + 1 === ImagesArray) {
    imageIndex = 0;
  } else {
    imageIndex = imageIndex + 1;
  }
  RenderImage();
}

// let para = document.getElementsByTagName("p");
// console.log(para);

// for (let i = 0; i < para.length; i++) {
//   para[i].style.color = "red";
// }
// let box =document.getElementById('box')
// let para = box.getElementsByTagName("p");
// console.log(para);

// for (let i = 0; i < para.length; i++) {
//   para[i].style.color = "red";
// }

// let abc = ()=> "abc" //abc return
// console.log(abc());

// let abc = (num)=> num*num 
// console.log(abc(5));

let getvalue = document.getElementById("inp")
let box = document.getElementById("box")

let delteTodo = (btn1) =>{
    btn1.parentNode.remove()
}
let DelteAll = () =>{
  box.innerHTML = ""
}
let EditTodo = (btn2) =>{
    let p = btn2.parentNode   
    p.firstChild.nodeValue = prompt('Enter Value')
}

let addTodo = () =>{
    let uservalue = getvalue.value;

    let p = document.createElement('p') 
    p.innerHTML = uservalue
    
    box.appendChild(p)
    
    let EditBtn = document.createElement('button')
    EditBtn.innerHTML = 'Edit'
    EditBtn.setAttribute('onClick', 'EditTodo(this)')
    p.appendChild(EditBtn)

    let delBtn = document.createElement('button')
    delBtn.innerHTML = 'Delete'
    p.appendChild(delBtn)

    delBtn.setAttribute('onClick', 'delteTodo(this)')

    getvalue.value = ""
}
