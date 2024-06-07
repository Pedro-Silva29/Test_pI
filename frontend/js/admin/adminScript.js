// admin.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listeners for admin actions
    const productTable = document.querySelector('.admin-content table');
    if (productTable) {
        productTable.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') {
                const action = event.target.textContent;
                const row = event.target.closest('tr');
                const productId = row.cells[0].textContent;

                if (action === 'Edit') {
                    // Handle edit product action
                    // Open a modal or navigate to an edit page
                } else if (action === 'Delete') {
                    // Handle delete product action
                    fetch(`/api/products/${productId}`, {
                        method: 'DELETE'
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('Product deleted successfully!');
                            row.remove();
                        } else {
                            alert('Error deleting product');
                        }
                    })
                    .catch(error => console.error('Error:', error));
                }
            }
        });
    }
});
