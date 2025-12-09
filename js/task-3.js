const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");
console.dir(spanText);


inputText.addEventListener("input", event => {
    // spanText.textContent = event.currentTarget.value.trim();

    if (spanText.textContent === "") {
        return "Anonymous";
    } else
        spanText.textContent = event.currentTarget.value.trim();
});