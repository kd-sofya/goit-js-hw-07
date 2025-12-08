const inputText = document.querySelector(".task-3-input");
const spanText = document.querySelector(".task-3-span");
console.log(spanText);


inputText.addEventListener("input", event => {
    spanText.textContent = event.currentTarget.value;
});