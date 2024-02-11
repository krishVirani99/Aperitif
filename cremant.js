let quantity = 1;

document.getElementById('plus').addEventListener('click', () => {
 quantity++;
 document.getElementById('quantity').textContent = quantity;
});

document.getElementById('minus').addEventListener('click', () => {
 if (quantity > 1) {
    quantity--;
 }
 document.getElementById('quantity').textContent = quantity;
});