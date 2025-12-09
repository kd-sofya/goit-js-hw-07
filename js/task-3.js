const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");
console.dir(spanText);


inputText.addEventListener("input", event => {
    // spanText.textContent = event.currentTarget.value.trim();
    const value = event.currentTarget.value.trim();
    if (value === "") {
        spanText.textContent = "Anonymous";
    } else
        spanText.textContent = event.currentTarget.value.trim();
});