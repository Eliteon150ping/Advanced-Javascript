let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
    let item = document.querySelector("#item")
    createItem(item)
})


function createItem(item) {

    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()

}


function display() {
    let items = "";
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="output"><label><input type="checkbox">${itemsArray[i]}</div>`
    }
    document.querySelector(".to-do-list").innerHTML = items
}

window.onload = function () {
    display()
}