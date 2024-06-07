document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('product-list');

    async function loadProducts() {
        try {
            const response = await fetch('/products');
            const products = await response.json();

            productList.innerHTML = '';
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');

                productElement.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price">R$ ${product.price.toFixed(2)}</div>
                    <button>Comprar</button>
                `;

                productList.appendChild(productElement);
            });
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
        }
    }

    loadProducts();
});
