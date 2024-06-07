// categories.js

document.addEventListener('DOMContentLoaded', function() {
    const addCategoryForm = document.getElementById('add-category-form');
    if (addCategoryForm) {
        addCategoryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const categoryName = document.getElementById('category-name').value;

            fetch('/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: categoryName })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Category added successfully!');
                    // Clear form fields
                    addCategoryForm.reset();
                } else {
                    alert('Error adding category');
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
