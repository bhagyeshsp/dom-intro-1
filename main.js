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

