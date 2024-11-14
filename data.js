

window.onload = function () {
const form = document.querySelector("form");
const itemInput = document.getElementById("name");
const typeSelect = document.getElementById("type");
const list = document.getElementById("shopping-list");

function addItem (event) {

    event.preventDefault(); // Prevents the form from submitting

    const newItem = document.createElement("li");

    newItem.id = itemInput.value;
    newItem.innerText = itemInput.value;
    newItem.setAttribute("data-type", typeSelect.value);

    list.appendChild(newItem);

    itemInput.value = "";
    typeSelect.value = "";

    return;
}

form.addEventListener("submit", addItem);

}
