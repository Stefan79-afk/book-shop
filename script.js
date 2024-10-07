const books = [
    {
        id: "alice-wonderland",
        name: "Alice Wonderland",
        price: 10,
        quantity: 0,
    },
    {
        id: "snow-white",
        name: "Snow White",
        price: 13,
        quantity: 0,
    },
    {
        
        id: "rapunzel",
        name: "Rapunzel",
        price: 15,
        quantity: 0,
    },
]

function displayTotal() {
    const totalElement = document.getElementById("total");
    const total = calculateTotal();
    totalElement.textContent = `Total: $${total}`;
}

function calculateTotal() {
    let total = 0;

    books.forEach(book => {
        total += book.price * book.quantity;
    })

    return total;
}

window.addEventListener("DOMContentLoaded", () => {
    displayTotal();

    const inputs = document.querySelectorAll("#calculator input");

    inputs.forEach(input => {
        input.addEventListener("keyup", (event) => onInput(event, input));
        input.addEventListener("change", (event) => onInput(event, input));
    });
})

function onInput(event, input) {
    const book = books.filter(book => book.id === input.id)[0];
    book.quantity = event.target.value;
    displayTotal();
}

