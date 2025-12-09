
const el1 = document.querySelectorAll("#categories .item");
console.log("Number of categories:", el1.length);


// const el2 = document.querySelectorAll(".item-name");
// console.log(el1);
// console.log("Category:", el1.textContent);

// el2.forEach(element => {
//     console.log("Category:", element.textContent);
//     const num = element.querySelectorAll(".item-list li").length;
//   console.log("Elements:", num);
// })


// const el3 = document.querySelectorAll(".item-list ");
// el3.forEach(element => {
// const num = element.querySelectorAll(".item-list li").length;
//   console.log("Elements:", num);
// })


const el2 = document.querySelectorAll(".item");

el2.forEach(element => {
    const name = element.querySelector("h2");
    const length = element.querySelectorAll("ul li").length;

    console.log("Category:", name.textContent);
    console.log("Elements:", length);
    
})

