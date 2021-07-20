import myLibraryInstance from "../lib";

document.querySelector("body").innerHTML = `<h1>Hello World!</h1>`;

console.log("myLibraryInstance", myLibraryInstance);

const link = document.createElement('a');
link.href = "/test.html";
link.innerText = "lol"
document.body.appendChild(link);
