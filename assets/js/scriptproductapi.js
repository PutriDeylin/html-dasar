// Fetch data dari fakestoreapi.com API
fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((data) => {
  // Product-list container
  const productList = document.getElementById('product-list');

  // Loop dan buat product card
  data.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    // Buat konten product card
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
    `;

    // Tambahkan product card ke product-list container
    productList.appendChild(productCard);
  });
})
.catch((error) => console.error('Error fetching data:', error));


