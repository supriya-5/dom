

// 1.

const element1 = document.getElementById("text");
console.log(element1.innerText);

// 2.


var element2 = document.getElementsByTagName("h1")
console.log(element2[0].innerText);
console.log(element2[1].innerText);

// 3.
const element3 = document.getElementsByClassName("class1")
console.log(element3[0].innerText);

// 4.

const element4 = document.getElementsByTagName("h1");
element4[2].innerText = "Hello World";
console.log(element4[2].innerText);

// 5.
function flexChange(){
    const element5 = document.getElementsByClassName("container");
    element5[0].style.flexDirection = "column";
}
// 6. 
var element5 = document.getElementsByTagName("h1");
element5[2].setAttribute('id','h2Tag')
element5[2].style.color = "blue";

// 7.
function textChange(){
    const element7 = document.getElementsByClassName("textChange");
    element7[0].innerText = "Welcome to Elevation academy";
}
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


8. // Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function printValue(){
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1);
}

// 9.
function form(){
    var form = document.createElement("form");
    form.setAttribute("method","get");
    form.setAttribute("action","submit");

var N= document.createElement("input");
var brr = document.createElement("br");
N.setAttribute("type","text");
N.setAttribute("name","Name");
N.setAttribute("placeholder","name");

var E= document.createElement("input");
E.setAttribute("type","email");
E.setAttribute("name","Email");
E.setAttribute("placeholder","email@prepbytes.com");
E.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com")

var P= document.createElement("input");
P.setAttribute("type","number");
P.setAttribute("name","Phone no:");
P.setAttribute("placeholder","Phone number");
P.setAttribute("maxlength","12");
P.setAttribute("pattern","[91]{2}[0-9]{10}");

var DB= document.createElement("input");
DB.setAttribute("type","date");
DB.setAttribute("name","DOB");
DB.setAttribute("placeholder","DOB");
DB.setAttribute("min","1995-10-30");

form.appendChild(N);
form.appendChild(E);
form.appendChild(P);
form.appendChild(DB);
form.appendChild(brr);

document.getElementsByClassName("form")[0]
    .appendChild(form);
}
form();