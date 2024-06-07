// cart.js

document.addEventListener('DOMContentLoaded', function() {
    const cartTable = document.querySelector('.cart-content table');
    if (cartTable) {
        cartTable.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') {
                const action = event.target.textContent;
                const row = event.target.closest('tr');
                const cartItemId = row.cells[0].textContent;

                if (action === 'Remove') {
                    // Handle remove cart item action
                    fetch(`/api/cart/${cartItemId}`, {
                        method: 'DELETE'
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('Item removed from cart successfully!');
                            row.remove();
                        } else {
                            alert('Error removing item from cart');
                        }
                    })
                    .catch(error => console.error('Error:', error));
                }
            }
        });
    }
});
