// orders.js

document.addEventListener('DOMContentLoaded', function() {
    const orderTable = document.querySelector('.admin-content table');
    if (orderTable) {
        orderTable.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') {
                const action = event.target.textContent;
                const row = event.target.closest('tr');
                const orderId = row.cells[0].textContent;

                if (action === 'Edit') {
                    // Handle edit order action
                    // Open a modal or navigate to an edit page
                } else if (action === 'Delete') {
                    // Handle delete order action
                    fetch(`/api/orders/${orderId}`, {
                        method: 'DELETE'
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('Order deleted successfully!');
                            row.remove();
                        } else {
                            alert('Error deleting order');
                        }
                    })
                    .catch(error => console.error('Error:', error));
                }
            }
        });
    }
});
