// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Adding <p> element
const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
// paragraph.setAttribute("style", "color: red;")
container.appendChild(paragraph);

// Adding an h3
const heading3 = document.createElement("h3");
heading3.textContent = "I'm heading h3!";
heading3.style.color = "blue";
container.appendChild(heading3);

// Adding complicated pink <div>
const pinkContainer = document.createElement("div");
pinkContainer.setAttribute("style", "background-color: pink; border: 1px solid black;")

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div.";
pinkContainer.appendChild(heading1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
pinkContainer.appendChild(paragraph2);

container.appendChild(pinkContainer);

// Add Events-related DOM manipulations to container2

// This is method-2 where we use arrow function
// Note that we can't make this event do more things
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

// This is method-3, it is preferrable over others
const btn3 = document.querySelector("#btn-3");
btn3.addEventListener("click", () => {
    alert("Hello, World!");
    btn3.style.backgroundColor = "red";
});

// ----------------------------------------
// ---------------------------------------

// Now let's briefly demonstrate that all three methods can also have named functions instead of anonymous functions

// Button-4 triggers this. It uses embedded HTML method (as shown in method-1)
function alertFunctionButton4() {
    alert("This  button 4 calling!");
}

// Button-5 triggers this. It uses method-2.
const btn5 = document.querySelector("#btn-5");
btn5.onclick = alertFunctionButton5;

    function alertFunctionButton5() {
        alert("This is button 5 calling!");
    }

// Button-6 triggers this. It uses method-3.
const btn6 = document.querySelector("#btn-6");
btn6.addEventListener("click", alertFunctionButton6);

    function alertFunctionButton6() {
        alert("This is button 6 calling!");
    }

// ---------------------------------------
// ---------------------------------------

// Passing parameters to the eventListener
const btn7 = document.querySelector("#btn-7");
btn7.addEventListener("click", function(e) {
    e.target.style.background = "blue";
});